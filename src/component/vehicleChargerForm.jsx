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
              formMode="edit"
              label="车载充电机生产企业"
              name="vehicleChargingEnterprise"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={1}>
            <FlexFormItem
              formMode="edit"
              label="车载充电机额定输入最大频率(Hz)"
              name="vehicleChargingInputMax"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={1}>
            <FlexFormItem
              formMode="edit"
              label="车载充电机型号"
              name="vehicleChargingModel"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={1}>
            <FlexFormItem
              formMode="edit"
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

export default form;
