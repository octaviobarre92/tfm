import { Button, Card, DatePicker, Form, Input, Modal, Select, Table, notification } from 'antd';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { actions as actionStudents, selectors as selectorStudents } from "store/reducers/students"
import { CloseCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';



export const ModalReportes = ({ estudianteSelect, asignaturaId, asignaturas, dataAsistencias, showModal, setshowModal }) => {
    const [componentSize, setComponentSize] = useState('small');
    const columns = [
        {
            title: 'Fecha de asistencia',
            dataIndex: 'fechaCreacion',
        },
        {
            title: 'Hora',
            dataIndex: 'hora',
        },
        {
            title: 'Comentario',
            dataIndex: 'comentario',
        },
        {
            title: 'Asistencia',
            render: (text, record) => (
                <>
                    <p style={{ backgroundColor: record.estadoAsistencia === 0 ? "green" : "red", color: "white", textAlign: "center", borderRadius: "8px" }} >{record.estadoAsistencia === 0 ? "Asistió" : "Inasistió"}</p>
                </>
            )
        }
    ]
    if (estudianteSelect && asignaturas.length === 0) {
        return null;
    }
    return (
        <>
            <Modal
                title={<b>Asistencias de la asignatura {asignaturas.length > 0 && asignaturaId ? asignaturas.find((x) => x.idAsignatura === asignaturaId)?.nombre : null} <br />
                    <p>Estudiante {estudianteSelect && (estudianteSelect.primer_nombre + " " + estudianteSelect.segundo_apellido + " - " + estudianteSelect.cedula)}</p></b>}
                open={showModal}
                width="60%"
                okText="Aceptar"
                onOk={() => { setshowModal(!showModal) }}
                onCancel={() => { setshowModal(!showModal) }}
                cancelText="Cancelar"
            >
                <Card loading={false}>
                    <Table
                        size="small"
                        pagination={false}
                        columns={columns}
                        dataSource={dataAsistencias}
                    />
                </Card>
            </Modal >
        </>
    )
}


export default ModalReportes
