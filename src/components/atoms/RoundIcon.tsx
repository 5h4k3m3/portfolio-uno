import { FC } from "react";

type RoundIconProps = {
  linkTo: string;
  imgSrc: string;
};

export const RoundIcon: FC<RoundIconProps> = (props) => {
  return props.linkTo ? (
    /* icon with link */
    <div className="neumoIcon btn">
      <a href={props.linkTo}>
        <img
          src={props.imgSrc}
          className="rounded-full items-center justify-center h-20 w-20 p-2"
        />
      </a>
    </div>
  ) : (
    /* icon only */
    <div className="neumoIcon">
      <img
        src={props.imgSrc}
        className="rounded-full items-center justify-center h-20 w-20 p-2"
      />
    </div>
  );
};
