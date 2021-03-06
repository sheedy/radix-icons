import * as React from 'react';
import { IconProps } from './types';

export const Cross2Icon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11.7286 3.97855C11.9238 3.78329 11.9238 3.46671 11.7286 3.27145C11.5333 3.07618 11.2167 3.07618 11.0214 3.27145L7.5 6.79289L3.97855 3.27145C3.78329 3.07618 3.46671 3.07618 3.27145 3.27145C3.07618 3.46671 3.07618 3.78329 3.27145 3.97855L6.79289 7.5L3.27145 11.0214C3.07618 11.2167 3.07618 11.5333 3.27145 11.7286C3.46671 11.9238 3.78329 11.9238 3.97855 11.7286L7.5 8.20711L11.0214 11.7286C11.2167 11.9238 11.5333 11.9238 11.7286 11.7286C11.9238 11.5333 11.9238 11.2167 11.7286 11.0214L8.20711 7.5L11.7286 3.97855Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Cross2Icon;
