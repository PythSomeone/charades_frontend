import { Pipe, PipeTransform } from '@angular/core';
import { NgFerhadoTranslator } from './ng-ferhado-translator.service';

@Pipe({ name: 'tr', pure: false })
export class NgFerhadoTranslatorPipe implements PipeTransform {
  constructor(private translator: NgFerhadoTranslator) {}
  transform(value: any, strtr?: any): any {
    if (!value) { return; }

    let output = this.translator.get(value);

    if (strtr) {
      // tslint:disable-next-line:forin
      for (const key in strtr) {
        output = output.replace(RegExp(`{{${key}}}`, 'g'), strtr[key]);
      }
    }

    return output;
  }
}

