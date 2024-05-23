
import { post, del, get, put } from "./api_helper"
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

