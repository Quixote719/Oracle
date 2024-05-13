import React from 'react';
import PropTypes from 'prop-types';
import styles from '@/component/compStyle.module.less';

const InfoSection = props => {
  const genInfoSection = param => {
    if (typeof param === 'object') {
      return Object.keys(param).map((infoKey, index) => (
        <div key={index} className={styles.infoPair}>
          <div className={styles.infoKey}>{infoKey}</div>
          <div className={styles.infoVal}>{param[infoKey]}</div>
        </div>
      ));
    }
  };

  return (
    <div style={{ ...props.compstyle }}>
      <div className={styles.infoHeader}>{props.header}</div>
      <div className={styles.infoStream}>{genInfoSection(props.info)}</div>
    </div>
  );
};

InfoSection.propTypes = {
  header: PropTypes.string,
  info: PropTypes.object,
  compstyle: PropTypes.object
};

export default InfoSection;
