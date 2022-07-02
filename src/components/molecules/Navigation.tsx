import { FC } from "react";
import { NavButton } from "../atoms/NavButton";

export const Navigation: FC = () => {
  return (
    <ul className="space-y-8">
      <li>
        <NavButton title={"#About"} linkTo={""} />
      </li>
      <li>
        <NavButton title={"#Works"} linkTo={""} />
      </li>
      <li>
        <NavButton title={"#Skills"} linkTo={""} />
      </li>
    </ul>
  );
};
