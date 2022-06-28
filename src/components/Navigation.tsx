import "../main.css";

export const Navigation = () => {
  return (
    <div className="navigationCard mt-28 ml-40 flex">
      <ul className="list-none font-zenMaru text-4xl font-bold text-mainText items-center justify-center m-10">
        <li className="cursor-pointer p-4">
          <a># About</a>
        </li>
        <li className="cursor-pointer p-4">
          <a># Works</a>
        </li>
        <li className="cursor-pointer p-4">
          <a># Skills</a>
        </li>
      </ul>
    </div>
  );
};
