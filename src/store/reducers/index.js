import { combineReducers } from "redux"

import Login from "./login"
import Students from "./students"
import Teachers from "./teachers"

const rootReducer = combineReducers({
  Login,
  Students,
  Teachers
})

export default rootReducer
