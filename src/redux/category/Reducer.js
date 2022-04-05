import {
  CATEGORY_LOADING,
  CATEGORY_UPDATE,
  CATEGORY_FAIL,

} from './Types'
const initialState = {
  isLoading: false, 
  failData: null, 
  main:[],
  sub:[],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      }
    case CATEGORY_UPDATE:
      console.log(action)
      return {
        ...state,
        ...action.payload,
      }
    case CATEGORY_FAIL:
      return {
        ...state,
        failData: action.payload,
      }

    default: return state
  }
}

export default reducer
