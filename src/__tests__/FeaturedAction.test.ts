import * as actions from "../actions/feature.actions";
import configureMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import axiosMock from 'axios';
import {AppActions} from "../actions/actions";
import {AppState} from "../reducers/rootReducer";

type DispatchExts = ThunkDispatch<AppState, void, AppActions>
const middleWare = [thunk];
const mockStore = configureMockStore<AppState, DispatchExts>(middleWare);

const data = [{img: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png", title: "Royal", location: "New York"},
              {img: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png", title: "Royal", location: "New York"}];
const filteredValues = data;
const searchValue='';

describe('test featured list async call', () => {
  test('success', async () => {
    const store = mockStore();
    axiosMock.get.mockResolvedValueOnce ({
      payload: {
          featureDataList: data,
          filteredList: filteredValues!,
          searchValue:searchValue
      }
    });
    const expectedAction = [
      actions.FETCH_FEATURED_DATA_LIST_STARTED,     
      actions.FETCH_FEATURED_DATA_LIST_FAILED
    ]
    await store.dispatch(actions.fetchFeaturedDataList(''))
    const actualActions = store.getActions().map(action => action.type);
    expect(actualActions).toEqual( expectedAction);
  });

  test('error', async () => {
    const store = mockStore();
    axiosMock.get.mockRejectedValueOnce();
    const expectedAction = [
      actions.FETCH_FEATURED_DATA_LIST_STARTED,      
      actions.FETCH_FEATURED_DATA_LIST_FAILED
    ]
    await store.dispatch(actions.fetchFeaturedDataList(''))
    const actualActions = store.getActions().map(action => action.type);
    expect(actualActions).toEqual( expectedAction);
  });

})

describe('test featured list async call with filter', () => {
  test('success', async () => {
    const store = mockStore();
    axiosMock.get.mockResolvedValueOnce ({
      payload: {
          featureDataList: data,
          filteredList: filteredValues!,
          searchValue:'royal'
      }
    });
    const expectedAction2 = [
      actions.FETCH_FEATURED_DATA_LIST_STARTED,    
      actions.FETCH_FEATURED_DATA_LIST_FAILED
    ]
    await store.dispatch(actions.fetchFeaturedDataList('royal'))
    const actualActions = store.getActions().map(action => action.type);
    expect(actualActions).toEqual( expectedAction2);
  })
   test('error', async () => {
    const store = mockStore();
    axiosMock.get.mockRejectedValueOnce();
    const expectedAction2 = [
      actions.FETCH_FEATURED_DATA_LIST_STARTED,      
      actions.FETCH_FEATURED_DATA_LIST_FAILED
    ]
    await store.dispatch(actions.fetchFeaturedDataList(''))
    const actualActions = store.getActions().map(action => action.type);
    expect(actualActions).toEqual( expectedAction2);
  });

})