import { FC } from "react";
import { NavButton } from "../atoms/NavButton";

export const Navigation: FC = () => {
  return (
    <ul className="w-full flex items-center justify-evenly">
      <li>
        <NavButton title={"About"} linkTo={""} />
      </li>
      <li>
        <NavButton title={"Works"} linkTo={""} />
      </li>
      <li>
        <NavButton title={"Skills"} linkTo={""} />
      </li>
    </ul>
  );
};
