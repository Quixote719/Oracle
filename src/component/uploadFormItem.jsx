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

  return props.formMode === 'edit' ? (
    <Form.Item
      label={props.label}
      name={props.name}
      rules={props.rules}
      style={{ width: '75%', ...props.itemStyle }}
    >
      <Upload {...uploadProps}>
        <Button icon={<UploadOutlined />}>点击上传</Button>
      </Upload>
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
  itemStyle: PropTypes.object
};

export default FlexFormItem;
