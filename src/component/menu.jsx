import React from 'react';
import { Menu } from 'antd';
import styles from './compStyle.module.less';
import { useNavigate } from 'react-router-dom';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type
  };
}

// const items = [
//   getItem('主页', '1', <PieChartOutlined />),
//   getItem('车辆监控', 'sub1', <MailOutlined />, [
//     getItem('车企监控', '2'),
//     getItem('历史数据', '3'),
//     getItem('历史数据补发', '4')
//   ]),
//   getItem('系统管理', 'sub2', <AppstoreOutlined />, [
//     getItem('车辆指令', '5'),
//     getItem('车型管理', '6'),
//     getItem('车辆管理', '7'),
//     getItem('CJLR车辆管理', '8'),
//     getItem('上报日志', '9'),
//     getItem('指令历史', '10'),
//     getItem('车辆电池管理', '11'),
//     getItem('电池上报日志', '12')
//     // getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
//   ]),
//   getItem('二三级报警', 'sub3', <MenuUnfoldOutlined />, [
//     getItem('监控页面', '13'),
//     getItem('实时报警查询', '14'),
//     getItem('历史报警查询', '15'),
//     getItem('CJLR实时报警查询', '16'),
//     getItem('CJLR历史报警查询', '17'),
//     getItem('非沪绿牌报警查询', '18')
//   ])
// ];

const menuItems = [
  getItem(
    <div style={{ fontSize: '1rem', padding: '20%' }}>车型管理</div>,
    'vehicleModelManagement'
  ),
  getItem(<div style={{ fontSize: '1rem', padding: '20%' }}>车辆管理</div>, 'vehicleManagement')
];

const MenuApp = () => {
  const navigate = useNavigate();

  const menuClick = param => {
    navigate(`/${param.key}`, { state: { key: param.key } });
  };

  return (
    <div className={styles.leftSider}>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        onClick={menuClick}
        mode="inline"
        theme="dark"
        // inlineCollapsed={collapsed}
        items={menuItems}
      />
    </div>
  );
};
export default MenuApp;
