import { Button, Card, Col, Form, Input, Radio, Row, Select, Table, notification } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { actions as actionLogin, selectors as selectorLogin } from "store/reducers/login"
import { actions as actionCourse, selectors as selectorCourse } from "store/reducers/course"
import { DatePicker } from 'antd';
import { EditOutlined, DeleteOutlined, CloseCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import moment from 'moment';

const { RangePicker } = DatePicker;
export const Asistencias = ({ fetching, callCourse, cursos, asignaturas, callAsignatura, estudiantes, callStudents, fetchingcursos, fetchingasignaturas, fetchingestudiantes, guardarAsistencia }) => {
    const { Option } = Select;
    const [componentSize, setComponentSize] = useState('small');
    const [hora, sethora] = useState(null);
    const [cursoId, setcursoId] = useState(null);
    const [asignaturaId, setasignaturaId] = useState(null);
    const [curso, setcurso] = useState(false);
    const [estudiantesData, setestudiantesData] = useState([]);
    const [asistencia, setasistencia] = useState([]);
    const formRef = useRef(null);

    useEffect(() => {
        callCourse()
        setestudiantesData([])
    }, [])
    useEffect(() => {
        if (estudiantes.length > 0) {
            let newData = [];
            for (let i = 0; i < estudiantes.length; i++) {
                estudiantes[i]["key"] = i + 1;
                estudiantes[i]["estadoAsistencia"] = 0;
                newData.push(estudiantes[i])
            }
            setestudiantesData(newData)
        }
    }, [estudiantes])
    const changeCourse = (id) => {
        setcurso(true);
        callAsignatura(id);
        setcursoId(id)
    }
    const changeAsignatura = (id) => {
        setcurso(true);
        callStudents(id);
        setasignaturaId(id)
    }
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    const onSubmit = values => {

    };

    let dataUser = JSON.parse(atob(localStorage.getItem("auth_token")))
    const columns = [
        {
            title: 'Cedula',
            dataIndex: 'cedula',
        },
        {
            title: 'Primer Nombre',
            dataIndex: 'primer_nombre',
        },
        {
            title: 'Segundo Nombre',
            dataIndex: 'segundo_nombre',
        },
        {
            title: 'Apellido',
            dataIndex: 'primer_apellido',
        },
        {
            title: 'Segundo Apellido',
            dataIndex: 'segundo_apellido',
        },
        {
            title: 'Correo',
            dataIndex: 'correo_estudiante',
        },
        {
            title: 'Representante',
            dataIndex: 'representante',
        },
        {
            title: 'Comentario',
            key: 'action',
            render: (text, record) => (
                <>
                    <Input name={record.idEstudiante} id={record.idEstudiante} />
                </>
            )
        }
    ];
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            let data = selectedRows;
            for (let i = 0; i < data.length - 1; i++) {
                data[i]["comentario"] = "";
            }
            setasistencia(data)
        },
        getCheckboxProps: (record) => {
            return {
                name: record.cedula,
            }
        },
    };
    function onChange(value, dateString) {

    }
    function onOk(value) {
        sethora(`${value[0]["$H"]}:${value[0]["$m"]} - ${value[1]["$H"]}:${value[1]["$m"]}`)
    }
    const guardar = () => {
        if (hora && cursoId && asignaturaId) {
            let data = [];
            for (let i = 0; i < (estudiantesData.length); i++) {
                let otherData = asistencia.find((x) => x.idEstudiante === estudiantesData[i].idEstudiante);
                if (!otherData) {
                    data.push(estudiantesData[i])
                }
            }
            if (data.length > 0) {
                for (let j = 0; j < (data.length); j++) {
                    data[j]["comentario"] = document.getElementById(data[j].idEstudiante).value;
                    data[j]["estadoAsistencia"] = 1
                }
            }
            let dataSendAsistencia = [...asistencia, ...data];
            let sendData = { fecha: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"), fkCursoAsistencia: asignaturaId, hora: hora, registros: JSON.stringify(dataSendAsistencia) }
            guardarAsistencia(sendData)
            setestudiantesData([])
        } else {
            notification.open({
                message: 'Faltan datos',
                description:
                    'Por favor ingrese todos los datos para poder registrar la asistencia',
                icon: <CloseCircleOutlined style={{ color: 'red' }} />,
            });
        }
    }
    return (
        <div>
            <Card loading={fetching} title={`Estimado docente ${dataUser.PRI_NOM_USER} ${dataUser.PRIM_APE_USER} seleccione su curso y asignatura`} bordered={false} style={{ width: "100%" }}>
                <Row>
                    <Col lg={6}>
                        <b>Curso</b> <br />
                        <Select
                            showSearch
                            loading={fetchingcursos}
                            style={{ width: 300 }}
                            placeholder="Seleccione Materia"
                            optionFilterProp="children"
                            onChange={(e) => { changeCourse(e); }}
                            filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {cursos.map((item) => (
                                <Option value={item.idCurso}>{`${item.nombre} - ${item.paralelo}`}</Option>
                            ))}
                        </Select>
                    </Col>
                    <Col lg={6}>
                        <b>Asignatura</b>  <br />
                        <Select
                            showSearch
                            loading={fetchingasignaturas}
                            style={{ width: 300 }}
                            placeholder="Seleccione una asignatura"
                            optionFilterProp="children"
                            onChange={(e) => { changeAsignatura(e); }}
                            filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {asignaturas.map((item) => (
                                <Option value={item.idAsignatura}>{`${item.nombre}`}</Option>
                            ))}
                        </Select>
                    </Col>
                    <Col lg={6}>
                        <b>Hora de clases</b>  <br />
                        <RangePicker
                            showTime={{ format: 'HH:mm' }}
                            format="HH:mm"
                            placeholder={['Hora inicio', 'Hora fin']}
                            onChange={onChange}
                            onOk={onOk}
                        />
                    </Col>
                    <Col lg={6}>
                        <br />
                        <Button onClick={() => { guardar() }} type='primary' >Guardar Asistencia</Button>
                    </Col>
                </Row>


            </Card>
            <Card loading={fetchingestudiantes || fetching}>
                <Table
                    rowSelection={{
                        type: "checkbox",
                        ...rowSelection,
                    }}
                    size="small"
                    pagination={false}
                    columns={columns}
                    dataSource={estudiantesData}
                />
            </Card>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cursos: selectorCourse.getcursos(state),
    asignaturas: selectorCourse.getasignaturas(state),
    estudiantes: selectorCourse.getestudiantes(state),
    fetching: selectorCourse.getFetching(state),
    fetchingcursos: selectorCourse.getFetchingcursos(state),
    fetchingasignaturas: selectorCourse.getFetchingasignaturas(state),
    fetchingestudiantes: selectorCourse.getFetchingestudiantes(state),
})
const mapDispatchToProps = (dispatch) => ({
    callCourse: () => {
        dispatch(actionCourse.GetCourseWithTeacher());
    },
    callAsignatura: (curso) => {
        dispatch(actionCourse.GetAsignaturaWithCurso(curso));
    },
    callStudents: (asignatura) => {
        dispatch(actionCourse.GetStudentsWithAsignatura(asignatura));
    },
    guardarAsistencia: (dataAsistencia) => {
        dispatch(actionCourse.sendAsistencia(dataAsistencia));
        notification.open({
            message: 'Exitoso!',
            description:
                'Asistencias registradas de forma exitosa!',
            icon: <CheckCircleOutlined style={{ color: '#108ee9' }} />,
        });
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Asistencias)
