import { FC } from "react";
import { NavButton } from "../atoms/NavButton";
import { NavIcon } from "../atoms/NavIcon";
import HomeIcon from "../../images/home.png";

export const Navigation: FC = () => {
  return (
    <nav className="w-full ">
      <ul className="w-full flex items-center justify-evenly">
        <li>
          <NavIcon linkTo={"/"} imgSrc={HomeIcon} alt={"Home"} />
        </li>
        <li>
          <NavButton title={"About"} linkTo={"/about"} />
        </li>
        <li>
          <NavButton title={"Works"} linkTo={"/works"} />
        </li>
        <li>
          <NavButton title={"Skills"} linkTo={"/skills"} />
        </li>
      </ul>
    </nav>
  );
};
