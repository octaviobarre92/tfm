import React, { Suspense, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { actions as actionStudents, selectors as selectorStudents } from "store/reducers/students"
import { Table, Divider, Tag, Card, Button, Col, Row, notification } from 'antd';
import Loading from 'components/shared-components/Loading';
import FormCurso from './ModalCurso';
import { actions as actionCourse, selectors as selectorCourse } from "store/reducers/course"
import { EditOutlined, DeleteOutlined, CloseCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { actions as actionLogin, selectors as selectorLogin } from "store/reducers/login"


const ListCurso = ({ getCourse, updateStudent, dataCourse, isFetching, deleteData, statusDelete }) => {
    const [showModal, setShowModal] = useState("new")
    const [item, setItem] = useState(null)

    useEffect(() => {
        if (statusDelete === "ERROR") {
            notification.open({
                message: 'Error al eliminar este curso',
                description:
                    'Este curso tiene docentes registrados por lo cual no puede ser eliminado, contacte con el Administrador',
                icon: <CloseCircleOutlined style={{ color: 'red' }} />,
            });
        }
        if (statusDelete === "ELIMINADO") {
            notification.open({
                message: 'Eliminado correctamente',
                description:
                    'Se elimino el curso de forma exitosa!',
                icon: <CheckCircleOutlined style={{ color: '#108ee9' }} />,
            });
            getCourse()
        }
    }, [statusDelete])
    useEffect(() => {
        getCourse()
    }, [])
    const columns = [
        {
            title: 'Nombre de curso',
            dataIndex: 'nombre',
            key: 'nombre'
        },
        {
            title: 'Paralelo',
            dataIndex: 'paralelo',
            key: 'paralelo',
        },
        {
            title: 'Fecha de creación',
            dataIndex: 'fechaCreacion',
            key: 'fechaCreacion',
        }, {
            title: 'Numero de asignaturas vinculadas',
            dataIndex: 'asignaturas',
            key: 'asignaturas',
        },
        {
            title: 'Accion',
            key: 'action',
            render: (text, record) => (
                <span>
                    <EditOutlined onClick={() => { cargarCourse(record) }} />
                    <Divider type="vertical" />
                    <DeleteOutlined onClick={() => { EliminarCurso(record) }} style={{ color: "red" }} />
                </span>
            ),
        },
    ];
    const EliminarCurso = (data) => {
        deleteData("cursos", "idCurso", data.idCurso);
    }
    const cargarCourse = (data) => {
        setItem(data);
        setShowModal("edit")
    }
    return (
        <>
            <Card loading={isFetching}>
                <Row>
                    <Col lg={12}>
                        <Table columns={columns} dataSource={dataCourse} />
                    </Col>
                    <Col lg={2}></Col>
                    <Col lg={10}>
                        <FormCurso item={item} setItem={setItem} updateStudent={updateStudent} showModal={showModal} setShowModal={setShowModal} />
                    </Col>
                </Row>
            </Card>
        </>
    )
}

const mapStateToProps = (state) => ({
    dataCourse: selectorCourse.getdataCourse(state),
    isFetching: selectorCourse.getFetching(state),
    statusDelete: selectorLogin.getStatusDelete(state),

})
const mapDispatchToProps = (dispatch) => ({
    getCourse: () => {
        dispatch(actionCourse.loadCourseAll());
    },
    updateStudent: (values) => {
        dispatch(actionCourse.updateCourse(values));
    },
    deleteData: (tabla, campo, id) => {
        dispatch(actionLogin.deleteData(tabla, campo, id));
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(ListCurso)
