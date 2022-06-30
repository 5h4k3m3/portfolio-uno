import { FC, ReactNode } from "react";
import "../main.css";

type Props = {
  children: ReactNode;
};

export const SubTitle: FC<Props> = (props) => {
  return (
    <div className="subTitle">
      <h2>{props.children}</h2>
    </div>
  );
};
