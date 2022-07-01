import { FC } from "react";

type NavButtonProps = {
  title: string;
  linkTo: string;
};

export const NavButton: FC<NavButtonProps> = (props) => {
  return (
    <div className="neumoButton btn px-20 py-4 text-mainText font-zenMaru font-bold text-4xl">
      <a href={props.linkTo}>{props.title}</a>
    </div>
  );
};
