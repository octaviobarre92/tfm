import { post } from "./api_helper"

const apiURL = "http://instituto-japon-asistencia.com/services/web-services.php"

export const loginStep1 = (usuario, password) => {
    return post(apiURL, { usuario, password, inicioSesion: 0 })
}
export const validateSecurityData = (token, reintentos) => {
    return post(apiURL, { token, reintentos, actualizarReintentos: 0 })
}
export const validateSecurityDataSuccess = (token, reintentos) => {
    return post(apiURL, { token, reintentos, actualizarReintentos: 0, loginSucces: 0 })
}
export const loadStudentsAll = () => {
    return post(apiURL, { getStudents: 0 })
}
export const registrarEstudiante = (dataStudent) => {
    return post(apiURL, { ...dataStudent, registroEstudiante: 0 })
}
export const actualizarEstudiante = (dataStudent) => {
    return post(apiURL, { ...dataStudent, actualizarEstudiante: 0 })
}
export const loadTeachersAll = () => {
    return post(apiURL, { getTeachers: 0 })
}
export const registerTeachers = (teacher) => {
    return post(apiURL, { ...teacher, registerTeacher: 0 })
}
export const updateTeachers = (teacher) => {
    return post(apiURL, { ...teacher, updateTeacher: 0 })
}
export const deleteTeachers = (teacher) => {
    return post(apiURL, { ...teacher, changeStatusTeacher: 0 })
}

export const cargarCursos = () => {
    return post(apiURL, { getCourse: 0 })
}
export const guardarCurso = (dataCourse) => {
    return post(apiURL, { ...dataCourse, registerCourse: 0 })
}
export const actualizarCurso = (dataCourse) => {
    return post(apiURL, { ...dataCourse, updateCourse: 0 })
}

export const cargarAsignatura = () => {
    return post(apiURL, { getAsig: 0 })
}
export const guardarAsignatura = (dataAsignatura) => {
    return post(apiURL, { ...dataAsignatura, registerAsig: 0 })
}
export const actualizarAsignatura = (dataAsignatura) => {
    return post(apiURL, { ...dataAsignatura, updateAsig: 0 })
}

export const eliminar = (tabla, campo, id) => {
    return post(apiURL, { tabla, campo, id, eliminar: 0 })
}


export const GetAsignaturaWithCurso = (dataCurso) => {
    return post(apiURL, { ...dataCurso, mdGetAsignaturaWithCurso: 0 })
}
export const GetCourseWithTeacher = (dataAsignatura) => {
    return post(apiURL, { ...dataAsignatura, mdGetCourseWithTeacher: 0 })
}
export const GetStudentsWithAsignatura = (dataAsignatura) => {
    return post(apiURL, { ...dataAsignatura, mdGetStudentsWithAsignatura: 0 })
}
export const SendAsistencia = (dataAsistencia) => {
    return post(apiURL, { ...dataAsistencia, guardarAsistencia: 0 })
}
