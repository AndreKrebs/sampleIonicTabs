import { Injectable } from '@angular/core';

let config_key_name:string = "config";

@Injectable()
export class ConfigProvider {

  private config = {
    showSlide:true,
    name: "",
    userName: ""
  }

  constructor() {
    if(!localStorage.getItem(config_key_name)) {
      localStorage.setItem(config_key_name, JSON.stringify(this.config));
    }
  }

  // retorna dados de config da localstorage
  getConfigData():any {
    return JSON.parse(localStorage.getItem(config_key_name));
  }

  setConfigData(showSlide?: boolean, name?: string, userName?: string) {

    this.config = JSON.parse(localStorage.getItem(config_key_name));

    if (typeof showSlide != 'undefined') {
      this.config.showSlide = showSlide;
    }

    if (typeof name != 'undefined') {
      this.config.name = name;
    }

    if (typeof userName != 'undefined') {
      this.config.userName = userName;
    }
    
    localStorage.setItem(config_key_name, JSON.stringify(this.config));
    
  }

}
