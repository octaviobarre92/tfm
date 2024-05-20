
import { post, del, get, put } from "./api_helper"
const apiURL="http://instituto-japon-asistencia.com"

export const loginStep1=(usuario,password)=>{
    return post(apiURL+"/services/web-services.php",{usuario, password,inicioSesion:0})
}
export const getProveedores=()=>{
    return get("https://62a0d7517b9345bcbe40527f.mockapi.io/proveedores")
}

