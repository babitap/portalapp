import { Dispatch } from 'redux';
import {AppActions} from "./actions";
import { CustomDataResponseDTO } from '../models/response';
import { AppState } from '../reducers/rootReducer';
import { customService } from '../services/custom.service';

export const FETCH_FEATURED_DATA_LIST_STARTED = "FETCH_FEATURED_DATA_LIST_STARTED";
export const FETCH_FEATURED_DATA_LIST_SUCCEEDED = "FETCH_FEATURED_DATA_LIST_SUCCEEDED";
export const FETCH_FEATURED_DATA_LIST_FAILED = "FETCH_FEATURED_DATA_LIST_FAILED";

async function fetchAsynFeaturedDataList(dispatch: Dispatch<AppActions>, searchValue: string){
    try{     
    let payload=1;
      const res: any = await customService.getFeatured(payload);
      debugger;
      const data = res!.data!.map(( obj: CustomDataResponseDTO, i: number) => {      
      return obj;
      });

      let filteredValues: any[];
      if(searchValue!= "")
      {       
        filteredValues= res!.data!.filter( (item :any) =>{
          return item.title.toLowerCase().includes(searchValue.toLowerCase())
        })        
      }
      else
      {
         filteredValues= data!
      }   
      dispatch({
        type: FETCH_FEATURED_DATA_LIST_SUCCEEDED,
        payload: {
          featureDataList: data,
          filteredList: filteredValues!,          
          searchValue:searchValue   
        }
      })
   }
   catch (err) {
       dispatch({
         type: FETCH_FEATURED_DATA_LIST_FAILED
       })
     }
}

export const fetchFeaturedDataList = (searchValue: string) => {
  debugger;
   return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
     dispatch({
       type: FETCH_FEATURED_DATA_LIST_STARTED,
        payload: {
          featureDataList: [],
          filteredList: [],          
          searchValue:searchValue 
        }
     })
     return fetchAsynFeaturedDataList(dispatch, searchValue)
   }
 }
