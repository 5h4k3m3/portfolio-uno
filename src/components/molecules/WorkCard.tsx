import { FC } from "react";
import { RoundIcon } from "../atoms/RoundIcon";

type WorkCardProps = {
  imgSrc: string;
  title: string;
  tags: string[];
};

export const WorkCard: FC<WorkCardProps> = (props) => {
  return (
    <div className="flex flex-col items-center justify-center mt-16 mx-4">
      <RoundIcon imgSrc={props.imgSrc} linkTo={""} />
      <h3>{props.title}</h3>
      {props.tags.map((item) => (
        <p>#{item}</p>
      ))}
    </div>
  );
};
