import { Alert, Button, Card, Col, DatePicker, Divider, Form, Input, Modal, Row, notification } from 'antd';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { actions as actionStudents, selectors as selectorStudents } from "store/reducers/students"
import { CloseCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { actions as actionCourse, selectors as selectorCourse } from "store/reducers/course"



const FormCurso = ({ saveCourse, item, setItem, showModal, setShowModal, updateCourse }) => {
    const [componentSize, setComponentSize] = useState('middle');
    const formRef = useRef(null);
    useEffect(() => {

    }, [])
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    console.log(item);

    if (showModal === "edit" && item !== null) {
        const onSubmit = values => {
            updateCourse({ ...values, idCurso: item.idCurso });
            notification.open({
                message: 'Exitoso!',
                description:
                    'Curso actualizado de forma exitosa, puedes visualizarlo en el apartado de Listado',
                icon: <CheckCircleOutlined style={{ color: '#108ee9' }} />,
            });
            setItem("new");
        };
        formRef.current && formRef.current.setFieldValue("nombre", item.nombre)
        formRef.current && formRef.current.setFieldValue("paralelo", item.paralelo)
        return (
            <>
                <Card loading={false}>
                    <Row>
                        <Col lg={20}>
                            <Alert type="info" description={"Usted va a editar un curso para el plantel educativo, verificar que el curso y paralelo no este ya creado, el sistema le avisará si el curso existe."} />
                        </Col>
                    </Row>
                    <br />
                    <Form
                        ref={formRef}
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 30 }}
                        layout="vertical"
                        initialValues={{ ...item, size: componentSize }}
                        onValuesChange={onFormLayoutChange}
                        size={componentSize}
                        onFinish={onSubmit}
                    >
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                    message: 'Registre el nombre del curso',
                                }
                            ]}
                            name="nombre"
                            label="Nombre de curso">
                            <Input />
                        </Form.Item>
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                    message: 'Ingrese el paralelo correspondiente',
                                }
                            ]}
                            name="paralelo"
                            label="Paralelo">
                            <Input />
                        </Form.Item>
                        <Form.Item >
                            <Button onClick={() => {
                                setShowModal("new");
                                setItem(null)
                                formRef && formRef.current.setFieldValue("nombre", "")
                                formRef && formRef.current.setFieldValue("paralelo", "")
                            }} type="default"  >
                                Cancelar
                            </Button>
                            <Divider type="vertical" />

                            <Button type="primary" htmlType="submit"   >
                                Editar Curso
                            </Button>
                        </Form.Item>
                    </Form></Card>
            </>
        )
    }
    if (showModal === "new") {
        const onSubmit = values => {
            saveCourse(values);
            notification.open({
                message: 'Exitoso!',
                description:
                    'Curso creado correctamente, puedes visualizarlo en el apartado de Listado',
                icon: <CheckCircleOutlined style={{ color: '#108ee9' }} />,
            });
            setItem("new");
        };
        return (
            <>
                <Card loading={false}>
                    <Row>
                        <Col lg={20}>
                            <Alert type="info" description={"Usted va a registrar un nuevo curso para el plantel educativo, verificar que el curso y paralelo no este ya creado, el sistema le avisará si el curso existe."} />
                        </Col>
                    </Row>
                    <br />
                    <Form
                        ref={formRef}
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 30 }}
                        layout="vertical"
                        initialValues={{ ...item, size: componentSize }}
                        onValuesChange={onFormLayoutChange}
                        size={componentSize}
                        onFinish={onSubmit}
                    >
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                    message: 'Registre el nombre del curso',
                                }
                            ]}
                            name="nombre"
                            label="Nombre de curso">
                            <Input />
                        </Form.Item>
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                    message: 'Ingrese el paralelo correspondiente',
                                }
                            ]}
                            name="paralelo"
                            label="Paralelo">
                            <Input />
                        </Form.Item>
                        <Form.Item >
                            <Button type="primary" htmlType="submit"   >
                                Guardar curso
                            </Button>
                        </Form.Item>
                    </Form></Card>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    isFetching: selectorStudents.getFetching(state),
    isFetchingCursos: selectorCourse.getFetching(state),
    cursos: selectorCourse.getdataCourse(state),
})
const mapDispatchToProps = (dispatch) => ({
    saveCourse: (dataCourse) => {
        dispatch(actionCourse.saveCourse(dataCourse));
    },
    updateCourse: (dataCourse) => {
        dispatch(actionCourse.updateCourse(dataCourse));
    },
    loadCursos: () => {
        dispatch(actionCourse.loadCourseAll());
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(FormCurso)


