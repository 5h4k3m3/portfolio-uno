import { Navigation } from "../components/molecules/Navigation";
import { Title } from "../components/molecules/Title";
import "../main.css";

export const Home = () => {
  return (
    <div className="relative flex flex-col items-center mt-40 space-y-20">
      <Title />
      <Navigation />
    </div>
  );
};
