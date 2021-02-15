import { combineReducers } from "redux";
import { carouselReducer} from "./carouselReducer";
import { featureReducer} from "./featureReducer";

const rootReducer = combineReducers({  
  carouselData: carouselReducer,
  featureData: featureReducer
});

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;

