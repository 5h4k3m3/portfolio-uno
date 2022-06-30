import { FC, ReactNode } from "react";
import "../main.css";

type Props = {
  children: ReactNode;
};

export const SubTitle: FC<Props> = (props) => {
  return (
    <div className="font-zenMaru font-bold text-4xl text-mainText">
      <h2>{props.children}</h2>
    </div>
  );
};
