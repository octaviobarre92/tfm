import React, { useEffect, useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Card,
  Tabs,
  notification
} from 'antd';
import { connect } from 'react-redux';
import { actions as actionStudents, selectors as selectorStudents } from "store/reducers/students"
import ListStudents from './_components/ListStudents';
import { CloseCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import moment from 'moment';
import { actions as actionCourse, selectors as selectorCourse } from "store/reducers/course"


export const Students = ({ saveStudent, isFetching, isFetchingCourse, cursos, loadCursos }) => {
  const [mode, setMode] = useState('registro');
  const [componentSize, setComponentSize] = useState('small');
  useEffect(() => {
    loadCursos()
  }, [])
  const handleModeChange = (e) => {
    setMode(e.target.value);
  };
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const onSubmit = values => {
    values.fecha_nacimiento = moment(values.fecha_nacimiento).format()
    saveStudent(values);
    notification.open({
      message: 'Exitoso!',
      description:
        'Estudiante registrado correctamente, puedes visualizarlo en el apartado de Listado',
      icon: <CheckCircleOutlined style={{ color: '#108ee9' }} />,
    });
  };
  const { Option } = Select;

  const Formulario = () => {
    return <Card loading={isFetching}>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        onFinish={onSubmit}
      >
        <Form.Item
          rules={[
            {
              required: true,
              message: 'Por favor ingrese un número de cédula',
            }
          ]}
          name="cedula"
          label="Cedula">
          <Input />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: 'Por favor ingrese el primer nombre del estudiante',
            }
          ]}
          name="primer_nombre"
          label="Primer Nombre">
          <Input />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: 'Por favor ingrese el segundo nombre del estudiante',
            }
          ]}
          name="segundo_nombre"
          label="Segundo Nombre">
          <Input />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: 'Por favor ingrese el primer apellido del estudiante',
            }
          ]}
          name="primer_apellido"
          label="Primer Apellido">
          <Input />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: 'Por favor ingrese el segundo apellido del estudiante',
            }
          ]}
          name="segundo_apellido"
          label="Segundo Apellido">
          <Input />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: 'Por favor ingrese el nombre completo del representante',
            }
          ]}
          name="representante"
          label="Representante">
          <Input />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: 'Por favor ingrese el correo electronico del representante',
            }, {
              type: 'email',
              message: 'Ingrese un correo electrónico valido!'
            }
          ]}
          name="correo_representante"
          label="Correo de representante">
          <Input />
        </Form.Item>
        <Form.Item name="telefono_representante" label="Telefono de representante">
          <Input />
        </Form.Item>
        <Form.Item name="direccion" label="Dirección">
          <Input />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: 'Por favor ingrese el correo electronico del estudiante',
            }, {
              type: 'email',
              message: 'Ingrese un correo electrónico valido!'
            }
          ]}
          name="correo_estudiante" label="Correo de estudiante">
          <Input />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: 'Por favor seleccione la fecha de nacimiento',
            }
          ]}
          name="fecha_nacimiento"
          label="Fecha de nacimiento">
          <DatePicker />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: 'Por favor seleccione un curso',
            }
          ]}
          name="fkCurso"
          label="Curso">
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Seleccione un curso"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {cursos.map((item) => (
              <Option value={item.idCurso}>{`${item.nombre} - ${item.paralelo}`}</Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit"   >
            Guardar Estudiante
          </Button>
        </Form.Item>
      </Form>
    </Card>
  }

  return (
    <div>
      <Card title="Estudiantes" bordered={false} style={{ width: "100%" }}>
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
        {mode === "registro" && cursos.length > 0 && <Formulario />}
        {mode === "list" && <ListStudents cursos={cursos} />}

      </Card>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isFetching: selectorStudents.getFetching(state),
  isFetchingCursos: selectorCourse.getFetching(state),
  cursos: selectorCourse.getdataCourse(state),
})
const mapDispatchToProps = (dispatch) => ({
  saveStudent: (dataStudent) => {
    dispatch(actionStudents.saveStudents(dataStudent));
  },
  loadCursos: () => {
    dispatch(actionCourse.loadCourseAll());
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Students)


