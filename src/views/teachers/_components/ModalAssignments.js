import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {actions as actionsAssignment, selectors as selectorAssignment} from "store/reducers/assignments"
import {Alert, Button, Card, Modal, Popconfirm, Select, Table} from "antd";
import {motion} from "framer-motion";

const ModalAssignments = ({
                              getCoursesWithAssignments,
                              dataCourseWithAssignments,
                              isFetching,
                              showModal,
                              setShowModal,
                              assignment,
                              setAssignment,
                              getAllSubjects,
                              getSelectedSubjects,
                              dataSelectedSubjects,
                              dataAllSubjects,
                              isFetchingSubjects,
                              saveAssignmentSubject,
                              deleteAssignmentSubject,
                              saveAssignmentCourse,
                              deleteAssignmentCourse
                          }) => {
    const [course, setCourse] = useState(null)
    const [alertConfirm, setAlertConfirm] = useState({showMessage: false, message: null, type: null})

    const columns = [
        {
            title: 'Curso',
            dataIndex: 'course',
            key: 'course'
        },
        {
            title: 'Paralelo',
            dataIndex: 'parallel',
            key: 'parallel',
        },
        {
            title: 'Estado',
            dataIndex: 'status',
            key: 'status',
            render: (text, record) => (
                <>
                    {!record.idAssignment && <span
                        onClick={() => {
                            assignmentCourse(assignment.id, record.id)
                        }}
                        className={'badge-success'}>{'Asignar'}</span>}
                    {record.idAssignment && <Popconfirm
                        placement="left"
                        title="Desea eliminar esta asignación?"
                        description="Al eliminar esta asignacion, las materias relacionadas a este profesor para este curso van a ser borradas."
                        onConfirm={() => confirmDeleteAssignment(record.idAssignment)}
                        okText="Aceptar"
                        cancelText="Cancelar"
                    >
                        <span className={'badge-danger'}>{'Quitar'}</span>
                    </Popconfirm>}
                </>
            )
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Button disabled={!record.idAssignment} onClick={() => {
                    selectingCourse(record)
                }}>Asignar materias</Button>
            ),
        },
    ];

    useEffect(() => {
        if (assignment?.id) {
            getCoursesWithAssignments(assignment.id);
            getAllSubjects();
        }

        if (alertConfirm.showMessage) {
            const timer = setTimeout(() => hideAuthMessage(), 3000)
            return () => {
                clearTimeout(timer);
            };
        }
    }, []);
    const handleSelectedSubjects = (currentSubject) => {
        const subjectId = dataAllSubjects.find(({value}) => value === currentSubject).id
        saveAssignmentSubject(subjectId, course.idAssignment)

        getSelectedSubjects(assignment.id, course.id)
        setAlertConfirm({showMessage: true, message: "Materia asignada", type: 'success'})
    }
    const handleDeselectedSubjects = (currentSubject) => {
        const subjectId = dataAllSubjects.find(({value}) => value === currentSubject).id
        deleteAssignmentSubject(subjectId, course.id)

        getSelectedSubjects(assignment.id, course.id)
        setAlertConfirm({showMessage: true, message: "Materia removida", type: 'success'})
    }

    const hideModal = () => {
        setAssignment(null);
        setShowModal(false)
    }

    const selectingCourse = (course) => {
        setCourse(course)
        getSelectedSubjects(assignment.id, course.id)
    }

    const hideAuthMessage = () => {
        setAlertConfirm({showMessage: false, message: null, type: null})
    }

    const assignmentCourse = (userId, courseId) => {
        saveAssignmentCourse(userId, courseId)
        getCoursesWithAssignments(assignment.id);
    }

    const confirmDeleteAssignment = (idAssignment) => {
        deleteAssignmentCourse(idAssignment)
    }

    return (
        <Modal
            title="Asignaciones de cursos y asignaturas"
            open={showModal}
            width="75%"
            onOk={() => {
                hideModal()
            }}
            onCancel={() => {
                hideModal()
            }}
        >
            {alertConfirm.showMessage && <motion.div
                initial={{opacity: 0, marginBottom: 0}}
                animate={{
                    opacity: alertConfirm.showMessage ? 1 : 0,
                    marginBottom: alertConfirm.showMessage ? 20 : 0
                }}>
                <Alert type={alertConfirm.type} showIcon message={alertConfirm.message}></Alert>
            </motion.div>}
            <div className="container-assignments">
                <Card loading={isFetching}>
                    <Table columns={columns} dataSource={dataCourseWithAssignments}/>
                </Card>
                {
                    course && <Card>
                        <div className="layout-subjects">
                            <b className="title-subject">Asignaturas asignadas | {course.course} {course.parallel}</b>
                            <Select
                                loading={isFetchingSubjects}
                                mode="multiple"
                                size="large"
                                placeholder="Seleccione las asignaturas"
                                value={dataSelectedSubjects}
                                onSelect={handleSelectedSubjects}
                                onDeselect={handleDeselectedSubjects}
                                style={{
                                    width: '100%',
                                }}
                                options={dataAllSubjects}
                            />
                        </div>
                    </Card>
                }
            </div>
        </Modal>
    )
}

const mapStateToProps = (state) => ({
    dataCourseWithAssignments: selectorAssignment.loadAllCoursesWithAssignments(state),
    dataAllSubjects: selectorAssignment.loadAllSubjects(state),
    dataSelectedSubjects: selectorAssignment.loadSelectedSubjects(state),
    isFetching: selectorAssignment.getFetching(state),
    isFetchingSubjects: selectorAssignment.getFetchingSubjects(state)
})
const mapDispatchToProps = (dispatch) => ({
    getCoursesWithAssignments: (userId) => {
        dispatch(actionsAssignment.loadAllCoursesWithAssignments(userId));
    },
    getAllSubjects: () => {
        dispatch(actionsAssignment.loadAllSubjects());
    },
    getSelectedSubjects: (userId, courseId) => {
        dispatch(actionsAssignment.loadSelectedSubjects(userId, courseId));
    },
    saveAssignmentSubject: (subjectId, idAssignment) => {
        dispatch(actionsAssignment.saveAssignmentSubject(subjectId, idAssignment));
    },
    saveAssignmentCourse: (userId, courseId) => {
        dispatch(actionsAssignment.saveAssignmentCourse(userId, courseId));
    },
    deleteAssignmentSubject: (subjectId, courseId) => {
        dispatch(actionsAssignment.deleteAssignmentSubject(subjectId, courseId));
    },
    deleteAssignmentCourse: (idAssignment) => {
        dispatch(actionsAssignment.deleteAssignmentCourse(idAssignment));
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(ModalAssignments)
