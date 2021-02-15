import { CarouselData } from "../models/carouseldata";
import { FeatureData } from "../models/featuredata";
import {
    FETCH_CAROUSEL_DATA_LIST_STARTED,
    FETCH_CAROUSEL_DATA_LIST_SUCCEEDED,
    FETCH_CAROUSEL_DATA_LIST_FAILED
  } from "./carousel.actions"

  import {    
    FETCH_FEATURED_DATA_LIST_STARTED,
    FETCH_FEATURED_DATA_LIST_SUCCEEDED,
    FETCH_FEATURED_DATA_LIST_FAILED 
  } from "./feature.actions"

  export interface fetchCarouselDataStartedAction {
    type: typeof FETCH_CAROUSEL_DATA_LIST_STARTED,
    payload?: CarouselData
  }

  export interface fetchCarouselDataSuccessAction {
    type: typeof FETCH_CAROUSEL_DATA_LIST_SUCCEEDED,
    payload?: CarouselData
  }

  export interface fetchCarouselDataFailAction {
    type: typeof FETCH_CAROUSEL_DATA_LIST_FAILED,
    payload?: CarouselData
  }

  export interface fetchFeaturedDataStartedAction {
    type: typeof FETCH_FEATURED_DATA_LIST_STARTED,
    payload?: FeatureData
  }

  export interface fetchFeaturedDataSuccessAction {
    type: typeof FETCH_FEATURED_DATA_LIST_SUCCEEDED,
    payload?: FeatureData
  }

  export interface fetchFeaturedDataFailAction {
    type: typeof FETCH_FEATURED_DATA_LIST_FAILED,
    payload?: FeatureData
  }  
  
  export type CarouselActionTypes =
  fetchCarouselDataStartedAction
  | fetchCarouselDataSuccessAction
  | fetchCarouselDataFailAction
  | fetchFeaturedDataStartedAction
  | fetchFeaturedDataSuccessAction
  | fetchFeaturedDataFailAction  

export type AppActions = CarouselActionTypes;