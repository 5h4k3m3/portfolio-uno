import { SkillCard } from "../components/SkillCard";
import { SubTitle } from "../components/atoms/SubTitle";

export const Works = () => {
  return (
    <div className="m-20 absolute">
      <SubTitle># Works</SubTitle>
      <div className="flex justify-between px-8">
        <SkillCard title="Portfolio" comment="#beginner" />
        <SkillCard title="Discord Bot" comment="#beginner" />
        <SkillCard title="WIP" comment="" />
        <SkillCard title="WIP" comment="" />
      </div>
    </div>
  );
};
