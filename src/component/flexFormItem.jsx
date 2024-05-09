import React from 'react';
import { Form, Input, Select, DatePicker } from 'antd';
import PropTypes from 'prop-types';
import styles from './compStyle.module.less';

const FlexFormItem = props => {
  const genFormItem = () => {
    return Array.isArray(props.options) ? (
      <Select className={styles.formItem} mode={props.selectMode} {...props} />
    ) : props.isDatePicker ? (
      <DatePicker
        className={styles.formItem}
        style={{ width: '100%' }}
        format="YYYY-MM-DD"
        {...props}
      />
    ) : (
      <Input className={styles.formItem} {...props} />
    );
  };

  return props.formformat === 'edit' ? (
    <Form.Item
      label={props.label}
      name={props.name}
      rules={props.rules}
      style={{ width: '75%', ...props.itemstyle }}
    >
      {genFormItem()}
    </Form.Item>
  ) : (
    <div className={styles.itemInfo}>
      <div className={styles.formLabel}>{props.label}</div>
      <div className={styles.formText}>{props.text}</div>
    </div>
  );
};

FlexFormItem.propTypes = {
  formformat: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  rules: PropTypes.array,
  text: PropTypes.string,
  options: PropTypes.array,
  selectMode: PropTypes.string,
  placeholder: PropTypes.string,
  isDatePicker: PropTypes.bool,
  itemstyle: PropTypes.object
};

export default FlexFormItem;
