import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 640 537" {...props}>
      <image width="640" height="537" href="/images/egg/logo.png"/>
    </Svg>
  );
};

export default Icon;
