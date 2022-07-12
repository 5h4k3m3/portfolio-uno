import { FC } from "react";

type SkillIconProps = {
  imgSrc: string;
};

export const SkillIcon: FC<SkillIconProps> = (props) => {
  return <img src={props.imgSrc} className="h-14 w-auto" />;
};
