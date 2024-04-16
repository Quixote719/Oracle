const enumListUrl = 'http://10.242.211.155:8081/vehicle-service/dictionary/enumList';

const getVehicleEnumList = fetch(enumListUrl).then(res => {
  return res.json();
});

export { getVehicleEnumList };
