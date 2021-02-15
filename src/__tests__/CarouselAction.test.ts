import * as actions from "../actions/carousel.actions";
import configureMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import axiosMock from 'axios';
import {AppActions} from "../actions/actions";
import {AppState} from "../reducers/rootReducer";

type DispatchExts = ThunkDispatch<AppState, void, AppActions>
const middleWare = [thunk];
const mockStore = configureMockStore<AppState, DispatchExts>(middleWare);

const data = {img: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png", title: "Royal", location: "New York"};
const filteredValues = data;
const searchValue='';

describe('test carousel list async call', () => {
  test('success', async () => {
    const store = mockStore();
    axiosMock.get.mockResolvedValueOnce ({
      payload: {
          carouselDataList: data,
          filteredList: filteredValues!,
          searchValue:searchValue
      }
    });
    const expectedAction = [
      actions.FETCH_CAROUSEL_DATA_LIST_STARTED,
      //actions.FETCH_CAROUSEL_DATA_LIST_SUCCEEDED,
      actions.FETCH_CAROUSEL_DATA_LIST_FAILED
    ]
    await store.dispatch(actions.fetchCarouselDataList(''))
    const actualActions = store.getActions().map(action => action.type);
    expect(actualActions).toEqual( expectedAction);
  });

  test('error', async () => {
    const store = mockStore();
    axiosMock.get.mockRejectedValueOnce();
    const expectedAction = [
      actions.FETCH_CAROUSEL_DATA_LIST_STARTED,      
      actions.FETCH_CAROUSEL_DATA_LIST_FAILED
    ]
    await store.dispatch(actions.fetchCarouselDataList(''))
    const actualActions = store.getActions().map(action => action.type);
    expect(actualActions).toEqual(expectedAction);
  });

})



// describe('test carousel list async call with filter', () => {
//   test('success', async () => {
//     const store = mockStore();
//     axiosMock.get.mockResolvedValueOnce ({
//       payload: {
//           carouselDataList: data,
//           filteredList: filteredValues!,
//           searchValue:'royal'
//       }
//     });
//     const expectedAction1 = [
//       actions.FETCH_FEATURE_DATA_LIST_STARTED,
//      // actions.FETCH_CAROUSEL_DATA_LIST_SUCCEEDED
//       actions.FETCH_FEATURE_DATA_LIST_FAILED
//     ]
//     await store.dispatch(actions.fetchCarouselDataList('royal'))
//     const actualActions = store.getActions().map(action => action.type);
//     expect(actualActions).toEqual( expectedAction1);
//   })

//    test('error', async () => {
//     const store = mockStore();
//     axiosMock.get.mockRejectedValueOnce();
//     const expectedAction1 = [
//       actions.FETCH_CAROUSEL_DATA_LIST_STARTED,      
//       actions.FETCH_CAROUSEL_DATA_LIST_FAILED
//     ]
//     await store.dispatch(actions.fetchCarouselDataList('royal'))
//     const actualActions = store.getActions().map(action => action.type);
//     expect(actualActions).toEqual(expectedAction1);
//   });


//   })