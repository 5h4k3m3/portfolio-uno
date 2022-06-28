import "./Home.css";
import profileIcon from "../images/profile.jpg";
import salmonIcon from "../images/Salmons.png";

export const Home = () => {
  return (
    <>
      <div className="profileComponents">
        <div className="profile">
          <h1>Salmon's</h1>
          <h2>#Shake Me?</h2>
          <h3 className="myNameEn">Salmon Fillet</h3>
          <h3 className="myNameJp">しゃけのきりみ</h3>
          <div className="profile-icon">
            <img src={profileIcon} alt="my icon" />
          </div>
          <div className="icons"></div>
        </div>
        <div className="contents">
          <ul>
            <li>#About</li>
            <li>#Works</li>
            <li>#Skills</li>
            <li>#Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};
