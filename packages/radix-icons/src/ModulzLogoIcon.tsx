import * as React from 'react';
import { IconProps } from './types';

export const ModulzLogoIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1.05 9.76669L3.80556 11.8334 1.05 13.9V9.76669zM1.05 3.98892L3.80556 6.05558 1.05 8.12225V3.98892zM4.42038 1.1L7.17593 3.16667 4.42038 5.23333V1.1zM7.79074 3.98892L10.5463 6.05558 7.79074 8.12225V3.98892zM11.1611 1.1L13.9167 3.16667 11.1611 5.23333V1.1zM11.1611 6.87777L13.9167 8.94444 11.1611 11.0111V6.87777zM3.83889 6.87777V11.0111L1.08333 8.94444 3.83889 6.87777zM7.20927 3.98892V8.12225L4.45371 6.05558 7.20927 3.98892zM3.83889 1.1V5.23333L1.08333 3.16667 3.83889 1.1zM10.5796 1.1V5.23333L7.82407 3.16667 10.5796 1.1zM13.95 3.98892V8.12225L11.1944 6.05558 13.95 3.98892zM13.95 9.76669V13.9L11.1944 11.8334 13.95 9.76669z"
        fill={color}
        stroke={color}
        strokeWidth=".1"
      />
    </svg>
  );
};

export default ModulzLogoIcon;
