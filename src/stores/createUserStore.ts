import dayjs from "dayjs";
import type { BoundStateCreator } from "~/hooks/useBoundStore";

export type UserSlice = {
  name: string;
  username: string;
  joinedAt: dayjs.Dayjs;
  loggedIn: boolean;
  setName: (name: string) => void;
  setUsername: (username: string) => void;
  logIn: () => void;
  logOut: () => void;
};

export const createUserSlice: BoundStateCreator<UserSlice> = (set) => ({
  name: "",
  username: "",
  joinedAt: dayjs(),
  loggedIn: false,
  setName: (name: string) => set(() => ({ name })),
  setUsername: (username: string) => set(() => ({ username })),
  logIn: () => set(() => ({ loggedIn: true })),
  logOut: () => set(() => ({ loggedIn: false })),
});
