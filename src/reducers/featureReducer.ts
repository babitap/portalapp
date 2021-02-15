import { CarouselActionTypes } from "../actions/actions"
import { FETCH_FEATURED_DATA_LIST_STARTED, 
         FETCH_FEATURED_DATA_LIST_SUCCEEDED, 
         FETCH_FEATURED_DATA_LIST_FAILED 
          } from "../actions/feature.actions"
import { FeatureData } from "../models/featuredata"    

export const featureReducer = (state: {} = {}, action: CarouselActionTypes): FeatureData => {
  switch (action.type) {
    case FETCH_FEATURED_DATA_LIST_STARTED :
      return {
        ...state,
        featureDataList: [],
        filteredList: [],        
        isListLoading: true,
        isListError: false,
        listErrorMessage: "" ,        
        searchValue: action.payload!.searchValue
      }
    case FETCH_FEATURED_DATA_LIST_SUCCEEDED :  
      let value : string = '';
      value = action.payload!.searchValue!.toLowerCase();
      let filteredValues: any[];
      if(value!= "")
      {     
        filteredValues= action.payload!.featureDataList!.filter(item=>{
        return item.title.toLowerCase().includes(value)
      })
      }
      else
      {
         filteredValues= action.payload!.featureDataList!
      }
      console.log("filteredValues reducer", filteredValues) 
      return {
        ...state,
        featureDataList: action.payload!.featureDataList,
        filteredList: filteredValues!, 
        isListLoading: false,
        isListError: false,
        listErrorMessage: "", 
        searchValue: action.payload!.searchValue,
      }
    case FETCH_FEATURED_DATA_LIST_FAILED :
      return {
        ...state,
        featureDataList: [],
        filteredList: [],       
        isListLoading: false,
        isListError: true,
        listErrorMessage: action.payload?.listErrorMessage,       
        searchValue: ""
      }    
    default:
      return state;
  }
}
