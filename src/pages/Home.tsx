import { FC } from "react";
import { RoundIcon } from "../components/atoms/RoundIcon";
import { Title } from "../components/molecules/Title";

import SalmonImg from "../images/salmons.png";

export const Home: FC = () => {
  return (
    <div className="relative flex flex-col items-center mt-32 space-y-20">
      <Title />
      <RoundIcon imgSrc={SalmonImg} linkTo={""} />
    </div>
  );
};
