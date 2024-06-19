export const types = {
    COURSE_REQUEST: "COURSE/COURSE_REQUEST",
    COURSE_SUCCESS: "COURSE/COURSE_SUCCESS",
    COURSE_FAILURE: "COURSE/COURSE_FAILURE",


    SAVE_COURSE_REQUEST: "COURSE/SAVE_COURSE_REQUEST",
    SAVE_COURSE_SUCCESS: "COURSE/SAVE_COURSE_SUCCESS",
    SAVE_COURSE_FAILURE: "COURSE/SAVE_COURSE_FAILURE",

    UPDATE_COURSE_REQUEST: "COURSE/UPDATE_COURSE_REQUEST",
    UPDATE_COURSE_SUCCESS: "COURSE/UPDATE_COURSE_SUCCESS",
    UPDATE_COURSE_FAILURE: "COURSE/UPDATE_COURSE_FAILURE",


    ASIGNATURA_REQUEST: "ASIGNATURA/ASIGNATURA_REQUEST",
    ASIGNATURA_SUCCESS: "ASIGNATURA/ASIGNATURA_SUCCESS",
    ASIGNATURA_FAILURE: "ASIGNATURA/ASIGNATURA_FAILURE",


    SAVE_ASIGNATURA_REQUEST: "ASIGNATURA/SAVE_ASIGNATURA_REQUEST",
    SAVE_ASIGNATURA_SUCCESS: "ASIGNATURA/SAVE_ASIGNATURA_SUCCESS",
    SAVE_ASIGNATURA_FAILURE: "ASIGNATURA/SAVE_ASIGNATURA_FAILURE",

    UPDATE_ASIGNATURA_REQUEST: "ASIGNATURA/UPDATE_ASIGNATURA_REQUEST",
    UPDATE_ASIGNATURA_SUCCESS: "ASIGNATURA/UPDATE_ASIGNATURA_SUCCESS",
    UPDATE_ASIGNATURA_FAILURE: "ASIGNATURA/UPDATE_ASIGNATURA_FAILURE",

    RESTABLECER_STORE: "COURSE/RESTABLECER_STORE",


}


export const INITIAL_STATE = {
    fetching: false,
    dataCourse: [],
    dataAsignatura: []
}

export default (state = INITIAL_STATE, action = {}) => {
    const {
        fetching,
        dataCourse,
        dataAsignatura,
        ...rest
    } = action;
    switch (action.type) {
        case types.RESTABLECER_STORE:
            return {
                INITIAL_STATE,
                tipo: "RESTABLECER_STORE"
            };
        case types.COURSE_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case types.COURSE_SUCCESS:
            return {
                ...state,
                fetching: false,
                dataCourse
            };
        case types.SAVE_COURSE_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case types.SAVE_COURSE_SUCCESS:
            return {
                ...state,
                fetching: false,
            };
        case types.UPDATE_COURSE_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case types.UPDATE_COURSE_SUCCESS:
            return {
                ...state,
                fetching: false,
            };
        case types.ASIGNATURA_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case types.ASIGNATURA_SUCCESS:
            return {
                ...state,
                fetching: false,
                dataAsignatura
            };
        case types.SAVE_ASIGNATURA_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case types.SAVE_ASIGNATURA_SUCCESS:
            return {
                ...state,
                fetching: false,
            };
        case types.UPDATE_ASIGNATURA_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case types.UPDATE_ASIGNATURA_SUCCESS:
            return {
                ...state,
                fetching: false,
            };
        default:
            return state;
    }
}
export const actions = {
    loadCourseAll: () => ({
        type: types.COURSE_REQUEST
    }),
    saveCourse: (dataCourse) => ({
        type: types.SAVE_COURSE_REQUEST,
        dataCourse
    }),
    updateCourse: (dataCourse) => ({
        type: types.UPDATE_COURSE_REQUEST,
        dataCourse
    }),
    loadAsignaturaAll: () => ({
        type: types.ASIGNATURA_REQUEST
    }),
    saveAsignatura: (dataAsignatura) => ({
        type: types.SAVE_ASIGNATURA_REQUEST,
        dataAsignatura
    }),
    updateAsignatura: (dataAsignatura) => ({
        type: types.UPDATE_ASIGNATURA_REQUEST,
        dataAsignatura
    }),
    resetCourse: () => ({
        type: types.RESTABLECER_STORE,

    })
}

export const selectors = {
    getDataAsignatura: ({ Course }) => Course.dataAsignatura,
    getdataCourse: ({ Course }) => Course.dataCourse,
    getFetching: ({ Course }) => Course.fetching,
}
