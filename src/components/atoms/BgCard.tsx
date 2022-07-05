import { FC, ReactNode } from "react";

type BgCardType = {
  children: ReactNode;
};
export const BgCard: FC<BgCardType> = (props) => {
  return <div className="bgCard relative">{props.children}</div>;
};
