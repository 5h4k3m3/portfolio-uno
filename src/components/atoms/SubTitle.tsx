import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const SubTitle: FC<Props> = (props) => {
  return (
    <h2 className="font-zenMaru font-bold text-4xl text-mainText">
      {props.children}
    </h2>
  );
};
