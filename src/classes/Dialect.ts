import { IDialect, EQuoting } from '@types';

// TODO: implement
export class Dialect implements IDialect {
  delimiter: string;
  doublequote: boolean;
  escapechar: string;
  lineterminator: string;
  quotechar: string;
  quoting: EQuoting;
  skipinitialspace: boolean;
  strict: boolean;

  constructor() {
    // TODO: implement
    // this is just a mock to ignore TS+ Eslint errors for now
    this.delimiter = ',';
    this.doublequote = false;
    this.escapechar = '';
    this.lineterminator = '\n';
    this.quotechar = '';
    this.quoting = EQuoting.QUOTE_ALL;
    this.skipinitialspace = false;
    this.strict = false;
  }
}
