export const types = {
    TEACHERS_REQUEST: "teachers/TEACHERS_REQUEST",
    TEACHERS_SUCCESS: "teachers/TEACHERS_SUCCESS",
    TEACHERS_FAILURE: "teachers/TEACHERS_FAILURE",

    SAVE_TEACHERS_REQUEST: "teachers/SAVE_TEACHERS_REQUEST",
    SAVE_TEACHERS_SUCCESS: "teachers/SAVE_TEACHERS_SUCCESS",
    SAVE_TEACHERS_FAILURE: "teachers/SAVE_TEACHERS_FAILURE",

    UPDATE_TEACHERS_REQUEST: "teachers/UPDATE_TEACHERS_REQUEST",
    UPDATE_TEACHERS_SUCCESS: "teachers/UPDATE_TEACHERS_SUCCESS",
    UPDATE_TEACHERS_FAILURE: "teachers/UPDATE_TEACHERS_FAILURE",
    RESTABLECER_STORE: "teachers/RESTABLECER_STORE",
}


export const INITIAL_STATE = {
    fetching: false,
    dataTeachers: []
}

export default (state = INITIAL_STATE, action = {}) => {
    const {
        fetching,
        dataTeachers,
        ...rest
    } = action;
    switch (action.type) {
        case types.RESTABLECER_STORE:
            return {
                INITIAL_STATE,
                tipo: "RESTABLECER_STORE"
            };
        case types.TEACHERS_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case types.SAVE_TEACHERS_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case types.UPDATE_TEACHERS_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case types.TEACHERS_SUCCESS:
            return {
                ...state,
                fetching: false,
                dataTeachers
            };
        case types.SAVE_TEACHERS_SUCCESS:
            return {
                ...state,
                fetching: false
            };
        case types.UPDATE_TEACHERS_SUCCESS:
            return {
                ...state,
                fetching: false
            };
        default:
            return state;
    }
}
export const actions = {
    loadTeachersAll: () => ({
        type: types.TEACHERS_REQUEST
    }),
    saveTeachers: (dataTeacher) => ({
        type: types.SAVE_TEACHERS_REQUEST,
        dataTeacher
    }),
    updateTeacher: (dataTeacher) => ({
        type: types.UPDATE_TEACHERS_REQUEST,
        dataTeacher
    }),
    resetTeachers: () => ({
        type: types.RESTABLECER_STORE,

    })
}

export const selectors = {
    getDataTeachers: ({Teachers}) => Teachers.dataTeachers,
    getFetching: ({Teachers}) => Teachers.fetching,
}
