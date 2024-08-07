import { Button, Card, DatePicker, Form, Input, Modal, Select, notification } from 'antd';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { actions as actionStudents, selectors as selectorStudents } from "store/reducers/students"
import { CloseCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';



export const ModalStudents = ({ updateStudent, item, setItem, showModal, setShowModal, cursos }) => {
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
    const { Option } = Select;

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
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor ingrese un número de cédula',
                                }
                            ]}
                            name="cedula"
                            label="Cedula">
                            <Input />
                        </Form.Item>
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor ingrese el primer nombre del estudiante',
                                }
                            ]}
                            name="primer_nombre"
                            label="Primer Nombre">
                            <Input />
                        </Form.Item>
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor ingrese el segundo nombre del estudiante',
                                }
                            ]}
                            name="segundo_nombre"
                            label="Segundo Nombre">
                            <Input />
                        </Form.Item>
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor ingrese el primer apellido del estudiante',
                                }
                            ]}
                            name="primer_apellido"
                            label="Primer Apellido">
                            <Input />
                        </Form.Item>
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor ingrese el segundo apellido del estudiante',
                                }
                            ]}
                            name="segundo_apellido"
                            label="Segundo Apellido">
                            <Input />
                        </Form.Item>
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor ingrese el nombre completo del representante',
                                }
                            ]}
                            name="representante"
                            label="Representante">
                            <Input />
                        </Form.Item>
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor ingrese el correo electronico del representante',
                                }, {
                                    type: 'email',
                                    message: 'Ingrese un correo electrónico valido!'
                                }
                            ]}
                            name="correo_representante"
                            label="Correo de representante">
                            <Input />
                        </Form.Item>
                        <Form.Item name="telefono_representante" label="Telefono de representante">
                            <Input />
                        </Form.Item>
                        <Form.Item name="direccion" label="Dirección">
                            <Input />
                        </Form.Item>
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor ingrese el correo electronico del estudiante',
                                }, {
                                    type: 'email',
                                    message: 'Ingrese un correo electrónico valido!'
                                }
                            ]}
                            name="correo_estudiante" label="Correo de estudiante">
                            <Input />
                        </Form.Item>
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor seleccione la fecha de nacimiento',
                                }
                            ]}
                            name="fecha_nacimiento"
                            label="Fecha de nacimiento">
                            <Input type='date' />
                        </Form.Item>
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor seleccione un curso',
                                }
                            ]}
                            name="fkCurso"
                            label="Curso">
                            <Select
                                showSearch
                                style={{ width: 200 }}
                                placeholder="Seleccione un curso"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {cursos.map((item) => (
                                    <Option value={item.idCurso}>{`${item.nombre} - ${item.paralelo}`}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Form></Card>
            </Modal >
        </>
    )
}


export default ModalStudents
