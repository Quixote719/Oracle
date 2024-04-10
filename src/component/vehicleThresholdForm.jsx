import React from 'react';
import { Row, Col, Form } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
import PropTypes from 'prop-types';

const VehicleForm = props => {
  return (
    <div>
      <Form layout="vertical" form={props.form}>
        <Row gutter={24}>
          <Col span={12} key={'vehicleChargingEnterprise'}>
            <FlexFormItem
              formMode={props.mode}
              label="车载充电机生产企业"
              name="vehicleChargingEnterprise"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'vehicleChargingInputMax'}>
            <FlexFormItem
              formMode={props.mode}
              label="车载充电机额定输入最大频率(Hz)"
              name="vehicleChargingInputMax"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'vehicleChargingModel'}>
            <FlexFormItem
              formMode={props.mode}
              label="车载充电机型号"
              name="vehicleChargingModel"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'vehicleChargingOutputVoltage'}>
            <FlexFormItem
              formMode={props.mode}
              label="车载充电机输出电压(V)"
              name="vehicleChargingOutputVoltage"
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
