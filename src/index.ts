import {
  TCSVFile,
  TDialect,
  TExtrasaction,
  IDictReader,
  IDictWriter,
  TReaderFunction,
  TWriterFunction,
  IExcel,
  IExcelTab,
  IUnixDialect,
  ISniffer,
  EQuoting,
} from '@types';
export { fieldSizeLimit } from '@functions/fieldSizeLimit';
export { listDialects } from '@functions/listDialects';
export { Dialect } from '@classes/Dialect';
export { registerDialect } from '@functions/registerDialect';
export { unregisterDialect } from '@functions/unregisterDialect';
export { getDialect } from '@functions/getDialect';
export { CsvError } from '@classes/CsvError';

// TODO: implement
export const reader: TReaderFunction = (csvFile, dialect, fmtParams) => {};

// TODO: implement
export const writer: TWriterFunction = (csvFile, dialect, fmtParams) => {};

// TODO: implement
export class DictReader implements IDictReader {
  constructor(f: TCSVFile, fieldNames?: string[], restKey?: string, restVal?: string, dialect?: TDialect) {}
}

// TODO: implement
export class DictWriter implements IDictWriter {
  constructor(f: TCSVFile, fieldNames: string[], restVal?: string, extrasaction?: TExtrasaction, dialect?: TDialect) {}
}

// TODO: implement
export class excel implements IExcel {}

// TODO: implement
export class excelTab implements IExcelTab {}

// TODO: implement
export class unixDialect implements IUnixDialect {}

// TODO: implement
export class Sniffer implements ISniffer {}

// constants
// TODO: implement
export const QUOTE_ALL = EQuoting.QUOTE_ALL;
export const QUOTE_MINIMAL = EQuoting.QUOTE_MINIMAL;
export const QUOTE_NONNUMERIC = EQuoting.QUOTE_NONNUMERIC;
export const QUOTE_NONE = EQuoting.QUOTE_NONE;
