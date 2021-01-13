import { Pipe, PipeTransform } from '@angular/core';
import { Translator } from './translator.service';

@Pipe({ name: 'tr', pure: false })
export class TranslatorPipe implements PipeTransform {
  constructor(private translator: Translator) {}
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

