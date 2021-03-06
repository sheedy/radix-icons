import * as React from 'react';
import { IconProps } from './types';

export const AlignHorizontalCentersIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3.24991 2C2.55955 2 1.99991 2.55964 1.99991 3.25V11.75C1.99991 12.4404 2.55955 13 3.24991 13H5.74991C6.44026 13 6.99991 12.4404 6.99991 11.75V3.25C6.99991 2.55964 6.44026 2 5.74991 2H3.24991ZM2.99991 3.25C2.99991 3.11193 3.11184 3 3.24991 3H5.74991C5.88798 3 5.99991 3.11193 5.99991 3.25V11.75C5.99991 11.8881 5.88798 12 5.74991 12H3.24991C3.11184 12 2.99991 11.8881 2.99991 11.75V3.25ZM9.25003 4C8.55967 4 8.00003 4.55964 8.00003 5.25V9.75C8.00003 10.4404 8.55967 11 9.25003 11H11.75C12.4404 11 13 10.4404 13 9.75V5.25C13 4.55964 12.4404 4 11.75 4H9.25003Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default AlignHorizontalCentersIcon;
