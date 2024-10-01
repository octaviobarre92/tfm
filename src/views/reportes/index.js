import { Button, Card, Col, Form, Input, Radio, Row, Select, Table, notification } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { actions as actionLogin, selectors as selectorLogin } from "store/reducers/login"
import { actions as actionCourse, selectors as selectorCourse } from "store/reducers/course"
import { DatePicker } from 'antd';
import { EditOutlined, DeleteOutlined, CloseCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import moment from 'moment';
import ModalReportes from './ModalReportes';
import { actions as actionsTeacher, selectors as selectorTeacher } from "store/reducers/teachers"

const { RangePicker } = DatePicker;

export const Reportes = ({ dataTeacher, isFetchingTeacher, getTeachers, GetAsistenciaPorEstudiante, dataAsistencias, fetchingAsistencias, fetching, callCourse, cursos, asignaturas, callAsignatura, estudiantes, callStudents, fetchingcursos, fetchingasignaturas, fetchingestudiantes, guardarAsistencia }) => {
    let dataUser = JSON.parse(atob(localStorage.getItem("auth_token")))

    const { Option } = Select;
    const [componentSize, setComponentSize] = useState('small');
    const [hora, sethora] = useState(null);
    const [teacherId, setteacherId] = useState(dataUser["TIPO_USER"] === "TEACHER" && dataUser["ID_USER"] || null);
    const [cursoId, setcursoId] = useState(null);
    const [asignaturaId, setasignaturaId] = useState(null);
    const [curso, setcurso] = useState(false);
    const [showModal, setshowModal] = useState(false);
    const [estudianteSelect, setestudianteSelect] = useState(null);
    const [estudiantesData, setestudiantesData] = useState([]);
    const [asistencia, setasistencia] = useState([]);
    const formRef = useRef(null);
    useEffect(() => {
        getTeachers();
        if (dataUser["TIPO_USER"] === "TEACHER") {
            callCourse(dataUser["ID_USER"])
        }
    }, [])


    useEffect(() => {
        setestudiantesData(estudiantes)
    }, [estudiantes])
    const changeCourse = (id) => {
        setcurso(true);
        callAsignatura(id, teacherId);
        setcursoId(id)
    }
    const changeAsignatura = (id) => {
        setcurso(true);
        callStudents(id, teacherId);
        setasignaturaId(id)
    }
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    const onSubmit = values => {

    };

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
            title: '',
            key: 'action',
            render: (text, record) => (
                <>
                    <Button name={record.idEstudiante} id={record.idEstudiante} onClick={() => { viewDetails(record) }} type='default' >Ver detalle</Button>
                </>
            )
        }
    ];

    const viewDetails = (data) => {
        GetAsistenciaPorEstudiante(data)
        setshowModal(true)
        setestudianteSelect(data)
    }
    function onChange(value, dateString) {

    }
    function onOk(value) {
        sethora(`${value[0]["$H"]}:${value[0]["$m"]} - ${value[1]["$H"]}:${value[1]["$m"]}`)
    }
    const guardar = () => {
        if (hora && cursoId && asignaturaId) {
            let data = [];
            for (let i = 0; i < (estudiantes.length - 1); i++) {
                let otherData = asistencia.find((x) => x.idEstudiante === estudiantes[i].idEstudiante);
                if (!otherData) {
                    data.push(estudiantes[i])
                }
            }

            if (data.length > 0) {
                for (let j = 0; j < (data.length); j++) {
                    data[j]["comentario"] = document.getElementById(data[j].idEstudiante).value;
                }
            }
            let dataSendAsistencia = [...asistencia, ...data];
            let sendData = { fecha: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"), fkCursoAsistencia: asignaturaId, hora: hora, registros: JSON.stringify(dataSendAsistencia) }
            guardarAsistencia(sendData)
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
            <Card loading={fetching} title={`Estimado usuario ${dataUser.PRI_NOM_USER} ${dataUser.PRIM_APE_USER} seleccione el profesor, curso y asignatura`} bordered={false} style={{ width: "100%" }}>
                <Row>
                    <Col lg={6}>
                        <b>Profesor</b> <br />
                        <Select
                            showSearch
                            loading={isFetchingTeacher}
                            style={{ width: 300 }}
                            placeholder="Seleccione Materia"
                            optionFilterProp="children"
                            defaultValue={dataUser["TIPO_USER"] === "TEACHER" && dataUser["ID_USER"]}
                            onChange={(e) => {
                                callCourse(e);
                                setteacherId(e)
                            }}
                            filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {dataTeacher.map((item) => (
                                <Option value={item.id}>{`${item.cedula} - ${item.primer_nombre} ${item.primer_apellido}`}</Option>
                            ))}
                        </Select>
                    </Col>
                    <Col lg={6}>
                        <b>Curso</b> <br />
                        {cursos && cursos.length > 0 && <Select
                            showSearch
                            disabled={cursos && cursos.length === 0}
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
                        </Select>}
                    </Col>
                    <Col lg={6}>
                        <b>Asignatura</b>  <br />

                        {asignaturas && asignaturas.length > 0 && <Select
                            showSearch
                            disabled={asignaturas && asignaturas.length === 0}
                            loading={fetchingasignaturas}
                            style={{ width: 300 }}
                            placeholder="Seleccione una asignatura"
                            optionFilterProp="children"
                            onChange={(e) => {
                                changeAsignatura(e);
                            }}
                            filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {asignaturas.map((item) => (
                                <Option value={item.idAsignatura}>{`${item.nombre}`}</Option>
                            ))}
                        </Select>}
                    </Col>
                </Row>


            </Card>
            <Card loading={fetchingestudiantes || fetching}>
                <Table
                    size="small"
                    pagination={false}
                    columns={columns}
                    dataSource={estudiantesData}
                />
            </Card>
            <ModalReportes dataAsistencias={dataAsistencias} asignaturas={asignaturas} estudianteSelect={estudianteSelect} asignaturaId={asignaturaId} showModal={showModal} setshowModal={setshowModal} />
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
    dataAsistencias: selectorCourse.getAsistencias(state),
    fetchingAsistencias: selectorCourse.getFetchingAsistencia(state),
    dataTeacher: selectorTeacher.getDataTeachers(state),
    isFetchingTeacher: selectorTeacher.getFetching(state)
})
const mapDispatchToProps = (dispatch) => ({
    GetAsistenciaPorEstudiante: (data) => {
        dispatch(actionCourse.GetAsistenciaPorEstudiante(data));
    },
    getTeachers: () => {
        dispatch(actionsTeacher.loadTeachersAll());
    },
    callCourse: (idTeacher) => {
        dispatch(actionCourse.GetCourseWithTeacher(idTeacher));
    },
    callAsignatura: (curso, teacherId) => {
        dispatch(actionCourse.GetAsignaturaWithCurso(curso, teacherId));
    },
    callStudents: (asignatura, teacherId) => {
        dispatch(actionCourse.GetStudentsWithAsignatura(asignatura, teacherId));
    },
    guardarAsistencia: (dataAsistencia) => {
        dispatch(actionCourse.sendAsistencia(dataAsistencia));
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Reportes)
