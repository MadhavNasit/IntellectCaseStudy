import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';

const HomeIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" {...props}>
    <Path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212"
    />
    <Path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M480 256 266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"
    />
  </Svg>
);
const Memo = memo(HomeIcon);
export default Memo;
