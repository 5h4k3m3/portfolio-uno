import { FC } from "react";

export const Title: FC = () => {
  return (
    <div className="relative font-zenMaru font-bold space-y-4">
      <h1 className="titleAccent text-6xl text-mainText">Salmon's</h1>
      <h2 className="text-4xl text-background textShadow">#Shake Me?</h2>
    </div>
  );
};
