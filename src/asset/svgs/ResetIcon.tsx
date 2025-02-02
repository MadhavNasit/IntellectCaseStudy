import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';

const ResetIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" {...props}>
    <Path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={32}
      d="M320 146s24.36-12-64-12a160 160 0 1 0 160 160"
    />
    <Path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="m256 58 80 80-80 80"
    />
  </Svg>
);

const Memo = memo(ResetIcon);
export default Memo;
