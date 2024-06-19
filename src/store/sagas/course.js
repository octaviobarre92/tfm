import { takeEvery, takeLatest, take, call, fork, put } from "redux-saga/effects";
import { types } from "../reducers/course"
import { actualizarEstudiante, actualizarCurso, cargarCursos, guardarCurso, cargarAsignatura, guardarAsignatura, actualizarAsignatura, eliminar } from "./middlewares"

function* course() {
    yield takeLatest(types.COURSE_REQUEST, loadCourseAll);
    yield takeLatest(types.SAVE_COURSE_REQUEST, saveCourse);
    yield takeLatest(types.UPDATE_COURSE_REQUEST, updateCourse);

    yield takeLatest(types.ASIGNATURA_REQUEST, loadAsignaturaAll);
    yield takeLatest(types.SAVE_ASIGNATURA_REQUEST, saveAsignatura);
    yield takeLatest(types.UPDATE_ASIGNATURA_REQUEST, updateAsignatura);
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
    const response = yield call(guardarCurso, dataCourse)
    yield put({
        type: types.SAVE_COURSE_SUCCESS,
    })
    yield put({
        type: types.COURSE_REQUEST,
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


function* loadAsignaturaAll() {
    const response = yield call(cargarAsignatura)
    yield put({
        type: types.ASIGNATURA_SUCCESS,
        dataAsignatura: response.data.data
    })
}
function* saveAsignatura({ dataAsignatura }) {
    const response = yield call(guardarAsignatura, dataAsignatura)
    yield put({
        type: types.SAVE_ASIGNATURA_SUCCESS,
    })
    yield put({
        type: types.ASIGNATURA_REQUEST,
    })
}
function* updateAsignatura({ dataAsignatura }) {
    const response = yield call(actualizarAsignatura, dataAsignatura)
    yield put({
        type: types.UPDATE_ASIGNATURA_SUCCESS,
    })
    yield put({
        type: types.ASIGNATURA_REQUEST,
    })
}





