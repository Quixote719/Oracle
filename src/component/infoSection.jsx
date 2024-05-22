import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import PropTypes from 'prop-types';
import styles from '@/component/compStyle.module.less';

const InfoSection = props => {
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const pluralToSingular = param => {
    if (typeof param !== 'string') return '';
    if (param.endsWith('es')) {
      param = param.slice(0, param.length - 2);
    } else if (param.endsWith('s')) {
      param = param.slice(0, param.length - 1);
    }
    return param;
  };

  const closeInfoModal = () => {
    setInfoModalVisible(false);
  };

  const genInfoValue = (info, targetKey) => {
    let targetVal = info[targetKey];
    if (Array.isArray(targetVal) && targetVal.length > 0) {
      return (
        <div
          className={styles.infoValArr}
          onClick={() => setInfoModalVisible({ targetKey, targetVal })}
        >
          查看
        </div>
      );
    } else {
      return targetVal;
    }
  };

  const genInfoSection = param => {
    if (Array.isArray(param)) {
      return param.map((item, index) => (
        <div key={index}>
          <div
            className={styles.compSingularTitle}
          >{`${pluralToSingular(props.header)} ${index}`}</div>
          {genInfoSection(item)}
        </div>
      ));
    } else if (Object.prototype.toString.call(param === '[object Object]')) {
      return Object.keys(param || {}).map((infoKey, index) => (
        <div key={index} className={styles.infoPair}>
          <div className={styles.infoPairKey}>{infoKey}</div>
          <div className={styles.infoPairVal}>{genInfoValue(param, infoKey)}</div>
        </div>
      ));
    }
  };

  return (
    <div style={{ ...props.compstyle }}>
      <div className={styles.infoHeader}>{props.header}</div>
      <div className={styles.infoStream}>{genInfoSection(props.info)}</div>
      <Modal
        width={'60%'}
        open={infoModalVisible}
        onOk={closeInfoModal}
        onCancel={closeInfoModal}
        title={infoModalVisible?.targetKey}
        footer={[
          <Button key="submit" className={styles.confirmBtn} onClick={closeInfoModal}>
            确认
          </Button>
        ]}
      >
        <div className={styles.infoArrValBox}>
          {(infoModalVisible?.targetVal || []).map((item, index) => {
            return (
              <div className={styles.infoArrValElement} key={index}>
                <div className={styles.eleKey}>{index}</div>
                <div className={styles.eleVal}>{item}</div>
              </div>
            );
          })}
        </div>
      </Modal>
    </div>
  );
};

InfoSection.propTypes = {
  header: PropTypes.string,
  info: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  compstyle: PropTypes.object
};

export default InfoSection;
