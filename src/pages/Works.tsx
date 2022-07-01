import { SkillCard } from "../components/SkillCard";
import { SubTitle } from "../components/atoms/SubTitle";

export const Works = () => {
  return (
    <>
      <SubTitle># Works</SubTitle>
      <div className="flex h-1/3 justify-between px-8">
        <SkillCard title="Portfolio" comment="#beginner" />
        <SkillCard title="Discord Bot" comment="#beginner" />
        <SkillCard title="WIP" comment="" />
        <SkillCard title="WIP" comment="" />
      </div>
    </>
  );
};
