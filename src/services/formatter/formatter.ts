import moment from 'moment';

export enum DateTimeFormats {
  DATE_TIME = 'DD-MM-yyyy HH:mm',
  DATE = 'DD-MM-yyyy',
  DATE_SLASH = 'DD/MM/yyyy',
  TIME = 'HH:mm',
  DAY_TIME = 'dddd HH:mm',
  DAY_DATE_MONTH_YEAR = 'dddd DD MMMM yyyy',
  TIME_AM_PM = 'hh:mm A',
}

export function formatTime(date: number, dateFormat?: DateTimeFormats): string {
  let format = dateFormat || DateTimeFormats.DATE;
  return moment.unix(date).format(format);
}
