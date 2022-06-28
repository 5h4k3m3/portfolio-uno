import "../main.css";

export const SubTitle: React.FC<string> = (text: string) => {
  return (
    <div className="subTitle">
      <h2>{text}</h2>
    </div>
  );
};
