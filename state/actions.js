import types from './types';

export function setActiveRestaurant(restaurant) {
  return {
    type: types.SET_ACTIVE_RESTAURANT,
    payload: restaurant
  }
}