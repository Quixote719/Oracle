import React from 'react';
import { Row, Col, Form } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
import PropTypes from 'prop-types';

const VehicleForm = props => {
  return (
    <div>
      <Form layout="vertical" form={props.form}>
        <Row gutter={24}>
          <Col span={12} key={'vehicleControllerProducer'} id={'vehicleControllerProducer'}>
            <FlexFormItem
              formMode={props.mode}
              label="整车控制器生产企业"
              name="vehicleControllerProducer"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'vehicleControllerModel'} id={'vehicleControllerModel'}>
            <FlexFormItem
              formMode={props.mode}
              label="整车控制器型号"
              name="vehicleControllerModel"
              rules={[{ required: true }]}
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

VehicleForm.propTypes = {
  form: PropTypes.object,
  mode: PropTypes.string
};

export default VehicleForm;
