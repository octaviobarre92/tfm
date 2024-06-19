import { takeEvery, takeLatest, take, call, fork, put } from "redux-saga/effects";
import { types } from "../reducers/login"
import { eliminar, loginStep1, validateSecurityData, validateSecurityDataSuccess } from "./middlewares"

function* login() {
    yield takeLatest(types.LOGIN_REQUEST, loginAuth);
    yield takeLatest(types.VALIDATE_IMAGE_REQUEST, validateImage);
    yield takeLatest(types.VALIDATE_IMAGE_SUCCESS_REQUEST, validateImageSuccess);
    yield takeLatest(types.DELETE_DATA_REQUEST, eliminarDato);
}

export default login

function* loginAuth({ user, password }) {
    const response = yield call(loginStep1, user, password)
    if (response.data.token) {

        const dataUser = JSON.parse(atob(response.data.token))
        yield put({
            type: types.LOGIN_SUCCESS,
            dataUser,
            secondToken: response.data.token,
            reintentos: dataUser["INTENTOS_IMAGEN"]
        })

    } else {
        yield put({
            type: types.LOGIN_SUCCESS,
            dataUser: {
                primerNombre: "Octavio2222222222",
                segundoNombre: "Andres",
                apellidoPaterno: "Barreto",
                apellidoMaterno: "Zambrano",
                fechaNacimiento: "1990-01-25",
            }
        })
    }

}
function* validateImage({ token, reintentos }) {
    const response = yield call(validateSecurityData, token, reintentos)
    yield put({
        type: types.VALIDATE_IMAGE_SUCCESS,
        reintentos: response.data.data[0]["INTENTOS_IMAGEN"]
    })
    return false
}

function* validateImageSuccess({ token, reintentos }) {
    const response = yield call(validateSecurityDataSuccess, token, reintentos)
    yield put({
        type: types.VALIDATE_IMAGE_SUCCESS,
        reintentos: response.data.data[0]["INTENTOS_IMAGEN"]
    })
    return false
}
function* eliminarDato({ tabla, campo, id }) {
    const response = yield call(eliminar, tabla, campo, id)
    if (response && response.data.status === 200) {
        yield put({
            type: types.DELETE_DATA_SUCCESS,
        })
    } else {
        yield put({
            type: types.DELETE_DATA_FAILURE,
        })
    }
}





