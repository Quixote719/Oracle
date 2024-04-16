const parseVehicleModelSelectOptions = param => {
  let options = param.data || [];
  let selectDataByType = {};
  options.forEach(item => {
    if (selectDataByType[item.itemType]) {
      selectDataByType[item.itemType].push(item);
    } else {
      selectDataByType[item.itemType] = [item];
    }
  });
  return selectDataByType;
};

const vehicleModelSelectOptionsReducer = (_, action = {}) => {
  switch (action.type) {
    default:
      return parseVehicleModelSelectOptions(action.data);
  }
};

export { parseVehicleModelSelectOptions, vehicleModelSelectOptionsReducer };
