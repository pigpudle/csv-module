import { IDialect, EQuoting, IFmtParams } from '@types';

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

  constructor(fmtParams?: Partial<IFmtParams>) {
    // TODO: implement
    // this is just a mock to ignore TS+ Eslint errors for now
    this.delimiter = fmtParams?.delimiter ?? ',';
    this.doublequote = fmtParams?.doublequote ?? false;
    this.escapechar = fmtParams?.escapechar ?? '';
    this.lineterminator = fmtParams?.lineterminator ?? '\n';
    this.quotechar = fmtParams?.quotechar ?? '';
    this.quoting = fmtParams?.quoting ?? EQuoting.QUOTE_ALL;
    this.skipinitialspace = fmtParams?.skipinitialspace ?? false;
    this.strict = fmtParams?.strict ?? false;
  }

  _overwriteParams(params: Partial<IFmtParams>) {
    // TODO: solve by TS safe less complex solution

    if (params.delimiter !== undefined) {
      this.delimiter = params.delimiter;
    }

    if (params.doublequote !== undefined) {
      this.doublequote = params.doublequote;
    }

    if (params.escapechar !== undefined) {
      this.escapechar = params.escapechar;
    }

    if (params.lineterminator !== undefined) {
      this.lineterminator = params.lineterminator;
    }

    if (params.quotechar !== undefined) {
      this.quotechar = params.quotechar;
    }

    if (params.quoting !== undefined) {
      this.quoting = params.quoting;
    }

    if (params.skipinitialspace !== undefined) {
      this.skipinitialspace = params.skipinitialspace;
    }

    if (params.strict !== undefined) {
      this.strict = params.strict;
    }
  }

  validate() {
    return -1;
  }
}
