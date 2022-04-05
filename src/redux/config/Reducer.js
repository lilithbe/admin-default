import {
  CONFIG_LOADING,
  CONFIG_UPDATE,
  CONFIG_FAIL,
} from './Types'
const initialState = {
  isLoading: false, 
  failData: null, 
  layoutMode:'static',
  layoutColorMode:process.env.REACT_APP_DEFAULT_COLOR_MODE,
  inputStyle:'outlined',
  theme:process.env.REACT_APP_DEFAULT_TEHME,
  ripple:true,
  staticMenuInactive:false,
  overlayMenuActive:false,
  mobileMenuActive:false,
  mobileTopbarMenuActive:false,


}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CONFIG_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      }
    case CONFIG_UPDATE:
      return {
        ...state,
        ...action.payload,
      }
    case CONFIG_FAIL:
      return {
        ...state,
        failData: action.payload,
      }

    default: return state
  }
}

export default reducer
