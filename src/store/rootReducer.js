import { combineReducers } from 'redux'
import theme from './slices/themeSlice'
import auth from './slices/authSlice'
import Login from "./reducers/login"
const rootReducer = (asyncReducers) => (state, action) => {
    const combinedReducer = combineReducers({
        theme,
        auth,
        Login,
        ...asyncReducers,
    })
    return combinedReducer(state, action)
}
  
export default rootReducer
