import { FC } from "react";
import "../main.css";

type Skill = {
  title: string;
  comment: string;
};

export const SkillCard: FC<Skill> = (props) => {
  return (
    <>
      <div className="skillCard w-1/5 h-1/4 mx-6 my-10">
        <p className="text-2xl">{props.title}</p>
        <p>{props.comment}</p>
      </div>
    </>
  );
};
