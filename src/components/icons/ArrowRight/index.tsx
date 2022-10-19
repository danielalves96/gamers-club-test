import { IconsProps } from '@/utilts/types';

export const IconArrowRight = ({ size, color }: IconsProps) => (
  <div style={{ display: `flex` }}>
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="icon-arrow-right"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.5858 17L4 17L4 15L25.5858 15L15.2929 4.70711L16.7071 3.29289L29.4142 16L16.7071 28.7071L15.2929 27.2929L25.5858 17Z"
        fill={color ?? `white`}
      />
    </svg>
  </div>
);
