import { FC } from "react";

type NavButtonProps = {
  title: string;
  linkTo: string;
};

export const NavButton: FC<NavButtonProps> = (props) => {
  return (
    <div className="text-mainText font-zenMaru font-bold text-2xl">
      <a href={props.linkTo} className="neumoButton textBtn px-16 py-0">
        {props.title}
      </a>
    </div>
  );
};
