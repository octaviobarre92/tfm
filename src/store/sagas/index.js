import { all, fork } from "redux-saga/effects"

//public
import login from "./login"
import students from "./students"
export default function* rootSaga() {
    yield all([
        fork(login),
        fork(students),
    ])
}
