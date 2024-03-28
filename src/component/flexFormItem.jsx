import React from 'react';
import { Form, Input, Select } from 'antd';
import PropTypes from 'prop-types';

const FlexFormItem = props => {
  const genFormItem = options => {
    return Array.isArray(options) ? (
      <Select options={options} mode={props.selectMode} />
    ) : (
      <Input />
    );
  };

  return props.formMode === 'edit' ? (
    <Form.Item label={props.label} name={props.name} rules={props.rules}>
      {genFormItem(props.options)}
    </Form.Item>
  ) : (
    <div>{props.text}</div>
  );
};

FlexFormItem.propTypes = {
  formMode: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  rules: PropTypes.array,
  text: PropTypes.string,
  options: PropTypes.array,
  selectMode: PropTypes.string
};

export default FlexFormItem;
