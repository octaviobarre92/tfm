import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { actions as actionLogin, selectors as selectorLogin } from "store/reducers/login"


export const Teachers = ({goDashboard, dataUser}) => {
  useEffect(()=>{
    goDashboard()
  },[])
  return (
    <>  
      Teachers
    </>
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
export default connect(mapStateToProps, mapDispatchToProps)(Teachers)
