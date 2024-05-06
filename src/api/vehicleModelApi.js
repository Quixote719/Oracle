import { genApiPrefix } from '@/api/getApiPrefix';

const prefix = genApiPrefix();

const enumListUrl = `${prefix}/vehicle-service/dictionary/enumList`;
const vehicleModelUrl = `${prefix}/vehicle-service/VehicleModel`;

const getVehicleEnumList = () => {
  return fetch(enumListUrl).then(res => {
    return res.json();
  });
};

const getVehicleModelList = param => {
  return fetch(vehicleModelUrl + param).then(res => {
    return res.json();
  });
};

const submitVehicleModel = param => {
  return fetch(vehicleModelUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(param)
  }).then(res => {
    return res.json();
  });
};

export { getVehicleEnumList, getVehicleModelList, submitVehicleModel };
