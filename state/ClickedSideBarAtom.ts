import { atom } from "recoil";

export const clickedSideBarAtom = atom<boolean>({
  key: "clickedSideBarAtom",
  default: false,
});
