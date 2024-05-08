import React, { useState } from 'react';
import { Menu } from 'antd';
import styles from './compStyle.module.less';
import { useLocation, useNavigate } from 'react-router-dom';

const MenuApp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState(location.pathname.replace('/', ''));

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type
    };
  }

  const menuItems = [
    getItem(<div className={styles.vehicleMenuItem}>数据中心</div>, 'dataCenter'),
    getItem(<div className={styles.vehicleMenuItem}>车型管理</div>, 'vehicleModelList'),
    getItem(<div className={styles.vehicleMenuItem}>车辆管理</div>, 'vehicleList')
  ];

  const menuClick = param => {
    setSelectedKey(param?.key);
    navigate(`/${param.key}`, { state: { key: param.key } });
  };

  return (
    <div className={styles.leftSider}>
      <Menu
        defaultSelectedKeys={[location.pathname]}
        selectedKeys={[selectedKey]}
        onClick={menuClick}
        mode="inline"
        // inlineCollapsed={collapsed}
        items={menuItems}
      />
    </div>
  );
};
export default MenuApp;
