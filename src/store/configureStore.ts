import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer, {AppState} from "../reducers/rootReducer";
import thunk, {ThunkMiddleware} from "redux-thunk";
import {AppActions} from "../actions/actions";

const initialState = {
  carouselData: {
    carouselDataList: [],
    featureDataList: [],
    filteredList:[],
    totalItems: 0,
    isListLoading: false,
    isListError: false,
    isListErrorMessage: '',   
    searchValue:''
  },

  featureData: {   
    featureDataList: [],
    filteredList:[],
    totalItems: 0,
    isListLoading: false,
    isListError: false,
    isListErrorMessage: '',   
    searchValue:''
  }
}

export default function configureStore(){
  return createStore(rootReducer, initialState, applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>, logger));
}