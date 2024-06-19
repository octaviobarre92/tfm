import React, { Suspense, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { actions as actionStudents, selectors as selectorStudents } from "store/reducers/students"
import { Table, Divider, Tag, Card, Button, Col, Row, notification } from 'antd';
import Loading from 'components/shared-components/Loading';
import FormCurso from './ModalCurso';
import { actions as actionCourse, selectors as selectorCourse } from "store/reducers/course"
import { EditOutlined, DeleteOutlined, CloseCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import FormAsignatura from './FormAsignatura';
import { actions as actionLogin, selectors as selectorLogin } from "store/reducers/login"

const ListAsignatura = ({ getAsignatura, updateAsignatura, dataAsignatura, isFetching, deleteData, statusDelete }) => {
    const [showModal, setShowModal] = useState("new")
    const [item, setItem] = useState(null)
    const columns = [
        {
            title: 'Nombre de curso',
            dataIndex: 'nombre',
            key: 'nombre'
        },
        {
            title: 'Fecha de creación',
            dataIndex: 'fechaCreacion',
            key: 'fechaCreacion',
        },
        {
            title: 'Accion',
            key: 'action',
            render: (text, record) => (
                <span>
                    <EditOutlined onClick={() => { cargarAsignatura(record) }} />
                    <Divider type="vertical" />
                    <DeleteOutlined onClick={() => { eliminarAsignatura(record) }} style={{ color: "red" }} />
                </span>
            ),
        },
    ];
    useEffect(() => {
        if (statusDelete === "ERROR") {
            notification.open({
                message: 'Error al eliminar esta asignatura',
                description:
                    'Esta asignatura tiene docentes vinculados por lo cual no puede ser eliminado, contacte con el Administrador',
                icon: <CloseCircleOutlined style={{ color: 'red' }} />,
            });
        }
        if (statusDelete === "ELIMINADO") {
            notification.open({
                message: 'Eliminado correctamente',
                description:
                    'Se elimino la asignatra de forma exitosa!',
                icon: <CheckCircleOutlined style={{ color: '#108ee9' }} />,
            });
            getAsignatura()
        }
    }, [statusDelete])
    useEffect(() => {
        getAsignatura()
    }, [])
    const eliminarAsignatura = (data) => {
        deleteData("asignaturas", "idAsignatura", data.idAsignatura);
    }
    const cargarAsignatura = (data) => {
        setItem(data);
        setShowModal("edit")
    }
    return (
        <>
            <Card loading={isFetching}>
                <Row>
                    <Col lg={12}>
                        <Table columns={columns} dataSource={dataAsignatura} />
                    </Col>
                    <Col lg={2}></Col>
                    <Col lg={10}>
                        <FormAsignatura item={item} setItem={setItem} updateAsignatura={updateAsignatura} showModal={showModal} setShowModal={setShowModal} />
                    </Col>
                </Row>
            </Card>
        </>
    )
}

const mapStateToProps = (state) => ({
    dataAsignatura: selectorCourse.getDataAsignatura(state),
    isFetching: selectorCourse.getFetching(state),
    statusDelete: selectorLogin.getStatusDelete(state),
})
const mapDispatchToProps = (dispatch) => ({
    getAsignatura: () => {
        dispatch(actionCourse.loadAsignaturaAll());
    },
    updateAsignatura: (values) => {
        dispatch(actionCourse.updateAsignatura(values));
    },
    deleteData: (tabla, campo, id) => {
        dispatch(actionLogin.deleteData(tabla, campo, id));
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(ListAsignatura)
