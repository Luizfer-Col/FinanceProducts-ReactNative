import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {ExtendedSvgProps} from './types';

const SvgIconArrowRight = (props: ExtendedSvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#5f6368"
    viewBox="0 -960 960 960"
    {...props}>
    <Path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
  </Svg>
);
export default SvgIconArrowRight;
