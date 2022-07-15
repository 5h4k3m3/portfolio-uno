import { FC } from "react";
import { SubTitle } from "../components/atoms/SubTitle";
import { WorkCard } from "../components/molecules/WorkCard";

import SalmonIcon from "../images/salmons.png";
import DiscordIcon from "../images/discord.png";

export const Works: FC = () => {
  return (
    <div className="relative flex items-center flex-col">
      <SubTitle># Works</SubTitle>
      <div className="flex flex-col space-y-8 mt-10">
        <WorkCard
          imgSrc={SalmonIcon}
          title="Portfolio"
          tags={["TypeScript", "React", "TailwindCSS"]}
        />
        <WorkCard
          imgSrc={DiscordIcon}
          title="Discord Bot"
          tags={["JavaScript"]}
        />
      </div>
    </div>
  );
};
