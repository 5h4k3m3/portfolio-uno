import { FC, ReactNode } from "react";

type BgCardType = {
  children: ReactNode;
};
export const BgCard: FC<BgCardType> = (props) => {
  return (
    <div className="relative bgCard select-none mx-28 mt-16 h-4/5">
      {props.children}
    </div>
  );
};
