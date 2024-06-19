import React, { useEffect } from 'react'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import {
	AUTH_PREFIX_PATH,
	UNAUTHENTICATED_ENTRY,
	REDIRECT_URL_KEY
} from 'configs/AppConfig'
import { connect } from 'react-redux';
import { actions as actionLogin, selectors as selectorLogin } from "store/reducers/login"
import { AUTH_TOKEN } from 'constants/AuthConstant';
const ProtectedRoute = ({ token, updateToken, dataUser }) => {



	const location = useLocation()
	const navigate = useNavigate();
	useEffect(() => {
		if (!token) {
			// if (localStorage.getItem(AUTH_TOKEN)) {
			// 	updateToken(localStorage.getItem(AUTH_TOKEN))
			// } else {
				localStorage.removeItem(AUTH_TOKEN)
				navigate("/auth/login")
			// }

		}
	}, [token])

	if (!token) {
		return <Navigate to={`${AUTH_PREFIX_PATH}${UNAUTHENTICATED_ENTRY}?${REDIRECT_URL_KEY}=${location.pathname}`} replace />;
	}

	return <Outlet />
}

const mapStateToProps = (state) => ({
	token: selectorLogin.getToken2(state),
	dataUser: selectorLogin.getDataUser(state),
})
const mapDispatchToProps = (dispatch) => ({
	updateToken: (token) => {
		dispatch(actionLogin.updateToken(token, JSON.parse(atob(token))));
	}
});
export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute)