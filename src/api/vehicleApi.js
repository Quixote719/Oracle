import { genApiPrefix } from '@/api/getApiPrefix';

const prefix = genApiPrefix();

const enumListUrl = `${prefix}/vehicle-service/dictionary/enumList`;
const vehicleModelOptionUrl = `${prefix}/vehicle-service/VehicleModel/Options`;
const vehicleModelUrl = `${prefix}/vehicle-service/VehicleModel`;
const vehicleModelExportUrl = `${prefix}/Export/VehicleModel`;
const searchVehicleDataByVinUrl = `${prefix}/data-management/getLatestCNevDataByVin`;
const queryCNevData = `${prefix}/data-management/getCNevDataByVinByTimeRange`;
const vehicleUrl = `${prefix}/vehicle-service/Vehicle`;
const queryVehicleUrl = `${prefix}/vehicle-service/Vehicle/queryVehicle`;

const getVehicleEnumList = () => {
  return fetch(enumListUrl).then(res => {
    return res.json();
  });
};

const getVehicleModelOptions = () => {
  return fetch(vehicleModelOptionUrl).then(res => {
    return res.json();
  });
};

const getVehicleModelList = param => {
  return fetch(vehicleModelUrl + param).then(res => {
    return res.json();
  });
};

const getVehicleList = param => {
  // return fetch(queryVehicleUrl + param).then(res => {
  //   return res.json();
  // });
  return fetch(queryVehicleUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(param)
  }).then(res => {
    return res.json();
  });
};

const getVehicleModelById = id => {
  return fetch(vehicleModelUrl + `/${id}`).then(res => {
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
      a.download = 'vehicle-models.xlsx';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    });
};

const getVehicleDataByVin = param => {
  return fetch(searchVehicleDataByVinUrl + param).then(res => {
    return res.json();
  });
};

const submitVehicle = param => {
  return fetch(vehicleUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(param)
  }).then(res => {
    return res.json();
  });
};

const getCNevList = param => {
  return fetch(queryCNevData + param).then(res => {
    return res.json();
  });
};

export {
  getVehicleEnumList,
  getVehicleModelOptions,
  getVehicleModelList,
  getVehicleList,
  getVehicleModelById,
  submitVehicleModel,
  exportVehicleModel,
  getVehicleDataByVin,
  submitVehicle,
  getCNevList
};
