export const types = {
    STUDENTS_REQUEST: "students/STUDENTS_REQUEST",
    STUDENTS_SUCCESS: "students/STUDENTS_SUCCESS",
    STUDENTS_FAILURE: "students/STUDENTS_FAILURE",

    SAVE_STUDENTS_REQUEST: "students/SAVE_STUDENTS_REQUEST",
    SAVE_STUDENTS_SUCCESS: "students/SAVE_STUDENTS_SUCCESS",
    SAVE_STUDENTS_FAILURE: "students/SAVE_STUDENTS_FAILURE",

   UPDATE_STUDENTS_REQUEST: "students/UPDATE_STUDENTS_REQUEST",
   UPDATE_STUDENTS_SUCCESS: "students/UPDATE_STUDENTS_SUCCESS",
   UPDATE_STUDENTS_FAILURE: "students/UPDATE_STUDENTS_FAILURE",

    RESTABLECER_STORE: "students/RESTABLECER_STORE",


}


export const INITIAL_STATE = {
    fetching: false,
    dataStudents: []
}

export default (state = INITIAL_STATE, action = {}) => {
    const {
        fetching,
        dataStudents,
        ...rest
    } = action;
    switch (action.type) {
        case types.RESTABLECER_STORE:
            return {
                INITIAL_STATE,
                tipo: "RESTABLECER_STORE"
            };
        case types.STUDENTS_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case types.SAVE_STUDENTS_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case types.UPDATE_STUDENTS_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case types.STUDENTS_SUCCESS:
            return {
                ...state,
                fetching: false,
                dataStudents
            };
        case types.SAVE_STUDENTS_SUCCESS:
            return {
                ...state,
                fetching: false
            };
        case types.UPDATE_STUDENTS_SUCCESS:
            return {
                ...state,
                fetching: false
            };
        default:
            return state;
    }
}
export const actions = {
    loadStudentsAll: () => ({
        type: types.STUDENTS_REQUEST
    }),
    saveStudents: (dataStudent) => ({
        type: types.SAVE_STUDENTS_REQUEST,
        dataStudent
    }),
    updateStudent: (dataStudent) => ({
        type: types.UPDATE_STUDENTS_REQUEST,
        dataStudent
    }),
    resetStudents: () => ({
        type: types.RESTABLECER_STORE,

    })
}

export const selectors = {
    getDataStudents: ({ Students }) => Students.dataStudents,
    getFetching: ({ Students }) => Students.fetching,
}
