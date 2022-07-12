import { SkillCard } from "../components/SkillCard";
import { SubTitle } from "../components/atoms/SubTitle";
import { Card } from "../components/atoms/Card";

export const Works = () => {
  return (
    <Card>
      <div className="absolute w-full m-20">
        <SubTitle># Works</SubTitle>
        <div className="flex justify-between w-4/5 px-8">
          <SkillCard title="Portfolio" comment="#beginner" />
          <SkillCard title="Discord Bot" comment="#beginner" />
          <SkillCard title="WIP" comment="" />
          <SkillCard title="WIP" comment="" />
        </div>
      </div>
    </Card>
  );
};
