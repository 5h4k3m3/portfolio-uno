import { FC } from "react";
import { Link } from "react-router-dom";

type NavButtonProps = {
  title: string;
  linkTo: string;
};

export const NavButton: FC<NavButtonProps> = (props) => {
  return (
    <Link
      to={props.linkTo}
      className="neumoButton px-4 py-2 text-mainText font-zenMaru font-bold text-xl block width-full"
    >
      {props.title}
    </Link>
  );
};
