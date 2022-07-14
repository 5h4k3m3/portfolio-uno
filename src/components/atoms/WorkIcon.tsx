import { FC } from "react";

type WorkIconProps = {
  linkTo: string;
  imgSrc: string;
};

export const WorkIcon: FC<WorkIconProps> = (props) => {
  return props.linkTo ? (
    /* icon with link */
    <div className="neumoIcon btn">
      <a href={props.linkTo} className="flex items-center justify-center">
        <img src={props.imgSrc} className="rounded-full p-2" />
      </a>
    </div>
  ) : (
    /* icon only */
    <div className="neumoIcon flex items-center justify-center h-20 w-20">
      <img src={props.imgSrc} className="rounded-full p-2" />
    </div>
  );
};
