import {call, put, takeLatest} from "redux-saga/effects";
import {types} from "../reducers/teachers"
import {deleteTeachers, loadTeachersAll, registerTeachers, updateTeachers} from "./middlewares"

function* teachers() {
    yield takeLatest(types.TEACHERS_REQUEST, loadTeachers);
    yield takeLatest(types.SAVE_TEACHERS_REQUEST, saveTeachers);
    yield takeLatest(types.UPDATE_TEACHERS_REQUEST, updateTeacher);
    yield takeLatest(types.DELETE_TEACHERS_REQUEST, deleteTeacher);
}

export default teachers

function* loadTeachers() {
    const response = yield call(loadTeachersAll)
    yield put({
        type: types.TEACHERS_SUCCESS,
        dataTeachers: response.data.data
    })
}

function* saveTeachers({dataTeacher}) {
    const response = yield call(registerTeachers, dataTeacher)
    yield put({
        type: types.SAVE_TEACHERS_SUCCESS,
    })
}

function* updateTeacher({dataTeacher}) {
    const response = yield call(updateTeachers, dataTeacher)
    yield put({
        type: types.UPDATE_TEACHERS_SUCCESS,
    })
    yield put({
        type: types.TEACHERS_REQUEST,
    })
}

function* deleteTeacher({dataTeacher}) {
    const response = yield call(deleteTeachers, dataTeacher)
    yield put({
        type: types.DELETE_TEACHERS_SUCCESS,
    })
    yield put({
        type: types.TEACHERS_REQUEST,
    })
}



