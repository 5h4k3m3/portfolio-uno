import "../main.css";

export const Navigation = () => {
  return (
    <div className="mt-28 ml-40 flex">
      <ul className="list-none font-zenMaru text-4xl font-bold text-mainText items-center justify-center m-10">
        <li className="neumoButton p-6 my-10">
          <a># About</a>
        </li>
        <li className="neumoButton p-6 my-10">
          <a># Works</a>
        </li>
        <li className="neumoButton p-6 my-10">
          <a># Skills</a>
        </li>
      </ul>
    </div>
  );
};
