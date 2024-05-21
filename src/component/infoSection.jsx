import React from 'react';
import PropTypes from 'prop-types';
import styles from '@/component/compStyle.module.less';

const InfoSection = props => {
  const pluralToSingular = param => {
    if (typeof param !== 'string') return '';
    if (param.endsWith('es')) {
      param = param.slice(0, param.length - 2);
    } else if (param.endsWith('s')) {
      param = param.slice(0, param.length - 1);
    }
    return param;
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
          <div className={styles.infoPairVal}>{param[infoKey]}</div>
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
  info: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  compstyle: PropTypes.object
};

export default InfoSection;
