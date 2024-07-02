import { combineReducers } from "redux"

import Login from "./login"
import Students from "./students"
import Teachers from "./teachers"
import Assignments from "./assignments"

const rootReducer = combineReducers({
  Login,
  Students,
  Teachers,
  Assignments,
})

export default rootReducer
