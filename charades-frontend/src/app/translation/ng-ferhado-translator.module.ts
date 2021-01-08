import {NgModule, ModuleWithProviders} from '@angular/core';
import {NgFerhadoTranslatorPipe} from './ng-ferhado-translator.pipe';

export interface NgFerhadoTranslatorConfig {
  defaultLang?: string;
  storagePrefix?: string;
}

@NgModule({
  declarations: [NgFerhadoTranslatorPipe],
  exports: [NgFerhadoTranslatorPipe
  ]
})

export class NgFerhadoTranslatorModule {
  public static forRoot(config: NgFerhadoTranslatorConfig): ModuleWithProviders<NgFerhadoTranslatorModule> {
    return {
      ngModule: NgFerhadoTranslatorModule,
      providers: [
        {provide: 'config', useValue: config}
      ]
    };
  }
}
