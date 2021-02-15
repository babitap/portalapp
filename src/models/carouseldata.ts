import { CustomDataResponseDTO } from "./response";
export interface CarouselData { 
    carouselDataList?: Array<CustomDataResponseDTO>,
    filteredList?: Array<CustomDataResponseDTO>, 
    isListLoading?: boolean,
    isListError?: boolean,
    listErrorMessage?: string,
    searchValue?: string
  }

