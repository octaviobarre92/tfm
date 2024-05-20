import { takeEvery, takeLatest, take, call, fork, put } from "redux-saga/effects";
import { types } from "../reducers/login"
import {loginStep1} from "./middlewares"

function* login() {
    yield takeLatest(types.LOGIN_REQUEST, loginAuth);
}

export default login

function* loginAuth({ user, password,navigate }) {
    const response = yield call(loginStep1,user, password)
    console.log(response);
    yield put({
        type: types.LOGIN_SUCCESS,
        dataUser: {
            primerNombre: "Octavio",
            segundoNombre: "Andres",
            apellidoPaterno: "Barreto",
            apellidoMaterno: "Zambrano",
            fechaNacimiento: "1990-01-25",
        }
    })
    yield put(navigate("/dashboard"))
}






