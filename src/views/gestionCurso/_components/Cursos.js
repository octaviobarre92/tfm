import React, { Suspense, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { actions as actionStudents, selectors as selectorStudents } from "store/reducers/students"
import { Table, Divider, Tag, Card, Button, Col, Row } from 'antd';
import Loading from 'components/shared-components/Loading';
import FormCurso from './ModalCurso';
import { actions as actionCourse, selectors as selectorCourse } from "store/reducers/course"
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';


const ListCurso = ({ getCourse, updateStudent, dataCourse, isFetching }) => {
    const [showModal, setShowModal] = useState("new")
    const [item, setItem] = useState(null)
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
                    <DeleteOutlined style={{color:"red"}} />
                </span>
            ),
        },
    ];
    useEffect(() => {
        getCourse()
    }, [])
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
})
const mapDispatchToProps = (dispatch) => ({
    getCourse: () => {
        dispatch(actionCourse.loadCourseAll());
    },
    updateStudent: (values) => {
        dispatch(actionCourse.updateCourse(values));
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(ListCurso)
