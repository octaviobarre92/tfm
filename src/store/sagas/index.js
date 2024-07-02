import { all, fork } from "redux-saga/effects"

//public
import login from "./login"
import students from "./students"
import teachers from "./teachers";
import course from "./course"
import assignments from "./assignments"
export default function* rootSaga() {
    yield all([
        fork(login),
        fork(students),
        fork(teachers),
        fork(course),
        fork(assignments),
    ])
}
