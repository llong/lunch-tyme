import types from './types';


const initialState = {
  activeRestaurant: null
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case types.SET_ACTIVE_RESTAURANT:
      return Object.assign({}, state, { activeRestaurant: action.payload })
    default: return state
  }
}

export default reducer;