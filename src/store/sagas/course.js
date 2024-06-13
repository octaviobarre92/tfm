import { takeEvery, takeLatest, take, call, fork, put } from "redux-saga/effects";
import { types } from "../reducers/course"
import { actualizarEstudiante, actualizarCurso, cargarCursos, guardarCurso } from "./middlewares"

function* course() {
    yield takeLatest(types.COURSE_REQUEST, loadCourseAll);
    yield takeLatest(types.SAVE_COURSE_REQUEST, saveCourse);
    yield takeLatest(types.UPDATE_COURSE_REQUEST, updateCourse);
}

export default course

function* loadCourseAll() {
    const response = yield call(cargarCursos)
    yield put({
        type: types.COURSE_SUCCESS,
        dataCourse: response.data.data
    })
}
function* saveCourse({ dataCourse }) {
    console.log(dataCourse);
    const response = yield call(guardarCurso, dataCourse)
    yield put({
        type: types.SAVE_COURSE_SUCCESS,
    })
}
function* updateCourse({ dataCourse }) {
    const response = yield call(actualizarCurso, dataCourse)
    yield put({
        type: types.UPDATE_COURSE_SUCCESS,
    })
    yield put({
        type: types.COURSE_REQUEST,
    })
}





