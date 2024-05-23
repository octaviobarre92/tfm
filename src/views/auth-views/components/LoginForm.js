import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input, Divider, Alert } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { GoogleSVG, FacebookSVG } from 'assets/svg/icon';
import CustomIcon from 'components/util-components/CustomIcon'
import {
	signIn,
	showLoading,
	showAuthMessage,
	hideAuthMessage,
	signInWithGoogle,
	signInWithFacebook
} from 'store/slices/authSlice';
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"
import { actions as actionLogin, selectors as selectorLogin } from "store/reducers/login"

export const LoginForm = props => {

	const navigate = useNavigate();

	const {
		showForgetPassword,
		hideAuthMessage,
		signIn,
		token,
		loading,
		redirect,
		showMessage,
		message,
		goLogin,
		allowRedirect = true
	} = props

	const initialCredential = {
		email: 'octaviobarre92@gmail.com',
		password: '123'
	}

	const onLogin = values => {
		goLogin(values);
	};
	console.log("acaaa");
	useEffect(() => {
		// if (token !== null && allowRedirect) {
		// 	navigate(redirect)
		// }
		if (showMessage) {
			const timer = setTimeout(() => hideAuthMessage(), 3000)
			return () => {
				clearTimeout(timer);
			};
		}
	});

	return (
		<>
			<motion.div
				initial={{ opacity: 0, marginBottom: 0 }}
				animate={{
					opacity: showMessage ? 1 : 0,
					marginBottom: showMessage ? 20 : 0
				}}>
				<Alert type="error" showIcon message={message}></Alert>
			</motion.div>
			<Form
				layout="vertical"
				name="login-form"
				initialValues={initialCredential}
				onFinish={onLogin}
			>
				<Form.Item
					name="email"
					label="Correo electrónico"
					rules={[
						{
							required: true,
							message: 'Por favor ingrese un correo electrónico',
						},
						{
							type: 'email',
							message: 'Ingrese un correo electrónico valido!'
						}
					]}>
					<Input prefix={<MailOutlined className="text-primary" />} />
				</Form.Item>
				<Form.Item
					name="password"
					label={
						<div className={`${showForgetPassword ? 'd-flex justify-content-between w-100 align-items-center' : ''}`}>
							<span>Contraseña</span>
						</div>
					}
					rules={[
						{
							required: true,
							message: 'Por favor ingrese su contraseña',
						}
					]}
				>
					<Input.Password prefix={<LockOutlined className="text-primary" />} />
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit" block loading={loading}>
						Iniciar sesión
					</Button>
				</Form.Item>
			</Form>
		</>
	)
}

LoginForm.propTypes = {
	otherSignIn: PropTypes.bool,
	showForgetPassword: PropTypes.bool,
	extra: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element
	]),
	goLogin: PropTypes.func.isRequired
};

LoginForm.defaultProps = {
	otherSignIn: true,
	showForgetPassword: false
};

const mapStateToProps = ({ auth, Login }) => {
	const { loading, message, showMessage, redirect } = auth;
	const { token } = Login
	return { loading, message, showMessage, token, redirect }
}

const mapDispatchToProps = (dispatch) => ({
	goLogin: (data) => {
		const { email, password } = data;
		dispatch(actionLogin.login(email, password, () => { }));
	}
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
