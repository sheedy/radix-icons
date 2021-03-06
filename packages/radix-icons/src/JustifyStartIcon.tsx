import * as React from 'react';
import { IconProps } from './types';

export const JustifyStartIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1.05002 13.5004C1.05002 13.749 1.25149 13.9504 1.50002 13.9504C1.74855 13.9504 1.95002 13.749 1.95002 13.5004L1.95002 1.50044C1.95002 1.25191 1.74855 1.05044 1.50002 1.05044C1.25149 1.05044 1.05002 1.25191 1.05002 1.50044L1.05002 13.5004ZM11 9L3.99999 9L3.99999 6L11 6L11 9ZM3.74999 10C3.33578 10 2.99999 9.66421 2.99999 9.25L2.99999 5.75C2.99999 5.33579 3.33578 5 3.74999 5L11.25 5C11.6642 5 12 5.33579 12 5.75L12 9.25C12 9.66421 11.6642 10 11.25 10L3.74999 10Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default JustifyStartIcon;
