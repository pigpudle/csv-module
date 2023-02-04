export type TCSVFile = any; // TODO: implement

export interface IReader { // TODO: implement
  dialect: any;
  lineNum: number;
};

export type TRow = any; // TODO: implement

export interface IWriter { // TODO: implement
  writerow(row: TRow): any;
  writerows(rows: TRow[]): any;
  dialect: any;
};

export type TDialectName = string;

export type TDialect = any; // TODO: implement

export type TFmtParams = any; // TODO: implement

export type TSizeLimit = number; // TODO: implement

export type TExtrasaction = any; // TODO: implement

export enum EQuoting {
  QUOTE_ALL = 'QUOTE_ALL',
  QUOTE_MINIMAL = 'QUOTE_MINIMAL',
  QUOTE_NONNUMERIC = 'QUOTE_NONNUMERIC',
  QUOTE_NONE = 'QUOTE_NONE',
}

export type TReaderFunction = (csvFile: TCSVFile, dialect?: TDialect, fmtParams?: TFmtParams) => IReader; // TODO: implement

export type TWriterFunction = (csvFile: TCSVFile, dialect?: TDialect, fmtParams?: TFmtParams) => IWriter; // TODO: implement

export type TRegisterDialectFunction = (name: TDialectName, dialect?: TDialect, fmtParams?: TFmtParams) => void; // TODO: implement

export type TUnregisterDialectFunction = (name: TDialectName) => void; // TODO: implement

export type TGetDialectFunction = (name: TDialectName) => Readonly<TDialect>; // TODO: implement

export type TListDialectsFunction = () => TDialectName[]; // TODO: implement

export type TFieldSizeLimitFunction = (newLimit?: TSizeLimit) => TSizeLimit; // TODO: implement

export interface IDictReader extends IReader { // TODO: implement
  fieldnames: string[];
}

export interface IDictWriter extends IWriter { // TODO: implement
  writeheader(): any;
}

export interface IDialect { // TODO: implement
  delimiter: string;
  doublequote: boolean;
  escapechar: string;
  lineterminator: string;
  quotechar: string;
  quoting: EQuoting;
  skipinitialspace: boolean;
  strict: boolean;
}

export interface IExcel { // TODO: implement

}

export interface IExcelTab { // TODO: implement

}

export interface IUnixDialect { // TODO: implement

}

export type TSample = any; // TODO: implement

export interface ISniffer { // TODO: implement
  sniff(sample: TSample, delimeters?: string[]): IDialect;
  hasHeader(sample: TSample): boolean;
}