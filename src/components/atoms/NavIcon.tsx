import { FC } from "react";
import { Link } from "react-router-dom";

type NavIconProps = {
  linkTo: string;
  imgSrc: string;
  alt: string;
};

export const NavIcon: FC<NavIconProps> = (props) => {
  return (
    <Link to={props.linkTo} className="neumoIcon btn p-4 block w-16">
      <img src={props.imgSrc} alt={props.alt} />
    </Link>
  );
};
