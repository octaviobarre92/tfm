export const types = {
    LOGIN_REQUEST: "login/LOGIN_REQUEST",
    LOGIN_SUCCESS: "login/LOGIN_SUCCESS",
    LOGIN_FAILURE: "login/LOGIN_FAILURE",

    RESTABLECER_STORE: "login/RESTABLECER_STORE",
}


export const INITIAL_STATE = {
    fetching: false,
    hasLogged: false,
    dataUser: {
        primerNombre: "",
        segundoNombre: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        fechaNacimiento: "",
    },
}

export default (state = INITIAL_STATE, action = {}) => {
    const {
        fetching,
        dataUser,
        hasLogged,
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
                hasLogged: true
            }
        default:
            return state;
    }
}
export const actions = {
    login: (user, password,navigate) => ({
        type: types.LOGIN_REQUEST,
        user,
        password,
        navigate
    }),
    resetLogin: () => ({
        type: types.RESTABLECER_STORE
    })
}

export const selectors = {
    getDataUser: ({ Login }) => Login.dataUser,
    getFetching: ({ Login }) => Login.fetching,
    getHasLogged: ({ Login }) => Login.hasLogged,
}
