import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const SubTitle: FC<Props> = (props) => {
  return (
    <h2 className="font-zenMaru font-bold text-2xl ml-8 mt-8 text-mainText">
      {props.children}
    </h2>
  );
};
