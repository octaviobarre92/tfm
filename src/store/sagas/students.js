import { takeEvery, takeLatest, take, call, fork, put } from "redux-saga/effects";
import { types } from "../reducers/students"
import { actualizarEstudiante, loadStudentsAll, registrarEstudiante } from "./middlewares"

function* students() {
    yield takeLatest(types.STUDENTS_REQUEST, loadStudents);
    yield takeLatest(types.SAVE_STUDENTS_REQUEST, saveStudents);
    yield takeLatest(types.UPDATE_STUDENTS_REQUEST, updateStudent);
}

export default students

function* loadStudents() {
    const response = yield call(loadStudentsAll)
    yield put({
        type: types.STUDENTS_SUCCESS,
        dataStudents: response.data.data
    })
}
function* saveStudents({ dataStudent }) {
    const response = yield call(registrarEstudiante, dataStudent)
    yield put({
        type: types.SAVE_STUDENTS_SUCCESS,
    })
}
function* updateStudent({ dataStudent }) {
    const response = yield call(actualizarEstudiante, dataStudent)
    yield put({
        type: types.UPDATE_STUDENTS_SUCCESS,
    })
    yield put({
        type: types.STUDENTS_REQUEST,
    })
}





