import { combineReducers } from 'redux'
import theme from './slices/themeSlice'
import auth from './slices/authSlice'
import Login from "./reducers/login"
import Students from "./reducers/students"
import Teachers from "./reducers/teachers"
import Course from "./reducers/course"
import Assignments from "./reducers/assignments"
const rootReducer = (asyncReducers) => (state, action) => {
    const combinedReducer = combineReducers({
        theme,
        auth,
        Login,
        Students,
        Teachers,
        Course,
        Assignments,
        ...asyncReducers,
    })
    return combinedReducer(state, action)
}
  
export default rootReducer
