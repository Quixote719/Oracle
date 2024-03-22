import React from 'react';
import { Row, Col, Form } from 'antd';
import FlexFormItem from '@/component/flexFormItem';

const form = () => {
  return (
    <div>
      <Form layout="vertical">
        <Row gutter={24}>
          <Col span={12} key={0}>
            <FlexFormItem
              type="edit"
              label="驱动电机生产企业"
              name="DriveMotorManufacturer"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={1}>
            <FlexFormItem
              type="edit"
              label="驱动电机控制器型号"
              name="DriveMotorControllerModel"
              rules={[{ required: true }]}
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default form;
