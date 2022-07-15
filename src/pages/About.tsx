import { FC } from "react";
import { SubTitle } from "../components/atoms/SubTitle";
import { Profile } from "../components/organisms/Profile";

export const About: FC = () => {
  return (
    <div className="relative flex items-center flex-col">
      <SubTitle># About</SubTitle>
      <Profile />
    </div>
  );
};
