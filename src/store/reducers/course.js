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

    RESTABLECER_STORE: "COURSE/RESTABLECER_STORE",


}


export const INITIAL_STATE = {
    fetching: false,
    dataCourse: []
}

export default (state = INITIAL_STATE, action = {}) => {
    const {
        fetching,
        dataCourse,
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
    resetCourse: () => ({
        type: types.RESTABLECER_STORE,

    })
}

export const selectors = {
    getdataCourse: ({ Course }) => Course.dataCourse,
    getFetching: ({ Course }) => Course.fetching,
}
