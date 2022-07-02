import { Navigation } from "../components/molecules/Navigation";
import { Title } from "../components/molecules/Title";
import "../main.css";

export const Home = () => {
  return (
    <div className="flex justify-between h-1/4 ml-36 mr-20 pt-32 pb-20">
      <Title />
      <Navigation />
    </div>
  );
};
