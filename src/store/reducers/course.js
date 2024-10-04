

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

    ASIGNATURA_WITH_TEACHER_REQUEST: "ASIGNATURA_WITH_TEACHER/ASIGNATURA_WITH_TEACHER_REQUEST",
    ASIGNATURA_WITH_TEACHER_SUCCESS: "ASIGNATURA_WITH_TEACHER/ASIGNATURA_WITH_TEACHER_SUCCESS",
    ASIGNATURA_WITH_TEACHER_FAILURE: "ASIGNATURA_WITH_TEACHER/ASIGNATURA_WITH_TEACHER_FAILURE",


    ESTUDIANTES_WITH_ASIGNATURAS_REQUEST: "ASIGNATURA/ESTUDIANTES_WITH_ASIGNATURAS_REQUEST",
    ESTUDIANTES_WITH_ASIGNATURAS_SUCCESS: "ASIGNATURA/ESTUDIANTES_WITH_ASIGNATURAS_SUCCESS",
    ESTUDIANTES_WITH_ASIGNATURAS_FAILURE: "ASIGNATURA/ESTUDIANTES_WITH_ASIGNATURAS_FAILURE",


    ASISTENCIA_ESTUDIANTE_REQUEST: "ASIGNATURA/ASISTENCIA_ESTUDIANTE_REQUEST",
    ASISTENCIA_ESTUDIANTE_SUCCESS: "ASIGNATURA/ASISTENCIA_ESTUDIANTE_SUCCESS",
    ASISTENCIA_ESTUDIANTE_FAILURE: "ASIGNATURA/ASISTENCIA_ESTUDIANTE_FAILURE",

    CURSOS_TEACHER_REQUEST: "ASIGNATURA/CURSOS_TEACHER_REQUEST",
    CURSOS_TEACHER_SUCCESS: "ASIGNATURA/CURSOS_TEACHER_SUCCESS",
    CURSOS_TEACHER_FAILURE: "ASIGNATURA/CURSOS_TEACHER_FAILURE",

    ASISTENCIA_SEND_REQUEST: "ASIGNATURA/ASISTENCIA_SEND_REQUEST",
    ASISTENCIA_SEND_SUCCESS: "ASIGNATURA/ASISTENCIA_SEND_SUCCESS",
    ASISTENCIA_SEND_FAILURE: "ASIGNATURA/ASISTENCIA_SEND_FAILURE",

    RESTABLECER_STORE: "COURSE/RESTABLECER_STORE",


}


export const INITIAL_STATE = {
    fetching: false,
    fetchingCourse: false,
    fetchingAsignatura: false,
    fetchingEstudiante: false,
    dataCourse: [],
    dataAsignatura: [],
    asignaturas: [],
    estudiantes: [],
    cursos: [],
    fetchingAsistencia: false,
    asistencias: [],
}

export default (state = INITIAL_STATE, action = {}) => {
    const {
        fetching,
        dataCourse,
        dataAsignatura,
        asignaturas,
        estudiantes,
        asistencias,
        fetchingAsistencia,
        cursos,
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
        case types.ASIGNATURA_WITH_TEACHER_REQUEST:
            return {
                ...state,
                fetchingAsignatura: true,
                asignaturas: [],
                estudiantes: []
            };
        case types.ASIGNATURA_WITH_TEACHER_SUCCESS:
            return {
                ...state,
                fetchingAsignatura: false,
                asignaturas
            };
        case types.ESTUDIANTES_WITH_ASIGNATURAS_REQUEST:
            return {
                ...state,
                fetchingEstudiante: true,
            };
        case types.ESTUDIANTES_WITH_ASIGNATURAS_SUCCESS:
            return {
                ...state,
                fetchingEstudiante: false,
                estudiantes
            };
        case types.ASISTENCIA_ESTUDIANTE_REQUEST:
            return {
                ...state,
                fetchingAsistencia: true,
            };
        case types.ASISTENCIA_ESTUDIANTE_SUCCESS:
            return {
                ...state,
                fetchingAsistencia: false,
                asistencias
            };
        case types.CURSOS_TEACHER_REQUEST:
            return {
                ...state,
                fetchingCourse: true,
                cursos: [],
                asignaturas: [],
                estudiantes: []
            };
        case types.CURSOS_TEACHER_SUCCESS:
            return {
                ...state,
                fetchingCourse: false,
                cursos,
                asignaturas: [],
                
            };
        case types.ASISTENCIA_SEND_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case types.ASISTENCIA_SEND_SUCCESS:
            return {
                ...state,
                fetching: false
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
    GetAsignaturaWithCurso: (idCurso, teacherId = null) => ({
        type: types.ASIGNATURA_WITH_TEACHER_REQUEST,
        idCurso,
        teacherId
    }),
    GetCourseWithTeacher: (idTeacher = null) => ({
        type: types.CURSOS_TEACHER_REQUEST,
        idTeacher
    }),
    GetStudentsWithAsignatura: (idAsignatura, teacherId = null) => ({
        type: types.ESTUDIANTES_WITH_ASIGNATURAS_REQUEST,
        idAsignatura,
        teacherId
    }),
    GetAsistenciaPorEstudiante: (data) => ({
        type: types.ASISTENCIA_ESTUDIANTE_REQUEST,
        data
    }),
    sendAsistencia: (dataAsistencia) => ({
        type: types.ASISTENCIA_SEND_REQUEST,
        dataAsistencia
    }),
    resetCourse: () => ({
        type: types.RESTABLECER_STORE,
    })
}

export const selectors = {
    getDataAsignatura: ({ Course }) => Course.dataAsignatura,
    getdataCourse: ({ Course }) => Course.dataCourse,
    getFetching: ({ Course }) => Course.fetching,
    getcursos: ({ Course }) => Course.cursos,
    getestudiantes: ({ Course }) => Course.estudiantes,
    getasignaturas: ({ Course }) => Course.asignaturas,
    getFetchingcursos: ({ Course }) => Course.fetchingCourse,
    getFetchingestudiantes: ({ Course }) => Course.fetchingEstudiante,
    getFetchingasignaturas: ({ Course }) => Course.fetchingAsignatura,
    getFetchingAsistencia: ({ Course }) => Course.fetchingAsistencia,
    getAsistencias: ({ Course }) => Course.asistencias,
}
