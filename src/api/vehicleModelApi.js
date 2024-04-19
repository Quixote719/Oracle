import { genApiPrefix } from '@/api/getApiPrefix';

let prefix = genApiPrefix();

const enumListUrl = `${prefix}/vehicle-service/dictionary/enumList`;

const getVehicleEnumList = fetch(enumListUrl).then(res => {
  return res.json();
});

export { getVehicleEnumList };
