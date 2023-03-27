"use client";

import { clickedSideBarAtom } from "../state/ClickedSideBarAtom";
import { useRecoilState } from "recoil";

export default function OutsideDetector({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClicked, setIsClicked] = useRecoilState(clickedSideBarAtom);
  return (
    <div
      onClick={() => {
        return setIsClicked(false);
      }}
      className="w-full"
    >
      {children}
    </div>
  );
}
