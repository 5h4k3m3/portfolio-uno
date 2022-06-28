import { Navigation } from "../components/Navigation";
import { Profile } from "../components/Profile";
import { Title } from "../components/Title";
import "../main.css";

export const Home = () => {
  return (
    <>
      <Title />
      <Profile />
      <Navigation />
    </>
  );
};
