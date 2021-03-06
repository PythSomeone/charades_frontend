import { Injectable, Inject } from '@angular/core';

declare const require;

@Injectable({
  providedIn: 'root'
})

export class Translator {
  private prefix = 'ferhado-lang';
  private rtlLangs = ['ar', 'fa', 'ur'];
  private languagesObject;

  private html = document.getElementsByTagName('html')[0];
  public lang;
  public dir;

  constructor(@Inject('config') private config) {
    if (this.config.storagePrefix) { this.prefix = `${this.config.storagePrefix}-lang`; }
    this.lang = localStorage.getItem(this.prefix) || this.config.defaultLang || 'en';
    this.setLanguage(this.lang);
  }

  setLanguage(value): any {
    this.lang = value;
    localStorage.setItem(this.prefix, value);
    this.languagesObject = require(`./languages/${value}.json`);

    this.dir = this.rtlLangs.indexOf(value) !== -1 ? 'rtl' : 'ltr';
    this.html.setAttribute('dir', this.dir);
    this.html.setAttribute('lang', this.lang);
  }

  get(key): any{
    try { return this.languagesObject[key]; } catch (error) { }
  }
}
