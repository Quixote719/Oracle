import VehicleModelStore from './vehicleModelStore';
import DataCenterStore from './dataCenterStore';
import EnumDataStore from './enumDataStore';
import React from 'react';

class Store {
  constructor() {
    this.vehicleModelStore = new VehicleModelStore();
    this.dataCenterStore = new DataCenterStore();
    this.enumDataStore = new EnumDataStore();
  }
}

// 使用context是为了让react识别到Store里面的mobx，不然react不认识Store
const rootStore = new Store();
const context = React.createContext(rootStore);
export const useStore = () => React.useContext(context);
