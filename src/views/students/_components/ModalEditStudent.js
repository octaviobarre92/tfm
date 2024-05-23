import { Button, Card, DatePicker, Form, Input, Modal, notification } from 'antd';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { actions as actionStudents, selectors as selectorStudents } from "store/reducers/students"
import { CloseCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';



export const ModalStudents = ({ updateStudent, item, setItem, showModal, setShowModal }) => {
    const [componentSize, setComponentSize] = useState('small');
    const formRef = useRef(null);
    useEffect(() => {

    }, [])
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    const onSubmit = values => {
        updateStudent({ ...values, idEstudiante: item.idEstudiante });
        notification.open({
            message: 'Exitoso!',
            description:
                'Estudiante actualizado correctamente, puedes visualizarlo en el apartado de Listado',
            icon: <CheckCircleOutlined style={{ color: '#108ee9' }} />,
        });
        setItem(null); setShowModal(!showModal)
    };

    return (
        <>
            <Modal
                title="Actualizacion de estudiante"
                open={showModal}
                width="60%"
                okText="Actualizar"
                onOk={() => { formRef.current.submit() }}
                onCancel={() => { setItem(null); setShowModal(!showModal) }}
                cancelText="Cancelar"
            >
                <Card loading={!item}>
                    <Form
                        ref={formRef}
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 14 }}
                        layout="horizontal"
                        initialValues={{ ...item, size: componentSize }}
                        onValuesChange={onFormLayoutChange}
                        size={componentSize}
                        onFinish={onSubmit}
                    >
                        <Form.Item name="cedula" label="Cedula">
                            <Input />
                        </Form.Item>
                        <Form.Item name="primer_nombre" label="Primer Nombre">
                            <Input />
                        </Form.Item>
                        <Form.Item name="segundo_nombre" label="Segundo Nombre">
                            <Input />
                        </Form.Item>
                        <Form.Item name="primer_apellido" label="Primer Apellido">
                            <Input />
                        </Form.Item>
                        <Form.Item name="segundo_apellido" label="Segundo Apellido">
                            <Input />
                        </Form.Item>
                        <Form.Item name="representante" label="Representante">
                            <Input />
                        </Form.Item>
                        <Form.Item name="correo_representante" label="Correo de representante">
                            <Input />
                        </Form.Item>
                        <Form.Item name="telefono_representante" label="Telefono de representante">
                            <Input />
                        </Form.Item>
                        <Form.Item name="direccion" label="Dirección">
                            <Input />
                        </Form.Item>
                        <Form.Item name="correo_estudiante" label="Correo de estudiante">
                            <Input />
                        </Form.Item>
                        <Form.Item name="fecha_nacimiento" label="Fecha de nacimiento">
                            <Input type='date' />
                        </Form.Item>
                    </Form></Card>
            </Modal >
        </>
    )
}


export default ModalStudents
