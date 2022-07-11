import { SubTitle } from "../components/atoms/SubTitle";
import { Profile } from "../components/Profile";

export const About = () => {
  return (
    <div className="relative flex flex-col mt-0">
      <SubTitle># About</SubTitle>
      <Profile />
    </div>
  );
};
