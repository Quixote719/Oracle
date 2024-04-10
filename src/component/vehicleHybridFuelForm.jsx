import React from 'react';
import { Row, Col, Form } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
import { digitValidator, numberLimitValidator } from '@/utils/validator';
import PropTypes from 'prop-types';

const VehicleForm = props => {
  return (
    <div>
      <Form layout="vertical" form={props.form}>
        <Row gutter={24}>
          <Col span={12} key={'fuelType'} id={'fuelType'}>
            <FlexFormItem
              formMode={props.mode}
              label="燃油类型"
              name="fuelType"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'ROZ'} id={'ROZ'}>
            <FlexFormItem
              formMode={props.mode}
              label="燃油标号"
              name="ROZ"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'fuelTankCapacity'} id={'fuelTankCapacity'}>
            <FlexFormItem
              formMode={props.mode}
              label="油箱容量(L)"
              name="fuelTankCapacity"
              rules={[digitValidator(3), numberLimitValidator(0, 1000), { required: true }]}
            />
          </Col>
          <Col span={12} key={'engineCapacity'} id={'engineCapacity'}>
            <FlexFormItem
              formMode={props.mode}
              label="发动机排量"
              name="engineCapacity"
              rules={[{ required: true }]}
            />
          </Col>

          <Col span={12} key={'maximumOutputPpower'} id={'maximumOutputPpower'}>
            <FlexFormItem
              formMode={props.mode}
              label="最大输出功率(KW)"
              name="maximumOutputPpower"
              rules={[digitValidator(3), numberLimitValidator(0, 100000000), { required: true }]}
            />
          </Col>
          <Col span={12} key={'ratedPower'} id={'ratedPower'}>
            <FlexFormItem
              formMode={props.mode}
              label="额定功率(KW)"
              name="ratedPower"
              rules={[digitValidator(3), numberLimitValidator(0, 100000000), { required: true }]}
            />
          </Col>
          <Col span={12} key={'fuelConsumptionCom'} id={'fuelConsumptionCom'}>
            <FlexFormItem
              formMode={props.mode}
              label="综合工况油耗(L/百公里)"
              name="fuelConsumptionCom"
              rules={[digitValidator(3), numberLimitValidator(0, 100), { required: true }]}
            />
          </Col>
          <Col span={12} key={'maximumOutputTorque'} id={'maximumOutputTorque'}>
            <FlexFormItem
              formMode={props.mode}
              label="最大输出转矩(N.m)"
              name="maximumOutputTorque"
              rules={[digitValidator(3), numberLimitValidator(0, 100000000), { required: true }]}
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
