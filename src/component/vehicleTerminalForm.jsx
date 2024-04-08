import React from 'react';
import { Row, Col, Form } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
import PropTypes from 'prop-types';

const VehicleForm = props => {
  return (
    <div>
      <Form layout="vertical" form={props.form}>
        <Row gutter={24}>
          <Col span={12} key={'OnBoardTerminalModel'}>
            <FlexFormItem
              formMode="edit"
              label="终端型号"
              name="OnBoardTerminalModel"
              rules={[{ required: true }]}
            />
          </Col>
          <Col span={12} key={'OnBoardTerminalBrand'}>
            <FlexFormItem
              formMode="edit"
              label="终端品牌"
              name="OnBoardTerminalBrand"
              rules={[{ required: true }]}
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

VehicleForm.propTypes = {
  form: PropTypes.object
};

export default VehicleForm;
