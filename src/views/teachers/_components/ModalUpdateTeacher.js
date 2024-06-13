import {Card, Modal} from 'antd';
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import FormTeachers from "./FormTeacher";
import {actions as actionTeachers} from "../../../store/reducers/teachers";


const ModalUpdateTeacher = ({updateTeacher, item, setItem, showModal, setShowModal}) => {
    const [formSubmitRef, setFormSubmitRef] = useState(null);
    useEffect(() => {
    }, [])


    return (
        <>
            <Modal
                title="Actualizacion de profesor"
                open={showModal}
                width="60%"
                okText="Actualizar"
                onOk={() => {
                    formSubmitRef.current.submit()
                }}
                onCancel={() => {
                    setItem(null);
                    setShowModal(false)
                }}
                cancelText="Cancelar"
            >
                <Card loading={!item}>
                    <FormTeachers submitTeacher={updateTeacher} item={item} setFormSubmitRef={setFormSubmitRef}/>
                </Card>
            </Modal>
        </>
    )
}


const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch, {setItem, setShowModal}) => ({
    updateTeacher: (teacher) => {
        dispatch(actionTeachers.updateTeacher(teacher))
        setItem(null);
        setShowModal(false)
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(ModalUpdateTeacher)
