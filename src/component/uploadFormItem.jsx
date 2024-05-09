import React from 'react';
import { Form, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import styles from './compStyle.module.less';

const FlexFormItem = props => {
  const uploadProps = {
    beforeUpload: () => {
      return false;
    },
    onChange: info => {
      if (info.fileList.length > 1) {
        info.fileList.splice(0);
        info.fileList.push(info.file);
      }
    }
  };

  return props.formformat === 'edit' ? (
    <Form.Item
      label={props.label}
      name={props.name}
      rules={props.rules}
      style={{ width: '75%', ...props.itemstyle }}
    >
      <Upload {...uploadProps}>
        <Button icon={<UploadOutlined />}>点击上传</Button>
      </Upload>
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
  itemstyle: PropTypes.object
};

export default FlexFormItem;
