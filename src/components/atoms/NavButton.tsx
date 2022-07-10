import { FC } from "react";

type NavButtonProps = {
  title: string;
  linkTo: string;
};

export const NavButton: FC<NavButtonProps> = (props) => {
  return (
    <a
      href={props.linkTo}
      className="neumoButton px-16 py-1 text-mainText font-zenMaru font-bold text-2xl block width-full"
    >
      {props.title}
    </a>
  );
};
