import VehicleModelStore from './vehicleModelStore';
import VehicleInfolStore from './vehicleInfoStore';
import DataCenterStore from './dataCenterStore';
import HistoryDataStore from './historyDataStore';
import EnumDataStore from './enumDataStore';
import React from 'react';

class Store {
  constructor() {
    this.vehicleModelStore = new VehicleModelStore();
    this.dataCenterStore = new DataCenterStore();
    this.historyDataStore = new HistoryDataStore();
    this.enumDataStore = new EnumDataStore();
    this.vehicleInfoStore = new VehicleInfolStore();
  }
}

// 使用context是为了让react识别到Store里面的mobx，不然react不认识Store
const rootStore = new Store();
const context = React.createContext(rootStore);
export const useStore = () => React.useContext(context);
