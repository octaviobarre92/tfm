import { Card, Radio } from 'antd';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { actions as actionLogin, selectors as selectorLogin } from "store/reducers/login"
import ListCurso  from './_components/Cursos';
import ListAsignatura  from './_components/Asignatura';


export const GestionCurso = ({ goDashboard, dataUser }) => {
  const [mode, setMode] = useState('curso');
  const [componentSize, setComponentSize] = useState('small');

  const handleModeChange = (e) => {
    setMode(e.target.value);
  };
  useEffect(() => {
    goDashboard()
  }, [])
  return (
    <div>
      <Card title="Gestion de cursos" bordered={false} style={{ width: "100%" }}>
        <Radio.Group
          onChange={handleModeChange}
          value={mode}
          style={{
            marginBottom: 8,
          }}
        >
          <Radio.Button value="curso">Cursos</Radio.Button>
          <Radio.Button value="asignatura">Asignaturas</Radio.Button>
        </Radio.Group>
        {mode === "curso" && <ListCurso />}
        {mode === "asignatura" && <ListAsignatura />}

      </Card>
    </div>
  )
}

const mapStateToProps = (state) => ({
  dataUser: selectorLogin.getDataUser(state),
})
const mapDispatchToProps = (dispatch) => ({
  goDashboard: () => {

    // dispatch(actionLogin.login("email", "password", ()=>{}));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(GestionCurso)
