export const types = {
    LOGIN_REQUEST: "login/LOGIN_REQUEST",
    LOGIN_SUCCESS: "login/LOGIN_SUCCESS",
    LOGIN_FAILURE: "login/LOGIN_FAILURE",

    RESTABLECER_STORE: "login/RESTABLECER_STORE",
    TOKEN_UPDATE: "login/TOKEN_UPDATE",

    VALIDATE_IMAGE_REQUEST: "login/VALIDATE_IMAGE_REQUEST",
    VALIDATE_IMAGE_SUCCESS: "login/VALIDATE_IMAGE_SUCCESS",
    VALIDATE_IMAGE_FAILURE: "login/VALIDATE_IMAGE_FAILURE",

    VALIDATE_IMAGE_SUCCESS_REQUEST: "login/VALIDATE_IMAGE_SUCCESS_REQUEST",
    VALIDATE_IMAGE_SUCCESS_FAILURE: "login/VALIDATE_IMAGE_SUCCESS_FAILURE",

}


export const INITIAL_STATE = {
    fetching: false,
    hasLogged: false,
    verifyLogin: false,
    secondToken: null,
    token: null,
    reintentos: 0,
    dataUser: localStorage.getItem("auth_token") ? JSON.parse(atob(localStorage.getItem("auth_token"))) : null,
}

export default (state = INITIAL_STATE, action = {}) => {
    const {
        fetching,
        dataUser,
        hasLogged,
        token,
        secondToken,
        reintentos,
        ...rest
    } = action;
    switch (action.type) {
        case types.RESTABLECER_STORE:
            return {
                INITIAL_STATE,
                tipo: "RESTABLECER_STORE"
            };
        case types.LOGIN_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case types.LOGIN_FAILURE:
            return {
                ...state,
                fetching: false,
            };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                fetching: false,
                dataUser,
                secondToken,
                verifyLogin: true,
                reintentos
            }
        case types.TOKEN_UPDATE:
            return {
                ...state,
                token: secondToken,
                secondToken: secondToken,
                dataUser: dataUser,
                verifyLogin: true
            }
        case types.VALIDATE_IMAGE_SUCCESS:
            return {
                ...state,
                reintentos
            }
        default:
            return state;
    }
}
export const actions = {
    login: (user, password, navigate) => ({
        type: types.LOGIN_REQUEST,
        user,
        password,
        navigate
    }),
    validateImage: (token, reintentos) => ({
        type: types.VALIDATE_IMAGE_REQUEST,
        token,
        reintentos
    }),
    validateImageSuccess: (token, reintentos) => ({
        type: types.VALIDATE_IMAGE_SUCCESS_REQUEST,
        token,
        reintentos
    }),
    updateToken: (secondToken, dataUser) => ({
        type: types.TOKEN_UPDATE,
        secondToken,
        dataUser
    }),
    resetLogin: () => ({
        type: types.RESTABLECER_STORE,

    })
}

export const selectors = {
    getDataUser: ({ Login }) => Login.dataUser,
    getFetching: ({ Login }) => Login.fetching,
    getHasLogged: ({ Login }) => Login.hasLogged,
    getVerifyLogin: ({ Login }) => Login.verifyLogin,
    getToken: ({ Login }) => Login.secondToken,
    getToken2: ({ Login }) => Login.token,
    getReintentos: ({ Login }) => Login.reintentos,
}
