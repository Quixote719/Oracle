import React, { useContext } from 'react';
import { Button, ConfigProvider, Space } from 'antd';
import { cardImage } from '@/constant/cardInfo';
import Card from '@/component/card';
import { css } from '@emotion/css';
import styles from './index.module.less';

const Mystic = () => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const rootPrefixCls = getPrefixCls();
  const linearGradientButton = css`
    &.${rootPrefixCls}-btn-primary:not([disabled]):not(.${rootPrefixCls}-btn-dangerous) {
      border-width: 0;

      > span {
        position: relative;
      }

      &::before {
        content: '';
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: 0;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `;

  return (
    <ConfigProvider
      button={{
        className: linearGradientButton
      }}
    >
      <Space>
        <div className={styles.mystic}>
          {cardImage.map((item, key) => (
            <div key={key} className={styles.cardShell}>
              <Card cardFront={item.cardFront} cardBack={item.cardBack} />
            </div>
          ))}
          <div className={styles.buttonSection}>
            <Button className={styles.knightBtn} type="primary">
              Pick Your Knight
            </Button>
          </div>
        </div>
      </Space>
    </ConfigProvider>
  );
};

export default Mystic;
