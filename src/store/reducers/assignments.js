export const types = {
    COURSES_WITH_ASSIGNMENT_REQUEST: "assignments/COURSES_WITH_ASSIGNMENT_REQUEST",
    COURSES_WITH_ASSIGNMENT_SUCCESS: "assignments/COURSES_WITH_ASSIGNMENT_SUCCESS",
    COURSES_WITH_ASSIGNMENT_FAILURE: "assignments/COURSES_WITH_ASSIGNMENT_FAILURE",

    SELECTED_SUBJECTS_REQUEST: "assignments/SELECTED_SUBJECTS_REQUEST",
    SELECTED_SUBJECTS_SUCCESS: "assignments/SELECTED_SUBJECTS_SUCCESS",
    SELECTED_SUBJECTS_FAILURE: "assignments/SELECTED_SUBJECTS_FAILURE",

    ALL_SUBJECTS_REQUEST: "assignments/ALL_SUBJECTS_REQUEST",
    ALL_SUBJECTS_SUCCESS: "assignments/ALL_SUBJECTS_SUCCESS",
    ALL_SUBJECTS_FAILURE: "assignments/ALL_SUBJECTS_FAILURE",

    ASSIGNMENT_REQUEST: "assignments/ASSIGNMENT_REQUEST",
    ASSIGNMENT_SUCCESS: "assignments/ASSIGNMENT_SUCCESS",
    ASSIGNMENT_FAILURE: "assignments/ASSIGNMENT_FAILURE",

    SAVE_ASSIGNMENT_SUBJECTS_REQUEST: "assignments/SAVE_ASSIGNMENT_SUBJECTS_REQUEST",
    SAVE_ASSIGNMENT_SUBJECTS_SUCCESS: "assignments/SAVE_ASSIGNMENT_SUBJECTS_SUCCESS",
    SAVE_ASSIGNMENT_SUBJECTS_FAILURE: "assignments/SAVE_ASSIGNMENT_SUBJECTS_FAILURE",

    DELETE_ASSIGNMENT_SUBJECTS_REQUEST: "assignments/DELETE_ASSIGNMENT_SUBJECTS_REQUEST",
    DELETE_ASSIGNMENT_SUBJECTS_SUCCESS: "assignments/DELETE_ASSIGNMENT_SUBJECTS_SUCCESS",
    DELETE_ASSIGNMENT_SUBJECTS_FAILURE: "assignments/DELETE_ASSIGNMENT_SUBJECTS_FAILURE",

    SAVE_ASSIGNMENT_COURSE_REQUEST: "assignments/SAVE_ASSIGNMENT_COURSE_REQUEST",
    SAVE_ASSIGNMENT_COURSE_SUCCESS: "assignments/SAVE_ASSIGNMENT_COURSE_SUCCESS",
    SAVE_ASSIGNMENT_COURSE_FAILURE: "assignments/SAVE_ASSIGNMENT_COURSE_FAILURE",

    DELETE_ASSIGNMENT_COURSE_REQUEST: "assignments/DELETE_ASSIGNMENT_COURSE_REQUEST",
    DELETE_ASSIGNMENT_COURSE_SUCCESS: "assignments/DELETE_ASSIGNMENT_COURSE_SUCCESS",
    DELETE_ASSIGNMENT_COURSE_FAILURE: "assignments/DELETE_ASSIGNMENT_COURSE_FAILURE",

    RESTABLECER_STORE: "assignments/RESTABLECER_STORE",
}


export const INITIAL_STATE = {
    fetching: false,
    fetchingSubjects: false,
    fetchingAssignment: false,
    dataAssignments: [],
    dataCoursesWithAssignments: [],
    dataSelectedSubjects: [],
    dataAllSubjects: []
}

