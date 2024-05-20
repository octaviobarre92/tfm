import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input, Divider, Alert, Row, Col } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"
import { actions as actionLogin, selectors as selectorLogin } from "store/reducers/login"

export const SecuritySail = props => {

    const navigate = useNavigate();

    const {

    } = props


    useEffect(() => {

    });

    return (
        <>
            <Row>
                <Col style={{display:"contents"}}>
                    <div className='container_image_security'><img width={75} height={"auto"} src="https://static.vecteezy.com/system/resources/previews/013/452/430/original/illustration-of-tree-free-png.png" /></div>
                    <div className='container_image_security'><img width={75} height={"auto"} src="https://i.pinimg.com/originals/06/49/66/06496628fa77e5980783eba02524204f.png" /></div>
                    <div className='container_image_security'><img width={75} height={"auto"} src="https://images.vexels.me/media/users/3/140072/isolated/preview/02bac95a04a65600a095ae5948d87756-dog-cartoon.png" /></div>
                    <div className='container_image_security'><img width={75} height={"auto"} src="https://images.vexels.com/media/users/3/182678/isolated/preview/7ea4faa0bcd9705ce266e7769d01318d-barco-dibujado-a-mano.png" /></div>
                    <div className='container_image_security'><img width={75} height={"auto"} src="https://static.vecteezy.com/system/resources/previews/011/651/357/original/doodle-freehand-sketch-drawing-of-flower-free-png.png" /></div>
                    <div className='container_image_security'><img width={75} height={"auto"} src="https://cdn-icons-png.freepik.com/512/2038/2038263.png" /></div>
                </Col>
            </Row>

        </>
    )
}

SecuritySail.propTypes = {
    otherSignIn: PropTypes.bool,
    showForgetPassword: PropTypes.bool,
    extra: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    goLogin: PropTypes.func.isRequired
};

SecuritySail.defaultProps = {
    otherSignIn: true,
    showForgetPassword: false
};

const mapStateToProps = ({ auth }) => {
    const { loading, message, showMessage, token, redirect } = auth;
    return { loading, message, showMessage, token, redirect }
}

const mapDispatchToProps = (dispatch) => ({
    goLogin: (data) => {
        const { email, password } = data;
        dispatch(actionLogin.login(email, password, () => { }));
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(SecuritySail)
