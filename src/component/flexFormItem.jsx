import React from 'react';
import { Form, Input, Select, DatePicker } from 'antd';
import PropTypes from 'prop-types';
import styles from './compStyle.module.less';

const FlexFormItem = props => {
  const genFormItem = () => {
    return Array.isArray(props.options) ? (
      <Select className={styles.formItem} options={props.options} mode={props.selectMode} />
    ) : props.isDatePicker ? (
      <DatePicker
        className={styles.formItem}
        style={{ width: '100%' }}
        placeholder={props.placeholder}
        format="YYYY-MM-DD"
      />
    ) : (
      <Input className={styles.formItem} placeholder={props.placeholder} />
    );
  };

  return props.formMode === 'edit' ? (
    <Form.Item
      label={props.label}
      name={props.name}
      rules={props.rules}
      style={{ width: '75%', ...props.itemStyle }}
    >
      {genFormItem()}
    </Form.Item>
  ) : (
    <div className={styles.itemInfo}>
      <div>{props.label}</div>
      <div>{props.text}</div>
    </div>
  );
};

FlexFormItem.propTypes = {
  formMode: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  rules: PropTypes.array,
  text: PropTypes.string,
  options: PropTypes.array,
  selectMode: PropTypes.string,
  placeholder: PropTypes.string,
  isDatePicker: PropTypes.bool,
  itemStyle: PropTypes.object
};

export default FlexFormItem;
