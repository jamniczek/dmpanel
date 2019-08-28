import React from "react";
import Konva from "konva";
import { Circle } from "react-konva";

const Token = ({ x, y, radius, fill, stroke, strokeWidth }) => {
  return (
    <Circle
      x={x}
      y={y}
      radius={radius}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  );
};

export default Token;
