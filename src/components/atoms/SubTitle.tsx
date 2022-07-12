import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const SubTitle: FC<Props> = (props) => {
  return (
    <div className="neumoCardInset flex items-center justify-start mt-4">
      <h2 className="font-zenMaru font-bold text-2xl ml-4 my-2 text-mainText">
        {props.children}
      </h2>
    </div>
  );
};
