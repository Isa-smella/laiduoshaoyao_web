export const highlights = [
  {
    title: '中江清晨直采',
    icon: '🌄',
    text: '当天采花、当天打包，花还没来得及困，就已经在路上。'
  },
  {
    title: '价格不绕弯子',
    icon: '🧺',
    text: '从种植户到你手里，减少中间环节，价格更实在。'
  },
  {
    title: '团购&零买都欢迎',
    icon: '🛵',
    text: '公司团购、社区拼单、家里一束都可以安排。'
  },
  {
    title: '花季限时开卖',
    icon: '⏳',
    text: '一年只认真卖这一阵，错过就等明年春天。'
  }
];

export const flowerCalendar = [
  { date: '04-18', type: '摘花日', detail: '中江基地采花 + 预冷整理' },
  { date: '04-19', type: '成都送花', detail: '市区团购线路（可配送）' },
  { date: '04-20', type: '可预订', detail: '支持快递，全国发货' },
  { date: '04-21', type: '暂停接单', detail: '补货日，仅处理已下单订单' },
  { date: '04-22', type: '成都送花', detail: '新增城西路线，晚间可自提' },
  { date: '04-23', type: '可预订', detail: '白花补货，混搭花束可订' }
];

export const products = [
  {
    id: 'red-single',
    name: '中江红芍药（单色）',
    image: '🌺',
    price: 69,
    desc: '颜色饱和，拍照特别上镜。',
    spec: '10支/扎',
    stock: '库存充足'
  },
  {
    id: 'white-single',
    name: '晨雾白芍药（单色）',
    image: '🤍',
    price: 72,
    desc: '清透奶白色，温柔又耐看。',
    spec: '10支/扎',
    stock: '少量现货'
  },
  {
    id: 'mix-bouquet',
    name: '春天混搭花束',
    image: '💐',
    price: 128,
    desc: '红白搭配 + 绿叶，开箱就有春天。',
    spec: '18支/束',
    stock: '预订中'
  }
];

export const orderRows = [
  {
    id: 'LD-240419-001',
    date: '2026-04-19',
    items: '红花 2 扎，白花 1 扎',
    delivery: '配送',
    total: 210,
    status: '待确认'
  },
  {
    id: 'LD-240418-014',
    date: '2026-04-18',
    items: '混搭花束 1 束',
    delivery: '自提',
    total: 128,
    status: '已确认'
  },
  {
    id: 'LD-240416-033',
    date: '2026-04-16',
    items: '红花 1 扎，白花 1 扎',
    delivery: '配送',
    total: 141,
    status: '已完成'
  }
];
