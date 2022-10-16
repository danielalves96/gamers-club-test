import { IconsProps } from '@/utilts/types';

export const IconDoor = ({ size, color }: IconsProps) => (
  <div>
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="icon-door"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 3H25V23H28V25H24.255L13.4789 30.8779L12 30V9.40637L20.0783 5H9V25H4V23H7V3ZM23 5.68454L14 10.5936V28.3155L23 23.4064V5.68454ZM16 18V16H18V18H16Z"
        fill={color ?? `white`}
      />
    </svg>
  </div>
);
