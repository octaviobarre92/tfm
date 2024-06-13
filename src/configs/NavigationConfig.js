import { DashboardOutlined,UserOutlined, ShoppingOutlined, TableOutlined, SolutionOutlined  } from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'


const dashBoardNavTree = [{
  key: 'dashboards',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: 'Menú de usuario',
  icon: DashboardOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'dashboards-default',
      path: `${APP_PREFIX_PATH}/home`,
      title: 'Inicio',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
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
      key: 'report',
      path: `${APP_PREFIX_PATH}/report`,
      title: 'Reportes',
      icon: SolutionOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
