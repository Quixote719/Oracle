import { genApiPrefix } from '@/api/getApiPrefix';

const prefix = genApiPrefix();

const enumListUrl = `${prefix}/vehicle-service/dictionary/enumList`;
const vehicleModelUrl = `${prefix}/vehicle-service/VehicleModel`;
const vehicleModelExportUrl = `${prefix}/Export/VehicleModel`;
const searchVehicleDataByVin = `${prefix}/data-management/getCNevDataByVin`;

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

const exportVehicleModel = param => {
  return fetch(vehicleModelExportUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(param)
  })
    .then(res => {
      return res.blob();
    })
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'vehicle-models.xls';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    });
};

const getVehicleDataByVin = param => {
  return fetch(searchVehicleDataByVin + param).then(res => {
    return res.json();
  });
};

export {
  getVehicleEnumList,
  getVehicleModelList,
  submitVehicleModel,
  exportVehicleModel,
  getVehicleDataByVin
};
