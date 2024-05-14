import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
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
          <Col span={12} key={'vehicleControllerProducer'} id={'vehicleControllerProducer'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.vehicleControllerProducer}
              label="整车控制器生产企业"
              name="vehicleControllerProducer"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'vehicleControllerModel'} id={'vehicleControllerModel'}>
            <FlexFormItem
              formformat={formMode}
              text={vehicleModelStore?.targetRecord?.vehicleControllerModel}
              label="整车控制器型号"
              name="vehicleControllerModel"
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
