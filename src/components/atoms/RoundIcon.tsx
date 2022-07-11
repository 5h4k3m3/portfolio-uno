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
          className="rounded-full items-center justify-center h-14 w-14 p-2"
        />
      </a>
    </div>
  ) : (
    /* icon only */
    <div className="neumoIcon flex h-36 w-36">
      <img
        src={props.imgSrc}
        className="rounded-full items-center justify-center p-2"
      />
    </div>
  );
};
