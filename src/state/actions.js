import types from './types';

// eslint-disable-next-line
export function setActiveRestaurant(restaurant) {
  return {
    type: types.SET_ACTIVE_RESTAURANT,
    payload: restaurant,
  };
}

export function fetchRestaurants() {
  const request = fetch('http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json');


  return (dispatch) => {
    request.then(res => res.json())
      .then((data) => {
        dispatch({ type: types.FETCH_RESTAURANTS, payload: data.restaurants });
      });
  };
}
