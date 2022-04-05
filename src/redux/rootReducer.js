import { combineReducers } from 'redux'
import authReducer from './auth/Reducer'
import categoryReducer from './category/Reducer'
import configReducer from './config/Reducer'
const rootReducer = combineReducers({
  auth:authReducer,
  category:categoryReducer,
  config:configReducer,
})

export default rootReducer