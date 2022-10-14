import { IconsProps } from '@/utilts/types';

export const IconMissions = ({ size, color }: IconsProps) => (
  <div>
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="icon-missions"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.0001 3H25.0001V8.41421L21.863 11.5514L20.2248 10.3611L23.0001 7.58579V5H18.0001V8.74483L16.0001 7.29175L14.0001 8.74483V5H9.0001V7.58579L11.7754 10.3611L10.1372 11.5514L7.0001 8.41421V3ZM16.0001 15L17.7635 18.5729L21.7064 19.1459L18.8533 21.9271L19.5268 25.8541L16.0001 24L12.4734 25.8541L13.1469 21.9271L10.2938 19.1459L14.2367 18.5729L16.0001 15ZM16.0001 9.76393L5.31396 17.5279L9.39571 30.0902H22.6045L26.6862 17.5279L16.0001 9.76393ZM10.8488 28.0902L7.66511 18.2918L16.0001 12.2361L24.3351 18.2918L21.1514 28.0902H10.8488Z"
        fill={color ?? `white`}
      />
    </svg>
  </div>
);
