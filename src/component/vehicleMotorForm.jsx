import React from 'react';
import { Row, Col, Form } from 'antd';
import FlexFormItem from '@/component/flexFormItem';

const form = props => {
  return (
    <div>
      <Form layout="vertical" form={props.form}>
        <Row gutter={24}>
          <Col span={12} key={'driveMotorManufacturer'}>
            <FlexFormItem
              formMode="edit"
              label="驱动电机生产企业"
              name="driveMotorManufacturer"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'driveMotorControllerModel'}>
            <FlexFormItem
              formMode="edit"
              label="驱动电机控制器型号"
              name="driveMotorControllerModel"
              rules={[{ required: true }]}
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default form;
