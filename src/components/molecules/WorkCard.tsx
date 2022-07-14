import { FC } from "react";
import { WorkIcon } from "../atoms/WorkIcon";

type WorkCardProps = {
  imgSrc: string;
  title: string;
  tags: string[];
};

export const WorkCard: FC<WorkCardProps> = (props) => {
  return (
    <div className="neumoWorkCard flex items-center p-4 font-zenMaru">
      <WorkIcon imgSrc={props.imgSrc} linkTo={""} />
      <div className="flex flex-col ml-4">
        <h3 className="text-3xl text-mainText font-bold pt-4 pb-2">
          {props.title}
        </h3>
        <div className="items-left space-y-0 h-20">
          {props.tags.map((item) => (
            <p key={item} className="text-base font-bold text-subText">
              #{item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
