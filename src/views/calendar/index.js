import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { actions as actionLogin, selectors as selectorLogin } from "store/reducers/login"


export const Students = ({goDashboard, dataUser}) => {
  useEffect(()=>{
    goDashboard()
  },[])
  console.log("dataUser",dataUser);
  return (
    <>  
      Dashboard
    </>
  )
}

const mapStateToProps = (state) => ({
  dataUser: selectorLogin.getDataUser(state),
})
const mapDispatchToProps = (dispatch) => ({
  goDashboard: () => {
      
      dispatch(actionLogin.login("email", "password", ()=>{}));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Students)
