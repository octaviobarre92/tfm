import { combineReducers } from "redux"

import Login from "./login"
import Students from "./students"

const rootReducer = combineReducers({
  Login,
  Students
})

export default rootReducer
