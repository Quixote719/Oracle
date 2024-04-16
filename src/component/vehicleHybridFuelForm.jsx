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
          <Col span={12} key={'roz'} id={'roz'}>
            <FlexFormItem
              formMode={props.mode}
              label="燃油标号"
              name="roz"
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

          <Col span={12} key={'maxOutputPower'} id={'maxOutputPower'}>
            <FlexFormItem
              formMode={props.mode}
              label="最大输出功率(KW)"
              name="maxOutputPower"
              rules={[digitValidator(3), numberLimitValidator(0, 100000000), { required: true }]}
            />
          </Col>
          <Col span={12} key={'ratedPowerKw'} id={'ratedPowerKw'}>
            <FlexFormItem
              formMode={props.mode}
              label="额定功率(KW)"
              name="ratedPowerKw"
              rules={[digitValidator(3), numberLimitValidator(0, 100000000), { required: true }]}
            />
          </Col>
          <Col span={12} key={'fuelConsumptionCombined'} id={'fuelConsumptionCombined'}>
            <FlexFormItem
              formMode={props.mode}
              label="综合工况油耗(L/百公里)"
              name="fuelConsumptionCombined"
              rules={[digitValidator(3), numberLimitValidator(0, 100), { required: true }]}
            />
          </Col>
          <Col span={12} key={'maxOutputTorque'} id={'maxOutputTorque'}>
            <FlexFormItem
              formMode={props.mode}
              label="最大输出转矩(N.m)"
              name="maxOutputTorque"
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
