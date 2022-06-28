import "./Home.css";

export const Home = () => {
  return (
    <>
      <div className="profile-components">
        <div className="profile">
          <h1>Salmon's</h1>
          <h2>Shake Me?</h2>

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
