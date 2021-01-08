import {NgModule, ModuleWithProviders} from '@angular/core';
import {TranslatorPipe} from './translator.pipe';

export interface TranslatorConfig {
  defaultLang?: string;
  storagePrefix?: string;
}

@NgModule({
  declarations: [TranslatorPipe],
  exports: [TranslatorPipe
  ]
})

export class TranslatorModule {
  public static forRoot(config: TranslatorConfig): ModuleWithProviders<TranslatorModule> {
    return {
      ngModule: TranslatorModule,
      providers: [
        {provide: 'config', useValue: config}
      ]
    };
  }
}
