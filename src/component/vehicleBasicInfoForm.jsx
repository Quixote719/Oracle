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
              label="上报平台"
              name="reportPlatform"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={1}>
            <FlexFormItem
              type="edit"
              label="后轮距(MM)"
              name="rearWheelbase"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={0}>
            <FlexFormItem
              type="edit"
              label="车辆登记品牌"
              name="reportPlatform"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={0}>
            <FlexFormItem
              type="edit"
              label="最小转弯直径(MM)"
              name="MinimumTurningDiameter"
              rules={[{ required: true }]}
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default form;
