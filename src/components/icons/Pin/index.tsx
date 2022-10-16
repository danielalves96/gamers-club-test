import { IconsProps } from '@/utilts/types';

export const IconPin = ({ size, color }: IconsProps) => (
  <div>
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="icon-pin"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 20C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 20ZM6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8C9.5 8.82843 8.82843 9.5 8 9.5C7.17157 9.5 6.5 8.82843 6.5 8ZM8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5Z"
        fill={color ?? `white`}
      />
    </svg>
  </div>
);
