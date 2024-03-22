import React from 'react';
import { Form, Input } from 'antd';
import PropTypes from 'prop-types';

const FlexFormItem = props => {
  return props.type === 'edit' ? (
    <Form.Item label={props.label} name={props.name} rules={props.rules}>
      <Input />
    </Form.Item>
  ) : (
    <div>{props.text}</div>
  );
};

FlexFormItem.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  rules: PropTypes.object,
  text: PropTypes.string
};

export default FlexFormItem;
