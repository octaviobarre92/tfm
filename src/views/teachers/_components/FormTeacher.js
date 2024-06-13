import React, { useEffect, useRef, useState } from 'react';
import { Button, Checkbox, Form, Input, notification, Row } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
const tailLayout = {
    wrapperCol: { offset: 4, span: 16 },
};
const FormTeachers = ({ item, submitTeacher, setFormSubmitRef }) => {
    const formRef = useRef(null);
    const [componentSize, setComponentSize] = useState('small');
    const [indexImgSecurity, setIndexImgSecurity] = useState(null);
    const [editPassword, setEditPassword] = useState(false);

    useEffect(() => {
        setIndexImgSecurity(item?.imgSecurity)

        setFormSubmitRef && setFormSubmitRef(formRef);
    }, [item, formRef])

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const onSubmit = values => {
        const { id } = item ?? {}

        if (indexImgSecurity === null) {
            notification.open({
                message: 'Error!',
                description: 'Seleccione una imagen de seguridad para el inicio de sesión',
                icon: <CloseCircleOutlined style={{ color: 'red' }} />,
            });
            return
        }

        submitTeacher({ ...values, id, imgSecurity: indexImgSecurity });

        formRef.current?.resetFields();
        setIndexImgSecurity(null);

        notification.open({
            message: 'Exitoso!',
            description: 'Estudiante actualizado correctamente, puedes visualizarlo en el apartado de Listado',
            icon: <CheckCircleOutlined style={{ color: '#108ee9' }} />,
        });
    };

    const selectToImgSecurity = (indexImgSecurity) => {
        setIndexImgSecurity(indexImgSecurity);
    }

    const changeStateEditPassword = () => {
        formRef.current.setFieldValue('password', "")
        setEditPassword(!editPassword)
    }

    return (<>
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
                rules={[{
                    required: true, message: 'Por favor ingrese un número de cédula',
                }, {
                    message: 'Por favor ingrese un número de cédula válido', pattern: new RegExp('^[0-9]*$')
                }]}
                name="cedula"
                label="Cedula">
                <Input />
            </Form.Item>
            <Form.Item
                rules={[{
                    required: true, message: 'Por favor ingrese el primer nombre del profesor',
                }]}
                name="primer_nombre"
                label="Primer Nombre">
                <Input />
            </Form.Item>
            <Form.Item
                rules={[{
                    required: true, message: 'Por favor ingrese el segundo nombre del profesor',
                }]}
                name="segundo_nombre"
                label="Segundo Nombre">
                <Input />
            </Form.Item>
            <Form.Item
                rules={[{
                    required: true, message: 'Por favor ingrese el primer apellido del profesor',
                }]}
                name="primer_apellido"
                label="Primer Apellido">
                <Input />
            </Form.Item>
            <Form.Item
                rules={[{
                    required: true, message: 'Por favor ingrese el segundo apellido del profesor',
                }]}
                name="segundo_apellido"
                label="Segundo Apellido">
                <Input />
            </Form.Item>
            <Form.Item
                rules={[{
                    required: true, message: 'Por favor ingrese el correo electrónico del representante',
                }, {
                    type: 'email', message: 'Ingrese un correo electrónico valido!'
                }]}
                name="correo"
                label="Correo">
                <Input />
            </Form.Item>


            {item && <Form.Item
                rules={[{
                    required: true, message: 'Por favor ingrese el segundo apellido del profesor',
                }]}
                name="intentosImagen"
                label="Intentos">
                <Input />
            </Form.Item>}
            <Form.Item
                rules={[{
                    required: editPassword, message: 'Por favor ingrese una contraseña.',
                }]}
                name="password"
                label="Contraseña">
                <Input.Password disabled={!editPassword} />
            </Form.Item>
            <Form.Item {...tailLayout} ><Checkbox onClick={() => {
                changeStateEditPassword()
            }}>Cambiar contraseña?</Checkbox>
            </Form.Item>


            <Form.Item>
                <Row>
                    <div onClick={() => {
                        selectToImgSecurity(0)
                    }}
                        className={`container_image_security ${indexImgSecurity === 0 ? 'img-security-selected' : ''}`}>
                        <img width={50} height={"auto"}
                            src="https://static.vecteezy.com/system/resources/previews/013/452/430/original/illustration-of-tree-free-png.png"
                            alt='image_security_arbol' />
                    </div>
                    <div onClick={() => {
                        selectToImgSecurity(1)
                    }}
                        className={`container_image_security ${indexImgSecurity === 1 ? 'img-security-selected' : ''}`}>
                        <img width={50} height={"auto"}
                            src="https://i.pinimg.com/originals/06/49/66/06496628fa77e5980783eba02524204f.png"
                            alt='image_security_bus' />
                    </div>
                    <div onClick={() => {
                        selectToImgSecurity(2)
                    }}
                        className={`container_image_security ${indexImgSecurity === 2 ? 'img-security-selected' : ''}`}>
                        <img width={50} height={"auto"}
                            src="https://images.vexels.me/media/users/3/140072/isolated/preview/02bac95a04a65600a095ae5948d87756-dog-cartoon.png"
                            alt='image_security_perro' />
                    </div>
                    <div onClick={() => {
                        selectToImgSecurity(3)
                    }}
                        className={`container_image_security ${indexImgSecurity === 3 ? 'img-security-selected' : ''}`}>
                        <img width={50} height={"auto"}
                            src="https://images.vexels.com/media/users/3/182678/isolated/preview/7ea4faa0bcd9705ce266e7769d01318d-barco-dibujado-a-mano.png"
                            alt='image_security_barco' />
                    </div>
                    <div onClick={() => {
                        selectToImgSecurity(4)
                    }}
                        className={`container_image_security ${indexImgSecurity === 4 ? 'img-security-selected' : ''}`}>
                        <img width={50} height={"auto"}
                            src="https://static.vecteezy.com/system/resources/previews/011/651/357/original/doodle-freehand-sketch-drawing-of-flower-free-png.png"
                            alt='image_security_rosa' />
                    </div>
                    <div onClick={() => {
                        selectToImgSecurity(5)
                    }}
                        className={`container_image_security ${indexImgSecurity === 5 ? 'img-security-selected' : ''}`}>
                        <img width={50} height={"auto"} src="https://cdn-icons-png.freepik.com/512/2038/2038263.png"
                            alt='image_security_edificio' />
                    </div>
                </Row>
            </Form.Item>
            {
                !item && <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Guardar profesor
                    </Button>
                </Form.Item>
            }
        </Form>
    </>
    )
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(FormTeachers)
