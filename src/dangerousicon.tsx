import React, { FC, ImgHTMLAttributes } from "react";
import SENDRAILS from "./public/SENDRAILS.png";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
}

const Image: FC<ImageProps> = ({ alt, ...restProps }) => {
  return <img src={SENDRAILS} alt={alt} {...restProps} />;
};

export default Image;
