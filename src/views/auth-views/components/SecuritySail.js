import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input, Divider, d, Row, Col, notification, Alert } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { CloseCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';

import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"
import { actions as actionLogin, selectors as selectorLogin } from "store/reducers/login"
import { REINTENTOS_MAX } from 'constants/constans';

export const SecuritySail = ({ dataUser, token, goDashboard, validateImageSuccess, validateSecurity, reintentos, resetLogin }, props) => {

    const navigate = useNavigate();
    useEffect(() => {
        if (reintentos >= REINTENTOS_MAX) {
            notification.open({
                message: 'Lo sentimos!',
                description:
                    'Excedistes la cantidad de reintentos, tu usuario esta bloqueado, comunicate con el administrador, para que desbloquee el usuario',
                icon: <CloseCircleOutlined style={{ color: 'red' }} />,
            });
        }
    }, [reintentos])
    const validateImage = (id) => {

        if (dataUser) {
            if (dataUser["IMG_SECURITY"] === id) {
                // loggear
                validateImageSuccess(token, 0)
                goDashboard(token)
                localStorage.setItem("auth_token", token)
                notification.open({
                    message: 'Credenciales correctas',
                    description:
                        'Bienvenido a la plataforma de asistencia!',
                    icon: <CheckCircleOutlined style={{ color: '#108ee9' }} />,
                });
                navigate("/app/report")
            } else {
                notification.open({
                    message: 'Error de validación',
                    description:
                        'La imagen de seguridad seleccionada es incorrecta, si excedes de los ' + REINTENTOS_MAX + ' reintentos, tu usuario se bloqueara!!!!',
                    icon: <CloseCircleOutlined style={{ color: 'red' }} />,
                });
                validateSecurity(token, reintentos)

                // validar imagen por segunda vez
            }
        }
    }

    return (
        <>
            {reintentos >= REINTENTOS_MAX ? <>
                <Row>
                    <Col>
                        <Alert type="error" description={"Usuario bloqueado, por exceder el limite de reintentos."} />
                    </Col>
                </Row>

            </> : <>

                <Row>
                    <Col style={{ display: "contents" }}>
                        <div onClick={() => { validateImage(1) }} className='container_image_security'><img width={50} height={"auto"} src="https://static.vecteezy.com/system/resources/previews/013/452/430/original/illustration-of-tree-free-png.png" /></div>
                        <div onClick={() => { validateImage(2) }} className='container_image_security'><img width={50} height={"auto"} src="https://i.pinimg.com/originals/06/49/66/06496628fa77e5980783eba02524204f.png" /></div>
                        <div onClick={() => { validateImage(3) }} className='container_image_security'><img width={50} height={"auto"} src="https://images.vexels.me/media/users/3/140072/isolated/preview/02bac95a04a65600a095ae5948d87756-dog-cartoon.png" /></div>
                        <div onClick={() => { validateImage(4) }} className='container_image_security'><img width={50} height={"auto"} src="https://images.vexels.com/media/users/3/182678/isolated/preview/7ea4faa0bcd9705ce266e7769d01318d-barco-dibujado-a-mano.png" /></div>
                        <div onClick={() => { validateImage(5) }} className='container_image_security'><img width={50} height={"auto"} src="https://static.vecteezy.com/system/resources/previews/011/651/357/original/doodle-freehand-sketch-drawing-of-flower-free-png.png" /></div>
                        <div onClick={() => { validateImage(6) }} className='container_image_security'><img width={50} height={"auto"} src="https://cdn-icons-png.freepik.com/512/2038/2038263.png" /></div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Alert type='error' description={"Te quedan " + (REINTENTOS_MAX - reintentos) + " de " + REINTENTOS_MAX + ", tu usuario sera bloqueado si no seleccionas la imagen correcta por 2 veces"} />
                    </Col>
                </Row>
            </>}
            <br />
            <Row style={{ alignItems: "center", justifyContent: "center" }}>
                <Col style={{ alignItems: "center" }}>
                    <Button type="primary" onClick={() => { resetLogin() }} >Cambiar de usuario</Button>
                </Col>
            </Row>
        </>
    )
}


const mapStateToProps = (state) => ({
    dataUser: selectorLogin.getDataUser(state),
    token: selectorLogin.getToken(state),
    reintentos: selectorLogin.getReintentos(state),
})
const mapDispatchToProps = (dispatch) => ({
    goDashboard: (token) => {
        dispatch(actionLogin.updateToken(token, JSON.parse(atob(token))));
    },
    validateSecurity: (token, reintentos) => {
        dispatch(actionLogin.validateImage(token, reintentos))
    },
    validateImageSuccess: (token, reintentos) => {
        dispatch(actionLogin.validateImageSuccess(token, reintentos))
    },
    resetLogin: () => {
        dispatch(actionLogin.resetLogin())
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(SecuritySail)
