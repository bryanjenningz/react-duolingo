import dayjs from "dayjs";
import type { BoundStateCreator } from "~/hooks/useBoundStore";
import type { DateString } from "~/utils/dateString";
import { toDateString } from "~/utils/dateString";
import { range, sum } from "~/utils/array-utils";

const addXpToday = (xpByDate: XpByDate, xp: number): XpByDate => {
  return addXp(xpByDate, xp, dayjs());
};

const addXp = (xpByDate: XpByDate, xp: number, date: dayjs.Dayjs): XpByDate => {
  return {
    ...xpByDate,
    [toDateString(date)]: xpAt(xpByDate, date) + xp,
  };
};

const xpAt = (xpByDate: XpByDate, date: dayjs.Dayjs): number => {
  return xpByDate[toDateString(date)] ?? 0;
};

type XpByDate = Record<DateString, number>;

export type XpSlice = {
  xpByDate: XpByDate;
  increaseXp: (by: number) => void;
  xpToday: () => number;
  xpThisWeek: () => number;
};

export const createXpSlice: BoundStateCreator<XpSlice> = (set, get) => ({
  xpByDate: {},
  increaseXp: (by: number) => set({ xpByDate: addXpToday(get().xpByDate, by) }),
  xpToday: () => xpAt(get().xpByDate, dayjs()),
  xpThisWeek: () => {
    return sum(
      range(0, dayjs().day() + 1).map((daysBack) =>
        xpAt(get().xpByDate, dayjs().add(-daysBack)),
      ),
    );
  },
});
