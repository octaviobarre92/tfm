import React from 'react'
import LoginForm from '../../components/LoginForm'
import { Card, Row, Col, Alert } from "antd";
import { useSelector } from 'react-redux';
import SecuritySail from 'views/auth-views/components/SecuritySail';

const backgroundStyle = {
	backgroundImage: 'url(/img/others/img-17.jpg)',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover'
}

const Login = props => {
	const theme = useSelector(state => state.theme.currentTheme)
	return (
		<div className="h-100" style={backgroundStyle}>
			<div className="container d-flex flex-column justify-content-center h-100">
				<Row justify="center">
					<Col xs={20} sm={20} md={20} lg={7}>
						<Card>
							<div className="my-4">
								<div className="text-center">
									<img className="img-fluid mb-3" src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtSrRAVrKONcgIJrw-y6PveCP_m5LVJ-BnqykeUGJxAg&s`} width={100} height={"auto"} alt=""/>
									<Alert description="Ingresa tu credencial otorgada por la institución, si no tienes un usuario, pide uno en secretaria."/>
									{/* <Alert description="Por medidas de seguridad vamos a validar tu identidad con tu imagen de seguridad registrada. Por favor, selecciona tu imagen, tienes solo 2 reintentos caso contrario se bloqueara tu usuario."/> */}
								</div>
								<Row justify="center">
									<Col xs={24} sm={24} md={20} lg={20}>
										<LoginForm {...props} />
										{/* <SecuritySail {...props} /> */}
									</Col>
								</Row>
							</div>
						</Card>
					</Col>
				</Row>
			</div>
		</div>
	)
}

export default Login
