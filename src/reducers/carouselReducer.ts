import { CarouselActionTypes } from "../actions/actions"
import { FETCH_CAROUSEL_DATA_LIST_STARTED, FETCH_CAROUSEL_DATA_LIST_SUCCEEDED, FETCH_CAROUSEL_DATA_LIST_FAILED} from "../actions/carousel.actions" 
import { CarouselData } from "../models/carouseldata"
export const carouselReducer = (state: {} = {}, action: CarouselActionTypes): CarouselData => {
  switch (action.type) {
    case FETCH_CAROUSEL_DATA_LIST_STARTED :  
      return {
        ...state,
        carouselDataList: [],
        filteredList: [],        
        isListLoading: true,
        isListError: false,
        listErrorMessage: "" ,       
        searchValue: action.payload!.searchValue
      }
    case FETCH_CAROUSEL_DATA_LIST_SUCCEEDED :
      let value : string = '';
      value = action.payload!.searchValue!.toLowerCase();
      let filteredValues: any[];
      if(value!= "")
      {     
        filteredValues= action.payload!.carouselDataList!.filter(item =>{
           return item.title.toLowerCase().includes(value)
      })
      }
      else
      {
         filteredValues= action.payload!.carouselDataList!
      }
      console.log("filteredValues reducer", filteredValues) 
      return {
        ...state,
        carouselDataList: action.payload!.carouselDataList,
        filteredList: filteredValues!,
        isListLoading: false,
        isListError: false,
        listErrorMessage: "",                  
        searchValue: action.payload!.searchValue,
      }
    case FETCH_CAROUSEL_DATA_LIST_FAILED :
      return {
        ...state,
        carouselDataList: [],
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
