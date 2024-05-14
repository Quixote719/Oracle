import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
import { digitValidator } from '@/utils/validator';
import { useStore } from '@/store';
import styles from './compStyle.module.less';
import PropTypes from 'prop-types';

const VehicleForm = props => {
  const [formMode, setFormMode] = useState(props.mode);
  const { vehicleModelStore } = useStore();

  const changeFormMode = param => {
    setFormMode(param);
  };

  return (
    <div>
      <Form layout="vertical" form={props.form}>
        <Row gutter={24}>
          <Col span={12} key={'type'} id={'type'}>
            <FlexFormItem
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.type}
              formformat={formMode}
              label="发电机类型"
              name="type"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'model'} id={'model'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.model}
              label="发电机型号"
              name="model"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'ratedPower'} id={'ratedPower'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.ratedPower}
              label="发电机额定功率(kw)"
              name="ratedPower"
              rules={[digitValidator(3)]}
            />
          </Col>
          <Col span={12} key={'producer'} id={'producer'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.generatorTerminal?.producer}
              label="发电机生产企业"
              name="producer"
              rules={[]}
            />
          </Col>
        </Row>
      </Form>
      {formMode !== 'edit' && (
        <Button className={styles.editBtn} onClick={() => changeFormMode('edit')}>
          编辑
        </Button>
      )}
    </div>
  );
};

VehicleForm.propTypes = {
  form: PropTypes.object,
  mode: PropTypes.string
};

export default VehicleForm;
