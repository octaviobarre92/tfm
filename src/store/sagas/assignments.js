import {call, put, takeLatest, select} from "redux-saga/effects";
import {types} from "../reducers/assignments"
import {
    deleteAssignmentCourse,
    deleteAssignmentSubject,
    getAllCoursesWithAssignments,
    getAllSubjects,
    getSelectedSubjects,
    saveAssignmentCourse,
    saveAssignmentSubject
} from "./middlewares"
import {selectors as selectorAssignment} from "store/reducers/assignments"


function* assignments() {
    yield takeLatest(types.COURSES_WITH_ASSIGNMENT_REQUEST, loadAllCoursesWithAssignments);
    yield takeLatest(types.SELECTED_SUBJECTS_REQUEST, loadSelectedSubjects);
    yield takeLatest(types.ALL_SUBJECTS_REQUEST, loadAllSubjects);
    yield takeLatest(types.SAVE_ASSIGNMENT_SUBJECTS_REQUEST, $saveAssignmentSubject);
    yield takeLatest(types.SAVE_ASSIGNMENT_COURSE_REQUEST, $saveAssignmentCourse);
    yield takeLatest(types.DELETE_ASSIGNMENT_SUBJECTS_REQUEST, $deleteAssignmentSubject);
    yield takeLatest(types.DELETE_ASSIGNMENT_COURSE_REQUEST, $deleteAssignmentCourse);
}

export default assignments

function* loadAllCoursesWithAssignments({userId}) {
    const response = yield call(getAllCoursesWithAssignments, userId)
    yield put({
        type: types.COURSES_WITH_ASSIGNMENT_SUCCESS,
        dataCoursesWithAssignments: response.data.data
    })
}

function* loadSelectedSubjects({userId, courseId}) {
    const response = yield call(getSelectedSubjects, userId, courseId)
    yield put({
        type: types.SELECTED_SUBJECTS_SUCCESS,
        dataSelectedSubjects: response.data.data
    })
}

function* loadAllSubjects() {
    const response = yield call(getAllSubjects)
    yield put({
        type: types.ALL_SUBJECTS_SUCCESS,
        dataAllSubjects: response.data.data
    })
}

function* $saveAssignmentSubject({subjectId, idAssignment}) {
    const teacherSelectedAssignment = yield select(selectorAssignment.teacherSelectedAssignment);
    const courseSelectedAssignment = yield select(selectorAssignment.courseSelectedAssignment);

    const response = yield call(saveAssignmentSubject, subjectId, idAssignment)
    yield put({
        type: types.SAVE_ASSIGNMENT_SUBJECTS_SUCCESS,
    })

    yield put({
        type: types.SELECTED_SUBJECTS_REQUEST,
        userId: teacherSelectedAssignment.id,
        courseId: courseSelectedAssignment.id
    })
}

function* $saveAssignmentCourse({userId, courseId}) {
    const response = yield call(saveAssignmentCourse, userId, courseId)
    yield put({
        type: types.SAVE_ASSIGNMENT_COURSE_SUCCESS,
    })

    yield put({
        type: types.COURSES_WITH_ASSIGNMENT_REQUEST,
        userId
    })
}

function* $deleteAssignmentSubject({subjectId, courseId}) {
    const teacherSelectedAssignment = yield select(selectorAssignment.teacherSelectedAssignment);
    const courseSelectedAssignment = yield select(selectorAssignment.courseSelectedAssignment);

    const response = yield call(deleteAssignmentSubject, subjectId, courseId)
    yield put({
        type: types.DELETE_ASSIGNMENT_SUBJECTS_SUCCESS,
    })

    yield put({
        type: types.SELECTED_SUBJECTS_REQUEST,
        userId: teacherSelectedAssignment.id,
        courseId: courseSelectedAssignment.id
    })
}

function* $deleteAssignmentCourse({idAssignment}) {
    const teacherSelectedAssignment = yield select(selectorAssignment.teacherSelectedAssignment);

    const response = yield call(deleteAssignmentCourse, idAssignment)
    yield put({
        type: types.DELETE_ASSIGNMENT_COURSE_SUCCESS,
    })

    yield put({
        type: types.COURSES_WITH_ASSIGNMENT_REQUEST,
        userId: teacherSelectedAssignment.id
    })
}