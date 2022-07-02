import { FC } from "react";

type NavButtonProps = {
  title: string;
  linkTo: string;
};

export const NavButton: FC<NavButtonProps> = (props) => {
  return (
    <div className=" px-20 py-4 text-baseColor font-zenMaru font-bold text-6xl">
      <a href={props.linkTo}>
        <h3 className="textShadow textBtn">{props.title}</h3>
      </a>
    </div>
  );
};
