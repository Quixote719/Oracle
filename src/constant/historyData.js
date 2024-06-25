const yesOrNo = [
  { value: '1', label: '是' },
  { value: '0', label: '否' }
];

const other = [{ value: 'Others', label: '其他' }];

const pageSizeOpt = [5, 10, 20, 50];

const historyRecordColumns = [
  {
    title: '数据采集时间',
    dataIndex: '数据采集时间',
    key: '数据采集时间'
  },
  {
    title: '平台接收时间',
    dataIndex: '平台接收时间',
    key: '平台接收时间',
    sorter: true
  },
  {
    title: '实时/补发',
    dataIndex: '实时/补发',
    key: '实时/补发'
  },
  {
    title: '车辆状态',
    dataIndex: '车辆状态',
    key: '车辆状态'
  },
  {
    title: '充电状态',
    dataIndex: '充电状态',
    key: '充电状态'
  },
  {
    title: '运行模式',
    dataIndex: '运行模式',
    key: '运行模式'
  },
  {
    title: '车速',
    dataIndex: '车速',
    key: '车速'
  },
  {
    title: '累计里程',
    dataIndex: '累计里程',
    key: '累计里程'
  },
  {
    title: '总电压',
    dataIndex: '总电压',
    key: '总电压'
  },
  {
    title: '总电流',
    dataIndex: '总电流',
    key: '总电流'
  },
  {
    title: 'SOC',
    dataIndex: 'SOC',
    key: 'SOC'
  }
];

export { yesOrNo, other, historyRecordColumns, pageSizeOpt };
