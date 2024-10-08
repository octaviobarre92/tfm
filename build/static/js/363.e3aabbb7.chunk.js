"use strict";(self.webpackChunkemilus=self.webpackChunkemilus||[]).push([[363],{4363:function(e,s,n){n.r(s),n.d(s,{Teachers:function(){return F},default:function(){return M}});var t=n(9439),i=n(2791),a=n(364),r=n(1167),o=n(4644),l=n(1082),c=n(2385),u=n(4378),d=n(5761),m=n(1990),g=n(1413),h=n(6090),f=n(7615),p=n(2835),j=n(2014),x=n(6106),v=n(7309),b=n(1532),S=n(8944),A=n(184),w={wrapperCol:{offset:4,span:16}},Z=(0,a.$j)((function(e){return{}}),(function(e){return{}}))((function(e){var s=e.item,n=e.submitTeacher,a=e.setFormSubmitRef,r=(0,i.useRef)(null),o=(0,i.useState)("small"),l=(0,t.Z)(o,2),c=l[0],u=l[1],d=(0,i.useState)(null),m=(0,t.Z)(d,2),Z=m[0],y=m[1],C=(0,i.useState)(!1),k=(0,t.Z)(C,2),_=k[0],T=k[1];(0,i.useEffect)((function(){y(null===s||void 0===s?void 0:s.imgSecurity),a&&a(r)}),[s,r]);var N=function(e){y(e)};return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(f.Z,{ref:r,labelCol:{span:4},wrapperCol:{span:14},layout:"horizontal",initialValues:(0,g.Z)((0,g.Z)({},s),{},{size:c}),onValuesChange:function(e){var s=e.size;u(s)},size:c,onFinish:function(e){var t,i=(null!==s&&void 0!==s?s:{}).id;null!==Z?(n((0,g.Z)((0,g.Z)({},e),{},{id:i,imgSecurity:Z})),null===(t=r.current)||void 0===t||t.resetFields(),y(null),h.Z.open({message:"Exitoso!",description:"Estudiante actualizado correctamente, puedes visualizarlo en el apartado de Listado",icon:(0,A.jsx)(S.Z,{style:{color:"#108ee9"}})})):h.Z.open({message:"Error!",description:"Seleccione una imagen de seguridad para el inicio de sesi\xf3n",icon:(0,A.jsx)(b.Z,{style:{color:"red"}})})},children:[(0,A.jsx)(f.Z.Item,{rules:[{required:!0,message:"Por favor ingrese un n\xfamero de c\xe9dula"},{message:"Por favor ingrese un n\xfamero de c\xe9dula v\xe1lido",pattern:new RegExp("^[0-9]*$")}],name:"cedula",label:"Cedula",children:(0,A.jsx)(p.Z,{})}),(0,A.jsx)(f.Z.Item,{rules:[{required:!0,message:"Por favor ingrese el primer nombre del profesor"}],name:"primer_nombre",label:"Primer Nombre",children:(0,A.jsx)(p.Z,{})}),(0,A.jsx)(f.Z.Item,{rules:[{required:!0,message:"Por favor ingrese el segundo nombre del profesor"}],name:"segundo_nombre",label:"Segundo Nombre",children:(0,A.jsx)(p.Z,{})}),(0,A.jsx)(f.Z.Item,{rules:[{required:!0,message:"Por favor ingrese el primer apellido del profesor"}],name:"primer_apellido",label:"Primer Apellido",children:(0,A.jsx)(p.Z,{})}),(0,A.jsx)(f.Z.Item,{rules:[{required:!0,message:"Por favor ingrese el segundo apellido del profesor"}],name:"segundo_apellido",label:"Segundo Apellido",children:(0,A.jsx)(p.Z,{})}),(0,A.jsx)(f.Z.Item,{rules:[{required:!0,message:"Por favor ingrese el correo electr\xf3nico del representante"},{type:"email",message:"Ingrese un correo electr\xf3nico valido!"}],name:"correo",label:"Correo",children:(0,A.jsx)(p.Z,{})}),s&&(0,A.jsx)(f.Z.Item,{rules:[{required:!0,message:"Por favor ingrese el segundo apellido del profesor"}],name:"intentosImagen",label:"Intentos",children:(0,A.jsx)(p.Z,{})}),(0,A.jsx)(f.Z.Item,{rules:[{required:_,message:"Por favor ingrese una contrase\xf1a."}],name:"password",label:"Contrase\xf1a",children:(0,A.jsx)(p.Z.Password,{disabled:!_})}),(0,A.jsx)(f.Z.Item,(0,g.Z)((0,g.Z)({},w),{},{children:(0,A.jsx)(j.Z,{onClick:function(){r.current.setFieldValue("password",""),T(!_)},children:"Cambiar contrase\xf1a?"})})),(0,A.jsx)(f.Z.Item,{children:(0,A.jsxs)(x.Z,{children:[(0,A.jsx)("div",{onClick:function(){N(0)},className:"container_image_security ".concat(0===Z?"img-security-selected":""),children:(0,A.jsx)("img",{width:50,height:"auto",src:"https://static.vecteezy.com/system/resources/previews/013/452/430/original/illustration-of-tree-free-png.png",alt:"image_security_arbol"})}),(0,A.jsx)("div",{onClick:function(){N(1)},className:"container_image_security ".concat(1===Z?"img-security-selected":""),children:(0,A.jsx)("img",{width:50,height:"auto",src:"https://i.pinimg.com/originals/06/49/66/06496628fa77e5980783eba02524204f.png",alt:"image_security_bus"})}),(0,A.jsx)("div",{onClick:function(){N(2)},className:"container_image_security ".concat(2===Z?"img-security-selected":""),children:(0,A.jsx)("img",{width:50,height:"auto",src:"https://images.vexels.me/media/users/3/140072/isolated/preview/02bac95a04a65600a095ae5948d87756-dog-cartoon.png",alt:"image_security_perro"})}),(0,A.jsx)("div",{onClick:function(){N(3)},className:"container_image_security ".concat(3===Z?"img-security-selected":""),children:(0,A.jsx)("img",{width:50,height:"auto",src:"https://images.vexels.com/media/users/3/182678/isolated/preview/7ea4faa0bcd9705ce266e7769d01318d-barco-dibujado-a-mano.png",alt:"image_security_barco"})}),(0,A.jsx)("div",{onClick:function(){N(4)},className:"container_image_security ".concat(4===Z?"img-security-selected":""),children:(0,A.jsx)("img",{width:50,height:"auto",src:"https://static.vecteezy.com/system/resources/previews/011/651/357/original/doodle-freehand-sketch-drawing-of-flower-free-png.png",alt:"image_security_rosa"})}),(0,A.jsx)("div",{onClick:function(){N(5)},className:"container_image_security ".concat(5===Z?"img-security-selected":""),children:(0,A.jsx)("img",{width:50,height:"auto",src:"https://cdn-icons-png.freepik.com/512/2038/2038263.png",alt:"image_security_edificio"})})]})}),!s&&(0,A.jsx)(f.Z.Item,{children:(0,A.jsx)(v.ZP,{type:"primary",htmlType:"submit",children:"Guardar profesor"})})]})})})),y=(0,a.$j)((function(e){return{}}),(function(e,s){var n=s.setItem,t=s.setShowModal;return{updateTeacher:function(s){e(r.Nw.updateTeacher(s)),n(null),t(!1)}}}))((function(e){var s=e.updateTeacher,n=e.item,a=e.setItem,r=e.showModal,o=e.setShowModal,l=(0,i.useState)(null),c=(0,t.Z)(l,2),d=c[0],g=c[1];return(0,i.useEffect)((function(){}),[]),(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(m.Z,{title:"Actualizacion de profesor",open:r,width:"60%",okText:"Actualizar",onOk:function(){d.current.submit()},onCancel:function(){a(null),o(!1)},cancelText:"Cancelar",children:(0,A.jsx)(u.Z,{loading:!n,children:(0,A.jsx)(Z,{submitTeacher:s,item:n,setFormSubmitRef:g})})})})})),C=n(711),k=n(2964),_=n(2999),T=n(7476),N=(0,a.$j)((function(e){return{dataCourseWithAssignments:o.wl.loadAllCoursesWithAssignments(e),dataAllSubjects:o.wl.loadAllSubjects(e),dataSelectedSubjects:o.wl.loadSelectedSubjects(e),teacherSelectedAssignment:o.wl.teacherSelectedAssignment(e),courseSelectedAssignment:o.wl.courseSelectedAssignment(e),isFetching:o.wl.getFetching(e),isFetchingSubjects:o.wl.getFetchingSubjects(e)}}),(function(e){return{getCoursesWithAssignments:function(s){e(o.Nw.loadAllCoursesWithAssignments(s))},getAllSubjects:function(){e(o.Nw.loadAllSubjects())},getSelectedSubjects:function(s,n){e(o.Nw.loadSelectedSubjects(s,n))},saveAssignmentSubject:function(s,n){e(o.Nw.saveAssignmentSubject(s,n))},saveAssignmentCourse:function(s,n){e(o.Nw.saveAssignmentCourse(s,n))},deleteAssignmentSubject:function(s,n){e(o.Nw.deleteAssignmentSubject(s,n))},deleteAssignmentCourse:function(s){e(o.Nw.deleteAssignmentCourse(s))},saveTeacherSelectedAssignment:function(s){e(o.Nw.saveTeacherSelectedAssignment(s))},saveCourseSelectedAssignment:function(s){e(o.Nw.saveCourseSelectedAssignment(s))}}}))((function(e){var s=e.getCoursesWithAssignments,n=e.dataCourseWithAssignments,a=e.isFetching,r=e.showModalAssigment,o=e.setShowModalAssigment,c=e.getAllSubjects,g=e.getSelectedSubjects,h=e.dataSelectedSubjects,f=e.dataAllSubjects,p=e.isFetchingSubjects,j=e.saveAssignmentSubject,x=e.deleteAssignmentSubject,b=e.saveAssignmentCourse,S=e.deleteAssignmentCourse,w=e.saveTeacherSelectedAssignment,Z=e.teacherSelectedAssignment,y=e.saveCourseSelectedAssignment,C=e.courseSelectedAssignment,N=(0,i.useState)({showMessage:!1,message:null,type:null}),I=(0,t.Z)(N,2),P=I[0],F=I[1],M=[{title:"Curso",dataIndex:"course",key:"course"},{title:"Paralelo",dataIndex:"parallel",key:"parallel"},{title:"Estado",dataIndex:"status",key:"status",render:function(e,s){return(0,A.jsxs)(A.Fragment,{children:[!s.idAssignment&&(0,A.jsx)("span",{onClick:function(){R(Z.id,s.id)},className:"badge-success",children:"Asignar"}),s.idAssignment&&(0,A.jsx)(l.Z,{placement:"left",title:"Desea eliminar esta asignaci\xf3n?",description:"Al eliminar esta asignacion, las materias relacionadas a este profesor para este curso van a ser borradas.",onConfirm:function(){return W(s.idAssignment)},okText:"Aceptar",cancelText:"Cancelar",children:(0,A.jsx)("span",{className:"badge-danger",children:"Quitar"})})]})}},{title:"Action",key:"action",render:function(e,s){return(0,A.jsx)(v.ZP,{disabled:!s.idAssignment,onClick:function(){z(s)},children:"Asignar materias"})}}];(0,i.useEffect)((function(){if(null!==Z&&void 0!==Z&&Z.id&&(s(Z.id),c()),P.showMessage){var e=setTimeout((function(){return q()}),3e3);return function(){clearTimeout(e)}}}),[]);var E=function(){w(null),y(null),o(!1)},z=function(e){y(e),g(Z.id,e.id)},q=function(){F({showMessage:!1,message:null,type:null})},R=function(e,s){b(e,s)},W=function(e){e===C.idAssignment&&y(null),S(e)};return(0,A.jsxs)(m.Z,{title:"Asignaciones de cursos y asignaturas",open:r,width:"75%",onOk:function(){E()},onCancel:function(){E()},children:[P.showMessage&&(0,A.jsx)(T.ww.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:P.showMessage?1:0,marginBottom:P.showMessage?20:0},children:(0,A.jsx)(k.Z,{type:P.type,showIcon:!0,message:P.message})}),(0,A.jsxs)("div",{className:"container-assignments",children:[(0,A.jsx)(u.Z,{loading:a,children:(0,A.jsx)(d.Z,{columns:M,dataSource:n})}),C&&(0,A.jsx)(u.Z,{className:"h-100",children:(0,A.jsxs)("div",{className:"layout-subjects",children:[(0,A.jsxs)("b",{className:"title-subject",children:["Asignaturas asignadas | ",C.course," ",C.parallel]}),(0,A.jsx)(_.Z,{loading:p,mode:"multiple",size:"large",placeholder:"Seleccione las asignaturas",value:h,onSelect:function(e){var s=f.find((function(s){return s.value===e})).id;j(s,C.idAssignment),F({showMessage:!0,message:"Materia asignada",type:"success"})},onDeselect:function(e){var s=f.find((function(s){return s.value===e})).id;x(s,C.idAssignment),F({showMessage:!0,message:"Materia removida",type:"success"})},style:{width:"100%"},options:f})]})}),!C&&(0,A.jsx)("b",{children:"Seleccione un curso para asignar materias al profesor."})]})]})})),I=(0,a.$j)((function(e){return{dataTeacher:r.wl.getDataTeachers(e),isFetching:r.wl.getFetching(e)}}),(function(e){return{getTeachers:function(){e(r.Nw.loadTeachersAll())},deleteTeacher:function(s){e(r.Nw.deleteTeachers(s))},saveTeacherSelectedAssignment:function(s){e(o.Nw.saveTeacherSelectedAssignment(s))}}}))((function(e){var s=e.dataTeacher,n=e.isFetching,a=e.getTeachers,r=e.deleteTeacher,o=e.saveTeacherSelectedAssignment,m=(0,i.useState)(!1),g=(0,t.Z)(m,2),h=g[0],f=g[1],p=(0,i.useState)(!1),j=(0,t.Z)(p,2),x=j[0],v=j[1],b=(0,i.useState)(null),S=(0,t.Z)(b,2),w=S[0],Z=S[1],k=(0,i.useState)(null),_=(0,t.Z)(k,2),T=_[0],I=_[1],P=function(e){return[{key:"1",label:(0,A.jsx)("span",{onClick:function(){E(e)},children:"Editar"})},{key:"2",label:(0,A.jsx)("span",{type:"primary",onClick:function(){z(e)},children:"Asignaciones"})},{key:"3",danger:!0,label:(0,A.jsx)(l.Z,{placement:"left",title:"Desea cambiar el estado del profesor?",description:"Esto puede afectar a las operaciones que el profesor realice.",onConfirm:function(){return M(e)},okText:"Aceptar",cancelText:"Cancelar",children:e.estado?"Eliminar":"Restaurar"})}]},F=[{title:"C\xe9dula",dataIndex:"cedula",key:"cedula"},{title:"Primer Nombre",dataIndex:"primer_nombre",key:"primer_nombre"},{title:"Segundo Nombre",dataIndex:"segundo_nombre",key:"segundo_nombre"},{title:"Primer Apellido",dataIndex:"primer_apellido",key:"primer_apellido"},{title:"Segundo Apellido",dataIndex:"segundo_apellido",key:"segundo_apellido"},{title:"Correo",dataIndex:"correo",key:"correo"},{title:"Action",key:"action",render:function(e,s){return(0,A.jsx)(c.Z,{menu:{items:P(s)},children:(0,A.jsx)("a",{onClick:function(e){return e.preventDefault()},children:(0,A.jsx)(C.Z,{})})})}}];(0,i.useEffect)((function(){a()}),[]);var M=function(e){var s=e.id,n=e.estado;r({id:s,estado:Number(!n)})},E=function(e){Z(e),f(!0)},z=function(e){o(e),I(e),v(!0)};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(u.Z,{loading:n,children:(0,A.jsx)(d.Z,{columns:F,dataSource:s})}),w&&(0,A.jsx)(y,{item:w,setItem:Z,showModal:h,setShowModal:f}),T&&(0,A.jsx)(N,{showModalAssigment:x,setShowModalAssigment:v})]})})),P=n(4424),F=function(e){var s=e.saveTeachers,n=(0,i.useState)("registro"),a=(0,t.Z)(n,2),r=a[0],o=a[1];(0,i.useEffect)((function(){}),[]);return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(u.Z,{title:"Profesores",bordered:!1,style:{width:"100%"},children:[(0,A.jsxs)(P.ZP.Group,{onChange:function(e){o(e.target.value)},value:r,style:{marginBottom:8},children:[(0,A.jsx)(P.ZP.Button,{value:"registro",children:"Registro"}),(0,A.jsx)(P.ZP.Button,{value:"list",children:"Listado"})]}),"registro"===r&&(0,A.jsx)(Z,{submitTeacher:s}),"list"===r&&(0,A.jsx)(I,{})]})})},M=(0,a.$j)((function(e){return{}}),(function(e){return{saveTeachers:function(s){e(r.Nw.saveTeachers(s))}}}))(F)}}]);
//# sourceMappingURL=363.e3aabbb7.chunk.js.map