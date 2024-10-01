import { takeEvery, takeLatest, take, call, fork, put } from "redux-saga/effects";
import { types } from "../reducers/course"
import { GetAsignaturaWithCurso, GetCourseWithTeacher, GetStudentsWithAsignatura, actualizarEstudiante, actualizarCurso, cargarCursos, guardarCurso, cargarAsignatura, guardarAsignatura, actualizarAsignatura, eliminar, SendAsistencia, getAsistenciasPorEstudiantes } from "./middlewares"

function* course() {
    yield takeLatest(types.COURSE_REQUEST, loadCourseAll);
    yield takeLatest(types.SAVE_COURSE_REQUEST, saveCourse);
    yield takeLatest(types.UPDATE_COURSE_REQUEST, updateCourse);

    yield takeLatest(types.ASIGNATURA_REQUEST, loadAsignaturaAll);
    yield takeLatest(types.SAVE_ASIGNATURA_REQUEST, saveAsignatura);
    yield takeLatest(types.UPDATE_ASIGNATURA_REQUEST, updateAsignatura);

    yield takeLatest(types.ASIGNATURA_WITH_TEACHER_REQUEST, getAsignaturaPorCurso);
    yield takeLatest(types.CURSOS_TEACHER_REQUEST, getCursoTeacher);
    yield takeLatest(types.ESTUDIANTES_WITH_ASIGNATURAS_REQUEST, getEstudiantesAsignatura);
    yield takeLatest(types.ASISTENCIA_ESTUDIANTE_REQUEST, getAsistenciasPorEstudiante);

    yield takeLatest(types.ASISTENCIA_SEND_REQUEST, guardarAsistencia);
}

export default course
function* guardarAsistencia({ dataAsistencia }) {
    const response = yield call(SendAsistencia, dataAsistencia)
    yield put({
        type: types.ASISTENCIA_SEND_SUCCESS,
        asignaturas: response.data.data
    })
}
function* getAsignaturaPorCurso({ idCurso, teacherId = null }) {
    let dataUser = JSON.parse(atob(localStorage.getItem("auth_token")))
    const response = yield call(GetAsignaturaWithCurso, { idCurso: idCurso, ID_USER: teacherId ? teacherId : dataUser["ID_USER"] })
    yield put({
        type: types.ASIGNATURA_WITH_TEACHER_SUCCESS,
        asignaturas: response.data.data
    })
}
function* getCursoTeacher({ idTeacher = null }) {
    let dataUser = JSON.parse(atob(localStorage.getItem("auth_token")))
    const response = yield call(GetCourseWithTeacher, { ID_USER: idTeacher ? idTeacher : dataUser["ID_USER"] })
    yield put({
        type: types.CURSOS_TEACHER_SUCCESS,
        cursos: response.data.data
    })
}
function* getAsistenciasPorEstudiante({ data }) {

    const response = yield call(getAsistenciasPorEstudiantes, { idEstudiante: data.idEstudiante })
    yield put({
        type: types.ASISTENCIA_ESTUDIANTE_SUCCESS,
        asistencias: response.data.data
    })
}
function* getEstudiantesAsignatura({ idAsignatura, teacherId = null }) {
    let dataUser = JSON.parse(atob(localStorage.getItem("auth_token")))
    const response = yield call(GetStudentsWithAsignatura, { idAsignatura: idAsignatura, ID_USER: teacherId ? teacherId : dataUser["ID_USER"] })
    yield put({
        type: types.ESTUDIANTES_WITH_ASIGNATURAS_SUCCESS,
        estudiantes: response.data.data
    })
}

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







