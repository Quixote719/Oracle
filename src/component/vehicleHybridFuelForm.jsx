import React from 'react';
import { Row, Col, Form } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
import { digitValidator, numberLimitValidator } from '@/utils/validator';

const form = props => {
  return (
    <div>
      <Form layout="vertical" form={props.form}>
        <Row gutter={24}>
          <Col span={12} key={'fuelType'} id={'fuelType'}>
            <FlexFormItem
              formMode="edit"
              label="燃油类型"
              name="fuelType"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'ROZ'} id={'ROZ'}>
            <FlexFormItem
              formMode="edit"
              label="燃油标号"
              name="ROZ"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'fuelTankCapacity'} id={'fuelTankCapacity'}>
            <FlexFormItem
              formMode="edit"
              label="油箱容量(L)"
              name="fuelTankCapacity"
              rules={[digitValidator(3), numberLimitValidator(0, 1000), { required: true }]}
            />
          </Col>
          <Col span={12} key={'engineCapacity'} id={'engineCapacity'}>
            <FlexFormItem
              formMode="edit"
              label="发动机排量"
              name="engineCapacity"
              rules={[{ required: true }]}
            />
          </Col>

          <Col span={12} key={'maximumOutputPpower'} id={'maximumOutputPpower'}>
            <FlexFormItem
              formMode="edit"
              label="最大输出功率(KW)"
              name="maximumOutputPpower"
              rules={[digitValidator(3), numberLimitValidator(0, 100000000), { required: true }]}
            />
          </Col>
          <Col span={12} key={'ratedPower'} id={'ratedPower'}>
            <FlexFormItem
              formMode="edit"
              label="额定功率(KW)"
              name="ratedPower"
              rules={[digitValidator(3), numberLimitValidator(0, 100000000), { required: true }]}
            />
          </Col>
          <Col span={12} key={'fuelConsumptionCom'} id={'fuelConsumptionCom'}>
            <FlexFormItem
              formMode="edit"
              label="综合工况油耗(L/百公里)"
              name="fuelConsumptionCom"
              rules={[digitValidator(3), numberLimitValidator(0, 100), { required: true }]}
            />
          </Col>
          <Col span={12} key={'maximumOutputTorque'} id={'maximumOutputTorque'}>
            <FlexFormItem
              formMode="edit"
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

export default form;