export default (state = INITIAL_STATE, action = {}) => {
    const {
        fetching,
        fetchingSubjects,
        fetchingAssignment,
        dataCoursesWithAssignments,
        dataSelectedSubjects,
        dataAllSubjects,
        ...rest
    } = action;
    switch (action.type) {
        case types.RESTABLECER_STORE:
            return {
                INITIAL_STATE,
                tipo: "RESTABLECER_STORE"
            };
        case types.ASSIGNMENT_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case types.COURSES_WITH_ASSIGNMENT_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case types.SELECTED_SUBJECTS_REQUEST:
            return {
                ...state,
                fetchingSubjects: true,
            };
        case types.ALL_SUBJECTS_REQUEST:
            return {
                ...state,
                fetchingSubjects: true,
            };
        case types.ASSIGNMENT_SUCCESS:
            return {
                ...state,
                fetching: false,
            };
        case types.COURSES_WITH_ASSIGNMENT_SUCCESS:
            return {
                ...state,
                fetching: false,
                dataCoursesWithAssignments
            };

        case types.SELECTED_SUBJECTS_SUCCESS:
            return {
                ...state,
                fetchingSubjects: false,
                dataSelectedSubjects: dataSelectedSubjects.map((item) => ({label: item.nombre, value: item.nombre})),
            };

        case types.ALL_SUBJECTS_SUCCESS:
            return {
                ...state,
                fetchingSubjects: false,
                dataAllSubjects: dataAllSubjects.map((item) => ({label: item.nombre, value: item.nombre, id: item.id})),
            };

        case types.SAVE_ASSIGNMENT_SUBJECTS_REQUEST:
        case types.SAVE_ASSIGNMENT_SUBJECTS_SUCCESS:
        case types.SAVE_ASSIGNMENT_COURSE_REQUEST:
        case types.SAVE_ASSIGNMENT_COURSE_SUCCESS:
        case types.DELETE_ASSIGNMENT_SUBJECTS_REQUEST:
        case types.DELETE_ASSIGNMENT_SUBJECTS_SUCCESS:
        case types.DELETE_ASSIGNMENT_COURSE_REQUEST:
        case types.DELETE_ASSIGNMENT_COURSE_SUCCESS:
            return {
                ...state,
                fetchingAssignment: false,
            };

        default:
            return state;
    }
}
export const actions = {
    loadAllCoursesWithAssignments: (userId) => ({
        type: types.COURSES_WITH_ASSIGNMENT_REQUEST,
        userId
    }),
    loadSelectedSubjects: (userId, courseId) => ({
        type: types.SELECTED_SUBJECTS_REQUEST,
        userId,
        courseId
    }),
    loadAllSubjects: () => ({
        type: types.ALL_SUBJECTS_REQUEST
    }),
    saveAssignmentSubject: (subjectId, idAssignment) => ({
        type: types.SAVE_ASSIGNMENT_SUBJECTS_REQUEST,
        subjectId, idAssignment
    }),
    saveAssignmentCourse: (userId, courseId) => ({
        type: types.SAVE_ASSIGNMENT_COURSE_REQUEST,
        userId,
        courseId
    }),
    deleteAssignmentSubject: (subjectId, courseId) => ({
        type: types.DELETE_ASSIGNMENT_SUBJECTS_REQUEST,
        subjectId,
        courseId

    }),
    deleteAssignmentCourse: (idAssignment) => ({
        type: types.DELETE_ASSIGNMENT_COURSE_REQUEST,
        idAssignment
    })
}

export const selectors = {
    loadAllCoursesWithAssignments: ({Assignments}) => Assignments.dataCoursesWithAssignments,
    loadSelectedSubjects: ({Assignments}) => Assignments.dataSelectedSubjects,
    loadAllSubjects: ({Assignments}) => Assignments.dataAllSubjects,
    getFetching: ({Assignments}) => Assignments.fetching,
    getFetchingSubjects: ({Assignments}) => Assignments.fetchingSubjects,
    getFetchingAssignment: ({Assignments}) => Assignments.fetchingAssignment,
}
