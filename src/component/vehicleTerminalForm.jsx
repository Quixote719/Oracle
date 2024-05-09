import React from 'react';
import { Row, Col, Form } from 'antd';
import FlexFormItem from '@/component/flexFormItem';
import PropTypes from 'prop-types';

const VehicleForm = props => {
  return (
    <div>
      <Form layout="vertical" form={props.form}>
        <Row gutter={24}>
          <Col span={12} key={'terminalModel'} id={'terminalModel'}>
            <FlexFormItem
              formformat={props.mode}
              label="终端型号"
              name="terminalModel"
              rules={[]}
            />
          </Col>
          <Col span={12} key={'terminalBrand'} id={'terminalBrand'}>
            <FlexFormItem
              formformat={props.mode}
              label="终端品牌"
              name="terminalBrand"
              rules={[]}
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
