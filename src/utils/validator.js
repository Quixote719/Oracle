const digitValidator = param => {
  return {
    validator: (_, value) => {
      const reg = new RegExp(`^-?\\d+(\\.\\d{1,${param}})?$`);
      return reg.test(value)
        ? Promise.resolve()
        : Promise.reject(new Error(`仅支持输入数字，最多到小数点后${param}位`));
    }
  };
};

const serialNumberValidator = (min, max, integerCheck, decimalDigit) => {
  return {
    validator: (_, value) => {
      let valueArr = value.trim().split(',');
      for (let item of valueArr) {
        if (item === '') continue;
        let val = Number(item.trim());
        if (
          Number.isInteger(decimalDigit) &&
          !new RegExp(`^-?\\d+(\\.\\d{1,${decimalDigit}})?$`).test(item)
        ) {
          return Promise.reject(new Error(`仅支持输入数字，最多到小数点后${decimalDigit}位`));
        } else if (integerCheck && !Number.isInteger(val)) {
          return Promise.reject(new Error('输入必须是整数'));
        } else if (typeof min === 'number' && val <= min) {
          return Promise.reject(new Error(`输入数值必须大于${min}`));
        } else if (typeof max === 'number' && val >= max) {
          return Promise.reject(new Error(`输入数值必须小于${max}`));
        }
      }
      return Promise.resolve();
    }
  };
};

const numberLimitValidator = (min, max) => {
  return {
    validator: (_, value) => {
      if (typeof min === 'number' && value <= min) {
        return Promise.reject(new Error(`输入数值必须大于${min}`));
      } else if (typeof max === 'number' && value >= max) {
        return Promise.reject(new Error(`输入数值必须小于${max}`));
      }
      return Promise.resolve();
    }
  };
};

const integerValidator = () => {
  return {
    validator: (_, value) => {
      return Number.isInteger(Number(value))
        ? Promise.resolve()
        : Promise.reject(new Error('输入必须是整数'));
    }
  };
};

export { digitValidator, numberLimitValidator, serialNumberValidator, integerValidator };
