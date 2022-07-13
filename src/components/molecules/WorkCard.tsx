import { FC } from "react";
import { RoundIcon } from "../atoms/RoundIcon";

type WorkCardProps = {
  imgSrc: string;
  title: string;
  tags: string[];
};

export const WorkCard: FC<WorkCardProps> = (props) => {
  return (
    <div className="neumoWorkCard flex items-center p-8 font-zenMaru">
      <RoundIcon imgSrc={props.imgSrc} linkTo={""} />
      <h3 className="text-2xl text-mainText font-bold pt-4">{props.title}</h3>
      <div className="items-left space-y-2">
        {props.tags.map((item) => (
          <p className="text-base font-bold text-subText">#{item}</p>
        ))}
      </div>
    </div>
  );
};
