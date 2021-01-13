import {Injectable, Renderer2, RendererFactory2} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorSchemeService {

  private renderer: Renderer2;
  private colorScheme: string;
  private colorSchemePrefix = 'color-scheme-';

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  _detectPrefersColorScheme(): void {
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      this.colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } else {
      this.colorScheme = 'dark';
    }
  }

  _setColorScheme(scheme): void {
    this.colorScheme = scheme;
    localStorage.setItem('prefers-color', scheme);
  }

  _getColorScheme(): void {
    if (localStorage.getItem('prefers-color')) {
      this.colorScheme = localStorage.getItem('prefers-color');
    } else {
      this._detectPrefersColorScheme();
    }
  }

  load(): void {
    this._getColorScheme();
    this.renderer.addClass(document.body, this.colorSchemePrefix + this.colorScheme);
  }

  update(scheme): void {
    this._setColorScheme(scheme);
    this.renderer.removeClass( document.body, this.colorSchemePrefix + (this.colorScheme === 'dark' ? 'light' : 'dark') );
    this.renderer.addClass(document.body, this.colorSchemePrefix + scheme);
  }

}
