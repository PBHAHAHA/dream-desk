export const formatMoney = (money: string | number) => {
  const a = parseFloat(money.toString());
  return a.toLocaleString('zh-CN', { style: 'currency', currency: 'CNY' });
};

export const formatNum = (num: number | string) => {
  const a = num.toString();
  if (a.indexOf('.') > -1) return a.replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  return a.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
};
