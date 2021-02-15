import { CustomDataResponseDTO } from "./response";

export interface FeatureData {     
    featureDataList?: Array<CustomDataResponseDTO>,
    filteredList?: Array<CustomDataResponseDTO>,
    isListLoading?: boolean,
    isListError?: boolean,
    listErrorMessage?: string,   
    searchValue?: string
  }


