import { DashboardOutlined, UserOutlined, ShoppingOutlined, TableOutlined, SolutionOutlined } from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

let dataUser = JSON.parse(atob(localStorage.getItem("auth_token")))

const dashboardAdmin = [{
  key: 'dashboards',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: 'Menú de usuario',
  icon: DashboardOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'students',
      path: `${APP_PREFIX_PATH}/students`,
      title: 'Estudiantes',
      icon: UserOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'teachers',
      path: `${APP_PREFIX_PATH}/teachers`,
      title: 'Profesores',
      icon: ShoppingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'gestion',
      path: `${APP_PREFIX_PATH}/gestion`,
      title: 'Gestión de cursos',
      icon: TableOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'asistencias',
      path: `${APP_PREFIX_PATH}/asistencias`,
      title: 'Asistencia',
      icon: TableOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'report',
      path: `${APP_PREFIX_PATH}/report`,
      title: 'Reportes',
      icon: SolutionOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]
const dashboardTeacher = [{
  key: 'dashboards',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: 'Menú de usuario',
  icon: DashboardOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'asistencias',
      path: `${APP_PREFIX_PATH}/asistencias`,
      title: 'Asistencia',
      icon: TableOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'report',
      path: `${APP_PREFIX_PATH}/report`,
      title: 'Reportes',
      icon: SolutionOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]

let navigationConfigAdmin = [
  ...dashboardAdmin
]
let navigationConfigTeacher = [
  ...dashboardTeacher
]
// dataUser["TIPO_USER"] === "TEACHER" ? navigationConfigTeacher : navigationConfigAdmin
export default navigationConfigTeacher;
