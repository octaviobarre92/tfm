import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {actions as actionsTeacher, selectors as selectorTeacher} from "store/reducers/teachers"
import {actions as actionsAssignment} from "store/reducers/assignments"
import {Card, Dropdown, Popconfirm, Table} from "antd";
import ModalUpdateTeacher from "./ModalUpdateTeacher";
import {MoreOutlined} from '@ant-design/icons';
import ModalAssignments from "./ModalAssignments";

const ListTeachers = ({dataTeacher, isFetching, getTeachers, deleteTeacher, saveTeacherSelectedAssignment}) => {
    const [showModal, setShowModal] = useState(false)
    const [item, setItem] = useState(null)
    const [assignment, setAssignment] = useState(null)

    const actionsMenuTeacher = (record) => ([
        {
            key: '1',
            label: (
                <span onClick={() => {
                    loadTeacher(record)
                }}>Editar</span>
            ),
        },
        {
            key: '2',
            label: (
                <span type="primary" onClick={() => {
                    loadTeacherAssignment(record)
                }}>Asignaciones</span>
            ),
        },
        {
            key: '3',
            danger: true,
            label: (
                <Popconfirm
                    placement="left"
                    title="Desea cambiar el estado del profesor?"
                    description="Esto puede afectar a las operaciones que el profesor realice."
                    onConfirm={() => confirmDeleteTeacher(record)}
                    okText="Aceptar"
                    cancelText="Cancelar"
                >
                    {record.estado ? 'Eliminar' : 'Restaurar'}
                </Popconfirm>
            ),
        },
    ])

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
                <Dropdown
                    menu={{items: actionsMenuTeacher(record)}}
                >
                    <a onClick={(e) => e.preventDefault()}>
                        <MoreOutlined/>
                    </a>
                </Dropdown>
            ),
        },
    ];

    useEffect(() => {
        getTeachers();
    }, [])

    const confirmDeleteTeacher = ({id, estado}) => {
        deleteTeacher({id, estado: Number(!estado)});
    }

    const loadTeacher = (teacher) => {
        setItem(teacher);
        setShowModal(true)
    }
    const loadTeacherAssignment = (teacher) => {
        saveTeacherSelectedAssignment(teacher)
        setAssignment(teacher);
        setShowModal(true)
    }

    return (
        <>
            <Card loading={isFetching}>
                <Table columns={columns} dataSource={dataTeacher}/>
            </Card>

            {item &&
                <ModalUpdateTeacher item={item} setItem={setItem} showModal={showModal} setShowModal={setShowModal}/>}

            {assignment && <ModalAssignments showModal={showModal} setShowModal={setShowModal}/>}
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
    deleteTeacher: (teacher) => {
        dispatch(actionsTeacher.deleteTeachers(teacher));
    },
    saveTeacherSelectedAssignment: (teacher) => {
        dispatch(actionsAssignment.saveTeacherSelectedAssignment(teacher));
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(ListTeachers)
