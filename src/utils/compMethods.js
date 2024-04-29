import { other } from '@/constant/vehicleModel';

const addOtherOption = param => {
  if (!Array.isArray(param)) return [];
  let res = [...param];
  if (param.filter(item => item.itemEname.includes('Others')).length === 0) {
    res = [...param, ...other];
  }
  return res;
};

const checkOtherOption = (setMethod, targetVal, options) => {
  if (typeof targetVal === 'string' && targetVal.includes('Others')) return setMethod(true);
  const fullOptions = addOtherOption(options);
  const targetItem = fullOptions.filter(item => item.value === targetVal)[0];
  const check = (targetItem?.itemEname || targetItem?.value || '').includes('Others');
  return setMethod(check);
};

export { addOtherOption, checkOtherOption };
