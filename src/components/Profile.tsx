import "../main.css";
import ProfileImg from "../images/profile.jpg";

export const Profile = () => {
  return (
    <div className="flex">
      <div className="iconWrapper w-64 h-64 mt-12 ml-32">
        <img
          src={ProfileImg}
          className="rounded-full items-center justify-center p-4"
        />
      </div>
      <div className="nameWrapper font-zenMaru font-bold px-10 pt-24 pb-10">
        <h3 className="text-2xl text-mainText pb-2 ml-2"># Name</h3>
        <p className="text-5xl text-mainText pb-4">しゃけのきりみ</p>
        <p className="text-4xl text-subText ml-2">Salmon Fillet</p>
      </div>
    </div>
  );
};
