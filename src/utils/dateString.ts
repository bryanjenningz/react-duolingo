import type dayjs from "dayjs";

const DATE_STRING_FORMAT = "YYYY-MM-DD";

export type DateString =
  `${number}${number}${number}${number}-${number}${number}-${number}${number}`;

export const toDateString = (day: dayjs.Dayjs): DateString => {
  return day.format(DATE_STRING_FORMAT) as DateString;
};
