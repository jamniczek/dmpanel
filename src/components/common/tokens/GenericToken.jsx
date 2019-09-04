import React from 'react';
import Konva from 'konva';
import { Circle } from 'react-konva';

const Token = ({
  x,
  y,
  radius = 20,
  fill = 'white',
  stroke = 'black',
  strokeWidth = 2
}) => {
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
