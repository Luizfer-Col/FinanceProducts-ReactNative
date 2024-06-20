import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {ExtendedSvgProps} from './types';

const SvgIconCLose = (props: ExtendedSvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#5f6368"
    viewBox="0 -960 960 960"
    {...props}>
    <Path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
  </Svg>
);
export default SvgIconCLose;
