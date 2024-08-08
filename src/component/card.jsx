import React from 'react';
import styles from './index.module.less';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className={styles.card}>
      <img className={styles.front} src={props.cardFront} />
      <img className={styles.back} src={props.cardBack} />
    </div>
  );
};

Card.propTypes = {
  cardFront: PropTypes.string,
  cardBack: PropTypes.string
};

export default Card;
