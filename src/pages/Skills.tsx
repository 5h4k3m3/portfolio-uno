import { SkillIcon } from "../components/atoms/SkillIcon";
import { SubTitle } from "../components/atoms/SubTitle";
import cppIcon from "../images/skills/cpp.png";
import csharpIcon from "../images/skills/csharp.png";
import cssIcon from "../images/skills/css3.png";
import dartIcon from "../images/skills/dart.png";
import dotnetIcon from "../images/skills/dotnet.png";
import figmaIcon from "../images/skills/figma.png";
import flutterIcon from "../images/skills/flutter.png";
import gitIcon from "../images/skills/git.png";
import htmlIcon from "../images/skills/html5.png";
import jsIcon from "../images/skills/javascript.png";
import nextjsIcon from "../images/skills/nextjs.png";
import openglIcon from "../images/skills/opengl.svg";
import pgsqlIcon from "../images/skills/postgresql.png";
import reactIcon from "../images/skills/react.svg";
import threejsIcon from "../images/skills/threejs.svg";
import tsIcon from "../images/skills/typescript.png";
import unityIcon from "../images/skills/unity.png";

export const Skills = () => {
  return (
    <div className="relative flex items-center flex-col">
      <SubTitle># Skills</SubTitle>
      <div className="w-full space-y-10 pt-10 items-center">
        <div className="flex justify-evenly">
          <SkillIcon imgSrc={cppIcon} />
          <SkillIcon imgSrc={csharpIcon} />
          <SkillIcon imgSrc={dotnetIcon} />
        </div>
        <div className="flex justify-evenly">
          <SkillIcon imgSrc={htmlIcon} />
          <SkillIcon imgSrc={cssIcon} />
          <SkillIcon imgSrc={jsIcon} />
          <SkillIcon imgSrc={tsIcon} />
        </div>
        <div className="flex justify-evenly">
          <SkillIcon imgSrc={reactIcon} />
          <SkillIcon imgSrc={nextjsIcon} />
          <SkillIcon imgSrc={openglIcon} />
          <SkillIcon imgSrc={threejsIcon} />
        </div>
        <div className="flex justify-evenly">
          <SkillIcon imgSrc={unityIcon} />
          <SkillIcon imgSrc={dartIcon} />
          <SkillIcon imgSrc={flutterIcon} />
        </div>
        <div className="flex justify-evenly">
          <SkillIcon imgSrc={pgsqlIcon} />
          <SkillIcon imgSrc={gitIcon} />
          <SkillIcon imgSrc={figmaIcon} />
        </div>
      </div>
    </div>
  );
};
