import { FC, ReactNode } from "react";

type CardType = {
  children: ReactNode;
};
export const Card: FC<CardType> = (props) => {
  return <div className="relative t-0 l-0 neumoCard">{props.children}</div>;
};
