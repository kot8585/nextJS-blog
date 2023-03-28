import { atom } from "recoil";

export const clickedSideBarAtom = atom<boolean>({
  key: "clickedSideBar",
  default: false,
});
