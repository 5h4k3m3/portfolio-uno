import "../main.css";
import GithubImg from "../images/github.png";
import TwitterImg from "../images/twitter.png";
import QiitaImg from "../images/qiita.png";

export const Navigation = () => {
  return (
    <div className="mt-32 ml-24">
      <ul className="list-none font-zenMaru text-4xl font-bold text-subText items-center justify-center m-10">
        <li className="neumoButton px-16 py-4 my-10">
          <a># About</a>
        </li>
        <li className="neumoButton px-16 py-4 my-10">
          <a># Works</a>
        </li>
        <li className="neumoButton px-16 py-4 my-10">
          <a># Skills</a>
        </li>
      </ul>
      <div className="flex items-center justify-center">
        <div className="linkIcon w-16 h-16 m-4">
          <img
            src={GithubImg}
            className="rounded-full items-center justify-center p-2"
          />
        </div>
        <div className="linkIcon w-16 h-16 m-4">
          <img
            src={TwitterImg}
            className="rounded-full items-center justify-center p-2"
          />
        </div>
        <div className="linkIcon w-16 h-16 m-4">
          <img
            src={QiitaImg}
            className="rounded-full items-center justify-center p-2"
          />
        </div>
      </div>
    </div>
  );
};
