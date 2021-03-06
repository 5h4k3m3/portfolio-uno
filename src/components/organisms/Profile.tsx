import { FC } from "react";
import { RoundIcon } from "../atoms/RoundIcon";
import { SocialIcons } from "../molecules/SocialIcons";

import ProfileImg from "../../images/profile.jpg";

export const Profile: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-16 mx-4">
      <RoundIcon imgSrc={ProfileImg} linkTo={""} />
      <div className="font-zenMaru font-bold px-4 py-8">
        <p className="text-3xl text-mainText pb-2">しゃけのきりみ</p>
        <p className="text-2xl text-subText ml-2">Salmon Fillet</p>
      </div>
      <SocialIcons />
    </div>
  );
};
