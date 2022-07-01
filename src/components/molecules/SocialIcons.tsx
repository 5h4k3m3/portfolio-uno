import { FC } from "react";
import { RoundIcon } from "../atoms/RoundIcon";

import GithubImg from "../../images/github.png";
import TwitterImg from "../../images/twitter.png";
import QiitaImg from "../../images/qiita.png";

export const SocialIcons: FC = () => {
  return (
    <div className="flex items-center justify-center space-x-10">
      <RoundIcon imgSrc={GithubImg} linkTo={"#"} />
      <RoundIcon imgSrc={TwitterImg} linkTo={"#"} />
      <RoundIcon imgSrc={QiitaImg} linkTo={"#"} />
    </div>
  );
};
