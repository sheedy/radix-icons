import * as React from 'react';
import { IconProps } from './types';

export const ComponentBooleanIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7.8537 1.48957C7.65844 1.29431 7.34186 1.29431 7.14659 1.48957L1.48974 7.14642C1.29448 7.34169 1.29448 7.65827 1.48974 7.85353L7.14659 13.5104C7.34186 13.7056 7.65844 13.7056 7.8537 13.5104L13.5106 7.85353C13.7058 7.65827 13.7058 7.34169 13.5106 7.14642L7.8537 1.48957ZM7.50003 2.55035L2.5504 7.49998L7.50003 12.4496V2.55035Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ComponentBooleanIcon;
