import React, { Suspense, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { actions as actionStudents, selectors as selectorStudents } from "store/reducers/students"
import { actions as actionLogin, selectors as selectorLogin } from "store/reducers/login"
import { Table, Divider, Tag, Card, Button, notification } from 'antd';
import Loading from 'components/shared-components/Loading';
import { ModalStudents } from './ModalEditStudent';
import { EditOutlined, DeleteOutlined, CloseCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';


export const ListStudents = ({ getStudents, updateStudent, dataStudents, isFetching, cursos, deleteData, statusDelete }) => {
    const [showModal, setShowModal] = useState(false)
    const [item, setItem] = useState(null)
    const columns = [
        {
            title: 'Curso',
            dataIndex: 'curso',
            key: 'curso'
        },
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
                    <EditOutlined onClick={() => { cargarEstudiante(record) }} />
                    <Divider type="vertical" />
                    <DeleteOutlined onClick={() => { eliminarEstudiante(record) }} style={{ color: "red" }} />
                </span>
            ),
        },
    ];
    useEffect(() => {
        getStudents()
    }, [])
    useEffect(() => {
        if (statusDelete === "ERROR") {
            notification.open({
                message: 'Error al eliminar este estudiante',
                description:
                    'Este estudiante tiene asistencias registradas por lo cual no puede ser eliminado, contacte con el Administrador',
                icon: <CloseCircleOutlined style={{ color: 'red' }} />,
            });
        }
        if (statusDelete === "ELIMINADO") {
            notification.open({
                message: 'Eliminado correctamente',
                description:
                    'Se elimino el estudiante de forma exitosa!',
                icon: <CheckCircleOutlined style={{ color: '#108ee9' }} />,
            });
            getStudents()
        }
    }, [statusDelete])
    const cargarEstudiante = (data) => {
        setItem(data);
        setShowModal(!showModal)
    }
    const eliminarEstudiante = (data) => {
        deleteData("estudiantes", "idEstudiante", data.idEstudiante);
    }
    return (
        <>
            <Card loading={isFetching}>
                <Table columns={columns} dataSource={dataStudents} />
            </Card>
            {item && <ModalStudents cursos={cursos} item={item} setItem={setItem} updateStudent={updateStudent} showModal={showModal} setShowModal={setShowModal} />}
        </>
    )
}

const mapStateToProps = (state) => ({
    dataStudents: selectorStudents.getDataStudents(state),
    isFetching: selectorStudents.getFetching(state),
    statusDelete: selectorLogin.getStatusDelete(state),
})
const mapDispatchToProps = (dispatch) => ({
    getStudents: () => {
        dispatch(actionStudents.loadStudentsAll());
    },
    updateStudent: (values) => {
        dispatch(actionStudents.updateStudent(values));
    },
    deleteData: (tabla, campo, id) => {
        dispatch(actionLogin.deleteData(tabla, campo, id));
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(ListStudents)
