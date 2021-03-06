import * as React from 'react';
import { IconProps } from './types';

export const BoxModelIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1.04999 13.5V1.49999C1.04999 1.25146 1.25146 1.04999 1.49999 1.04999H13.5C13.7485 1.04999 13.95 1.25146 13.95 1.49999V13.5C13.95 13.7485 13.7485 13.95 13.5 13.95H1.49999C1.25146 13.95 1.04999 13.7485 1.04999 13.5ZM1.94999 12.4136L3.99999 10.3636V10.1V4.89999V4.63638L1.94999 2.58638V12.4136ZM2.58638 1.94999L4.63638 3.99999H4.89999H10.1H10.3636L12.4136 1.94999H2.58638ZM13.05 2.58638L11 4.63638V4.89999V10.1V10.3636L13.05 12.4136V2.58638ZM12.4136 13.05L10.3636 11H10.1H4.89999H4.63638L2.58638 13.05H12.4136ZM10.1 4.89999H4.89999V10.1H10.1V4.89999Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default BoxModelIcon;
