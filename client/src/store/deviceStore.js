import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Freezers" },
      { id: 2, name: "Cell phones" },
      { id: 3, name: "TV Screens" },
      { id: 4, name: "Monoblocks" },
    ];

    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
      { id: 3, name: "Sharp" },
      { id: 4, name: "Lenovo" },
    ];

    this._devices = [
      { id: 1, name: "Sams 123", price: 500, rating: 0 },
      { id: 2, name: "iPhone13", price: 1300, rating: 0 },
      { id: 3, name: "iPad", price: 800, rating: 0 },
    ];

    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
}
