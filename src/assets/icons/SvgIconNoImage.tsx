import * as React from 'react';
import Svg, {Path, Text} from 'react-native-svg';
import {ExtendedSvgProps} from './types';

const SvgIconNoImage = (props: ExtendedSvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 100 125"
    enableBackground="new 0 0 100 100"
    {...props}>
    <Path d="M33.94 36.85c0 3.74 3.03 6.76 6.76 6.76 3.72 0 6.76-3.03 6.76-6.76 0-3.72-3.04-6.76-6.76-6.76-3.73 0-6.76 3.04-6.76 6.76zm9.3 0c0 1.39-1.14 2.53-2.53 2.53s-2.53-1.14-2.53-2.53 1.14-2.53 2.53-2.53 2.53 1.14 2.53 2.53z" />
    <Path d="M26.11 65.91l6.56-9.8c.32-.47.83-.75 1.39-.75.56 0 1.07.28 1.39.75l.35.51 3.03-3.03a5.845 5.845 0 00-4.77-2.46c-1.95 0-3.79.98-4.9 2.61l-3.05 4.57v-32.2h40.2l4.23-4.23H24c-1.16 0-2.12.95-2.12 2.12v46.55l4.23-4.23v-.41zM78.12 76V29.46l-4.23 4.23v27.02L61.7 45.88l-3 3 15.18 18.51v6.51h-40.2l-4.23 4.23H76c1.17-.01 2.12-.96 2.12-2.13zM17.28 85.4c.69 0 1.37-.26 1.89-.78l65.45-65.45a2.674 2.674 0 000-3.79 2.674 2.674 0 00-3.79 0L15.38 80.83a2.674 2.674 0 001.9 4.57z" />
    <Text
      y={115}
      fontSize="15px"
      fontWeight="bold"
      fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">
      {'Imagen no válida'}
    </Text>
  </Svg>
);
export default SvgIconNoImage;
