import React, {useEffect, useRef, useState} from 'react'
import {useSelector, useDispatch} from "react-redux";
import CardView from '../../shared/cardview';
import { fetchCarouselDataList} from '../../actions/carousel.actions';
import { fetchFeaturedDataList} from '../../actions/feature.actions';
import { AppState } from '../../reducers/rootReducer';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import {debounce} from "./debounce";
import "../../styles/global.scss";

const DataList: React.FC = () => {
  const searchInputRef: React.Ref<any> = useRef("");
  const carouselData = useSelector<AppState, AppState["carouselData"]>(state => state.carouselData);
  const featureData = useSelector<AppState, AppState["featureData"]>(state => state.featureData);
  const dispatch = useDispatch();
  const getSearchData = ()=>
  {   
    debugger;
    let searchValue:string = searchInputRef?.current.value; 
    dispatch(fetchCarouselDataList(searchInputRef?.current.value));   
    dispatch(fetchFeaturedDataList(searchValue)); 
  }
  const debounceOnChange = React.useCallback(debounce(getSearchData, 400), []);
  useEffect(() => {
    dispatch(fetchCarouselDataList(searchInputRef?.current.value));   
    dispatch(fetchFeaturedDataList(searchInputRef?.current.value)); 
  }, []);

 const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };


  if (carouselData.isListLoading ) {
      return( <h3 className="loading-indicator"></h3>);
  }    
  else{    
    return (
      <div className="container-new"> 
        <div className="search-container">
          <div className="form-group search-s">
            <input type="search"
              placeholder="Search for... "
              ref={searchInputRef} className="form-control" onChange={e => debounceOnChange(e.target.value)}/>              
          </div>  
        </div>    
        <div className="content-new" >                
          <div className="panel-div">
            <p className="style-p"><strong>Popular around </strong> you </p>
            <Carousel responsive={responsive}  infinite={true} autoPlaySpeed={1500} autoPlay={true}>        
              {carouselData.filteredList && carouselData?.filteredList.length > 0 && carouselData.filteredList.map((card,indx) => (   
             <div className="card-img">                          
                <CardView card={card}/>            
              </div>
              ))}
            </Carousel>
          </div>  
          <div className="panel-div">
           <p className="style-p"><strong> Featured</strong></p>
            <div className="row">
              <div className="card-deck">
                {featureData.filteredList && featureData.filteredList.map((card:any,indx:any) => (   
                  <div className="card">               
                    <CardView card={card}/>
                  </div>
                ))}              
              </div>        
            </div>
          </div>
        </div> 
      </div>     
    );
  }
}
export default DataList;
