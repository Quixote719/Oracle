import React from 'react';
import JLRLogo from '@/images/JLR.svg';
import styles from '@/component/compStyle.module.less';

const Header = () => {
  return (
    <div className={styles.header}>
      <img className={styles.headerJLRLogo} src={JLRLogo} />
      <div className={styles.headerText}>NOTIFICATION CENTER</div>
      <div className={styles.headerIcon} style={{ fontSize: '1.2rem' }}>
        |
      </div>
      <div className={styles.headerIcon} style={{ fontSize: '2rem', cursor: 'pointer' }}>
        ≡
      </div>
    </div>
  );
};

export default Header;
