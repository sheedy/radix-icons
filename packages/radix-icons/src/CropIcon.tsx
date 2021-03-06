import * as React from 'react';
import { IconProps } from './types';

export const CropIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3.5 1.75435e-06C3.77614 1.74228e-06 4 0.22386 4 0.500002L4 3.00006L11.5 3.00006C11.7761 3.00006 12 3.22392 12 3.50006L12 11.0001L14.5 11C14.7761 11 15 11.2238 15 11.5C15 11.7761 14.7761 12 14.5 12L12 12.0001L12 14.5C12 14.7761 11.7761 15 11.5 15C11.2239 15 11 14.7761 11 14.5L11 12.0001L3.5 12.0001C3.22385 12.0001 3 11.7762 3 11.5001L3 4.00005L0.499986 4C0.223843 4 -9.87254e-06 3.77613 -4.2697e-06 3.49999C1.36294e-06 3.22385 0.223864 3 0.500006 3L3 3.00005L3 0.500002C3 0.22386 3.22385 1.76642e-06 3.5 1.75435e-06ZM4 4.00006L4 11.0001L11 11.0001L11 4.00006L4 4.00006Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default CropIcon;
