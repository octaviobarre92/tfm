import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {actions as actionsTeacher, selectors as selectorTeacher} from "store/reducers/teachers"
import {Button, Card, Divider, Table} from "antd";
import ModalUpdateTeacher from "./ModalUpdateTeacher";

const ListTeachers = ({dataTeacher, isFetching, getTeachers}) => {
    const [showModal, setShowModal] = useState(false)
    const [item, setItem] = useState(null)
    const columns = [
        {
            title: 'Cédula',
            dataIndex: 'cedula',
            key: 'cedula'
        },
        {
            title: 'Primer Nombre',
            dataIndex: 'primer_nombre',
            key: 'primer_nombre',
        },
        {
            title: 'Segundo Nombre',
            dataIndex: 'segundo_nombre',
            key: 'segundo_nombre',
        },
        {
            title: 'Primer Apellido',
            dataIndex: 'primer_apellido',
            key: 'primer_apellido',
        },
        {
            title: 'Segundo Apellido',
            dataIndex: 'segundo_apellido',
            key: 'segundo_apellido',
        },
        {
            title: 'Correo',
            dataIndex: 'correo',
            key: 'correo',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                    <Button onClick={() => {
                        loadTeacher(record)
                    }}>Editar</Button>
                    <Divider type="vertical"/>
                    <Button>Delete</Button>
                </span>
            ),
        },
    ];

    useEffect(() => {
        getTeachers();
    }, [])


    const loadTeacher = (teacher) => {
        setItem(teacher);
        setShowModal(true)
    }

    return (
        <>
            <Card loading={isFetching}>
                <Table columns={columns} dataSource={dataTeacher}/>
            </Card>

            {item &&
                <ModalUpdateTeacher item={item} setItem={setItem} showModal={showModal} setShowModal={setShowModal}/>}
        </>
    )
}

const mapStateToProps = (state) => ({
    dataTeacher: selectorTeacher.getDataTeachers(state),
    isFetching: selectorTeacher.getFetching(state)
})
const mapDispatchToProps = (dispatch) => ({
    getTeachers: () => {
        dispatch(actionsTeacher.loadTeachersAll());
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(ListTeachers)
