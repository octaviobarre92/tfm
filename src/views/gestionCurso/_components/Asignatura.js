import React, { Suspense, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { actions as actionStudents, selectors as selectorStudents } from "store/reducers/students"
import { Table, Divider, Tag, Card, Button } from 'antd';
import Loading from 'components/shared-components/Loading';
import { ModalAsignatura } from './ModalAsignatura';


const ListAsignatura = ({ getStudents, updateStudent, dataStudents, isFetching }) => {
    const [showModal, setShowModal] = useState(false)
    const [item, setItem] = useState(null)
    const columns = [
        {
            title: 'Cedula',
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
        }, {
            title: 'Primer Apellido',
            dataIndex: 'primer_apellido',
            key: 'primer_apellido',
        }, {
            title: 'Segundo Apellido',
            dataIndex: 'segundo_apellido',
            key: 'segundo_apellido',
        }, {
            title: 'Telefono de representante',
            dataIndex: 'telefono_representante',
            key: 'telefono_representante',
        }, {
            title: 'Correo de representante',
            dataIndex: 'correo_representante',
            key: 'correo_representante',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                    <Button onClick={() => { cargarEstudiante(record) }}>Editar</Button>
                    <Divider type="vertical" />
                    <a>Delete</a>
                </span>
            ),
        },
    ];
    useEffect(() => {
        getStudents()
    }, [])
    const cargarEstudiante = (data) => {
        setItem(data);
        setShowModal(!showModal)
    }
    return (
        <>
            <Card loading={isFetching}>
                <Table columns={columns} dataSource={dataStudents} />
            </Card>
            {item && <ModalAsignatura item={item} setItem={setItem} updateStudent={updateStudent} showModal={showModal} setShowModal={setShowModal} />}
        </>
    )
}

const mapStateToProps = (state) => ({
    dataStudents: selectorStudents.getDataStudents(state),
    isFetching: selectorStudents.getFetching(state),
})
const mapDispatchToProps = (dispatch) => ({
    getStudents: () => {

        dispatch(actionStudents.loadStudentsAll());
    },
    updateStudent: (values) => {
        dispatch(actionStudents.updateStudent(values));
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(ListAsignatura)
