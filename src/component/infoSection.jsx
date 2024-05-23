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
    if (Array.isArray(targetVal) && targetVal.length > 1) {
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

  const genModalStatitics = (statistics, infoKey) => {
    let regroupArr = [],
      slen = (statistics || []).length,
      seqMark = '序号';
    for (let i = 0; i * 10 < slen; i++) {
      let dataSlice = statistics.slice(i * 10, i * 10 + 10);
      dataSlice.unshift({ [seqMark]: infoKey });
      regroupArr.push(dataSlice);
    }
    let count = 1;
    return regroupArr.flat().map((item, index) => {
      if (typeof item === 'object') {
        return (
          <div className={styles.infoArrValTitle} key={index}>
            <div className={styles.eleKey}>{seqMark}</div>
            <div className={styles.eleVal}>{item[seqMark]}</div>
          </div>
        );
      } else {
        return (
          <div className={styles.infoArrValElement} key={index}>
            <div className={styles.eleKey}>{count++}</div>
            <div className={styles.eleVal}>{item}</div>
          </div>
        );
      }
    });
  };

  return (
    <div style={{ ...props.compstyle }}>
      <div className={styles.infoHeader}>{props.header}</div>
      <div className={styles.infoStream}>{genInfoSection(props.info)}</div>
      <Modal
        width={'75%'}
        styles={{ body: { maxHeight: '650px', overflow: 'auto' } }}
        open={infoModalVisible}
        onOk={closeInfoModal}
        onCancel={closeInfoModal}
        title={infoModalVisible?.targetKey}
        footer={[
          <Button key="submit" className={styles.closeBtn} onClick={closeInfoModal}>
            关闭
          </Button>
        ]}
      >
        <div className={styles.infoArrValBox}>
          {genModalStatitics(infoModalVisible?.targetVal, infoModalVisible?.targetKey)}
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
