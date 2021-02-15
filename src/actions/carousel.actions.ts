import { Dispatch } from 'redux';
import {AppActions} from "./actions";
import { CustomDataResponseDTO } from '../models/response';
import { AppState } from '../reducers/rootReducer';
import { customService } from '../services/custom.service';

export const FETCH_CAROUSEL_DATA_LIST_STARTED = "FETCH_CAROUSEL_DATA_LIST_STARTED";
export const FETCH_CAROUSEL_DATA_LIST_SUCCEEDED = "FETCH_CAROUSEL_DATA_LIST_SUCCEEDED";
export const FETCH_CAROUSEL_DATA_LIST_FAILED = "FETCH_CAROUSEL_DATA_LIST_FAILED";

async function fetchAsynCarouselDataList(dispatch: Dispatch<AppActions>, searchValue: string){
    try{  
      const res: any = await customService.getCarousel();
      debugger;
       const data = res.data.map(( obj: CustomDataResponseDTO, i: number) => {      
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
        type: FETCH_CAROUSEL_DATA_LIST_SUCCEEDED,
        payload: {
          carouselDataList: data,
          filteredList: filteredValues!,
          searchValue:searchValue
        }
      })
   }
     catch (err) {
       dispatch({
         type: FETCH_CAROUSEL_DATA_LIST_FAILED
       })
     }
}

export const fetchCarouselDataList = ( searchValue: string) => {
   return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
     dispatch({
       type: FETCH_CAROUSEL_DATA_LIST_STARTED,
        payload: {
          carouselDataList: [],
          filteredList: [],
          searchValue:searchValue
        }
     })
     return fetchAsynCarouselDataList(dispatch, searchValue)
   }
 }