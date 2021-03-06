import * as React from 'react';
import { IconProps } from './types';

export const ShadowNoneIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12.2306 0.523491C12.4259 0.718753 12.4259 1.03534 12.2306 1.2306L1.2306 12.2306C1.03534 12.4259 0.718753 12.4259 0.523491 12.2306C0.328229 12.0353 0.328229 11.7188 0.523491 11.5235L11.5235 0.523491C11.7188 0.328229 12.0353 0.328229 12.2306 0.523491Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ShadowNoneIcon;
