import { Navigation } from "../components/Navigation";
import { Profile } from "../components/Profile";
import { Title } from "../components/Title";
import "../main.css";

export const Home = () => {
  return (
    <div className="flex">
      <div>
        <Title />
        <Profile />
      </div>
      <div>
        <Navigation />
      </div>
    </div>
  );
};
