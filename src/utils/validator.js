const digitValidator = param => {
  return {
    validator: (_, value) => {
      const reg = new RegExp(`^[0-9-]+(.[0-9]{0,${param}})?$`);
      return reg.test(value)
        ? Promise.resolve()
        : Promise.reject(new Error(`仅支持输入数字，最多到小数点后${param}位`));
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

export { digitValidator, numberLimitValidator, integerValidator };
