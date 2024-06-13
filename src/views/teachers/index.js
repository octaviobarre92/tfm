import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import ListTeachers from "./_components/ListTeachers";
import {Card, Radio} from "antd";
import FormTeachers from "./_components/FormTeacher";
import {actions as actionTeachers} from "store/reducers/teachers"

export const Teachers = ({saveTeachers}) => {
    const [mode, setMode] = useState('registro');

    useEffect(() => {
    }, [])

    const handleModeChange = (e) => {
        setMode(e.target.value);
    };

    return (
        <>
            <Card title="Profesores" bordered={false} style={{width: "100%"}}>
                <Radio.Group
                    onChange={handleModeChange}
                    value={mode}
                    style={{
                        marginBottom: 8,
                    }}
                >
                    <Radio.Button value="registro">Registro</Radio.Button>
                    <Radio.Button value="list">Listado</Radio.Button>
                </Radio.Group>
                {mode === "registro" && <FormTeachers submitTeacher={saveTeachers}/>}
                {mode === "list" && <ListTeachers/>}
            </Card>
        </>
    )
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({
    saveTeachers: (teacher) => {
        dispatch(actionTeachers.saveTeachers(teacher))
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Teachers)
