
import { post, del, get, put } from "./api_helper"
const apiURL = "http://instituto-japon-asistencia.com"

export const loginStep1 = (usuario, password) => {
    return post(apiURL + "/services/web-services.php", { usuario, password, inicioSesion: 0 })
}
export const validateSecurityData = (token, reintentos) => {
    return post(apiURL + "/services/web-services.php", { token, reintentos, actualizarReintentos: 0 })
}
export const validateSecurityDataSuccess = (token, reintentos) => {
    return post(apiURL + "/services/web-services.php", { token, reintentos, actualizarReintentos: 0, loginSucces: 0 })
}

