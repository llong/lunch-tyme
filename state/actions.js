import types from './types';

// eslint-disable-next-line
export function setActiveRestaurant(restaurant) {
  return {
    type: types.SET_ACTIVE_RESTAURANT,
    payload: restaurant,
  };
}
