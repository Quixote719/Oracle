import React from 'react';
import { Row, Col, Form } from 'antd';
import FlexFormItem from '@/component/flexFormItem';

const form = props => {
  return (
    <div>
      <Form layout="vertical" form={props.form}>
        <Row gutter={24}>
          <Col
            span={12}
            key={'VehicleControllerManufacturers'}
            id={'VehicleControllerManufacturers'}
          >
            <FlexFormItem
              formMode="edit"
              label="整车控制器生产企业"
              name="VehicleControllerManufacturers"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'VehicleControllerModel'} id={'VehicleControllerModel'}>
            <FlexFormItem
              formMode="edit"
              label="整车控制器型号"
              name="VehicleControllerModel"
              rules={[{ required: true }]}
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default form;
