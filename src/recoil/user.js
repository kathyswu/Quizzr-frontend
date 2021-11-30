import { atom, selector } from "recoil";

export const userState = atom({
  key: "userState",
  default: null,
});

export const loggedInState = selector({
  key: "loggedInState",
  get: ({ get }) => {
    const user = get(userState);
    return user ? true : false;
  },
});
