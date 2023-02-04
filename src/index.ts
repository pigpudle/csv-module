import { TCSVFile, TDialect, TExtrasaction, TFieldSizeLimitFunction, TGetDialectFunction, IDictReader, IDictWriter, TListDialectsFunction, TReaderFunction, TRegisterDialectFunction, TUnregisterDialectFunction, TWriterFunction, IDialect, IExcel, IExcelTab, IUnixDialect, ISniffer, EQuoting } from "./types";

// TODO: implement
export const reader: TReaderFunction = (csvFile, dialect, fmtParams) => {

};

// TODO: implement
export const writer: TWriterFunction = (csvFile, dialect, fmtParams) => {

};

// TODO: implement
export const registerDialect: TRegisterDialectFunction = (name, dialect, fmtParams) => {

};

// TODO: implement
export const unregisterDialect: TUnregisterDialectFunction = (name) => {

};

// TODO: implement
export const getDialect: TGetDialectFunction = (name) => {

};

// TODO: implement
export const listDialects: TListDialectsFunction = () => {
  
};

// TODO: implement
export const fieldSizeLimit: TFieldSizeLimitFunction = () => {

};

// TODO: implement
export class DictReader implements IDictReader {
  constructor(f: TCSVFile, fieldNames?: string[], restKey?: string, restVal?: string, dialect?: TDialect) {

  }
}

// TODO: implement
export class DictWriter implements IDictWriter {
  constructor(f: TCSVFile, fieldNames: string[], restVal?: string, extrasaction?: TExtrasaction, dialect?: TDialect) {

  }
}

// TODO: implement
export class Dialect implements IDialect {

}

// TODO: implement
export class excel implements IExcel {

}

// TODO: implement
export class excelTab implements IExcelTab {
  
}

// TODO: implement
export class unixDialect implements IUnixDialect {
  
}

// TODO: implement
export class Sniffer implements ISniffer {
  
}

// constants
// TODO: implement
export const QUOTE_ALL = EQuoting.QUOTE_ALL;
export const QUOTE_MINIMAL = EQuoting.QUOTE_MINIMAL;
export const QUOTE_NONNUMERIC = EQuoting.QUOTE_NONNUMERIC;
export const QUOTE_NONE = EQuoting.QUOTE_NONE;