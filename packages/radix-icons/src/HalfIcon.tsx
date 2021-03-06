import * as React from 'react';
import { IconProps } from './types';

export const HalfIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7.49988 0.876892C3.84219 0.876892 0.877045 3.84204 0.877045 7.49972C0.877045 11.1574 3.84219 14.1226 7.49988 14.1226C11.1575 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1575 0.876892 7.49988 0.876892ZM7 1.84861C4.10111 2.1017 1.82704 4.53515 1.82704 7.49972C1.82704 10.4643 4.10111 12.8977 7 13.1508V1.84861ZM8 13.1508C10.8988 12.8976 13.1727 10.4642 13.1727 7.49972C13.1727 4.53524 10.8988 2.10185 8 1.84864V13.1508Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default HalfIcon;
