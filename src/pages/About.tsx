import { SubTitle } from "../components/atoms/SubTitle";
import { Profile } from "../components/Profile";

export const About = () => {
  return (
    <div className="relative flex items-center flex-col">
      <SubTitle># About</SubTitle>
      <Profile />
    </div>
  );
};
