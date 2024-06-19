import { Alert, Button, Card, Col, DatePicker, Divider, Form, Input, Modal, Row, notification } from 'antd';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { actions as actionStudents, selectors as selectorStudents } from "store/reducers/students"
import { CloseCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { actions as actionCourse, selectors as selectorCourse } from "store/reducers/course"



const FormAsignatura = ({ saveAsignatura, item, setItem, showModal, setShowModal, updateAsignatura }) => {
    const [componentSize, setComponentSize] = useState('middle');
    const formRef = useRef(null);
    useEffect(() => {

    }, [])
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    if (showModal === "edit" && item !== null) {
        const onSubmit = values => {
            updateAsignatura({ ...values, idAsignatura: item.idAsignatura });
            notification.open({
                message: 'Exitoso!',
                description:
                    'Curso actualizado de forma exitosa, puedes visualizarlo en el apartado de Listado',
                icon: <CheckCircleOutlined style={{ color: '#108ee9' }} />,
            });
            setItem("new");
        };
        formRef.current && formRef.current.setFieldValue("nombre", item.nombre)
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
                                    message: 'Registre el nombre de la asignatura',
                                }
                            ]}
                            name="nombre"
                            label="Nombre de asignatura">
                            <Input />
                        </Form.Item>
                        <Form.Item >
                            <Button onClick={() => {
                                setShowModal("new");
                                setItem(null)
                                formRef && formRef.current.setFieldValue("nombre", "")
                            }} type="default"  >
                                Cancelar
                            </Button>
                            <Divider type="vertical" />

                            <Button type="primary" htmlType="submit"   >
                                Editar Asignatura
                            </Button>
                        </Form.Item>
                    </Form></Card>
            </>
        )
    }
    if (showModal === "new") {
        const onSubmit = values => {
            saveAsignatura(values);
            notification.open({
                message: 'Exitoso!',
                description:
                    'Asignatura creado correctamente, puedes visualizarlo en el apartado de Listado',
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
                        <Form.Item >
                            <Button type="primary" htmlType="submit"   >
                                Guardar Asignatura
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
    saveAsignatura: (dataCourse) => {
        dispatch(actionCourse.saveAsignatura(dataCourse));
    },
    updateAsignatura: (dataCourse) => {
        dispatch(actionCourse.updateAsignatura(dataCourse));
    },
    loadAsignatura: () => {
        dispatch(actionCourse.loadAsignaturaAll());
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(FormAsignatura)


