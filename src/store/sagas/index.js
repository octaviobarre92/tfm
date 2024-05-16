import { all, fork } from "redux-saga/effects"

//public
import login from "./login"
export default function* rootSaga() {
    yield all([
        fork(login),
    ])
}
