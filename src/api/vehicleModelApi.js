import { genApiPrefix } from '@/api/getApiPrefix';

const prefix = genApiPrefix();

const enumListUrl = `${prefix}/vehicle-service/dictionary/enumList`;
const createVehicleModelUrl = `${prefix}/vehicle-service/VehicleModel`;

const getVehicleEnumList = () => {
  return fetch(enumListUrl).then(res => {
    return res.json();
  });
};

const submitVehicleModel = param => {
  return fetch(createVehicleModelUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(param)
  }).then(res => {
    return res.json();
  });
};

export { getVehicleEnumList, submitVehicleModel };
