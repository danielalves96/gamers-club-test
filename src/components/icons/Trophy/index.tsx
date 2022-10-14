import { IconsProps } from '@/utilts/types';

export const IconTrophy = ({ size, color }: IconsProps) => (
  <div>
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="icon-trophy"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 6H7V4H25V6H24V8H27.5V17.5803L23.9707 19.5971C23.671 22.6305 21.1122 25 18 25H17V28H21V30H11V28H15V25H14C10.9006 25 8.35015 22.65 8.03316 19.6346L4 17.618V8H8V6ZM10 6V19C10 21.2091 11.7909 23 14 23H18C20.2091 23 22 21.2091 22 19V6H10ZM8 10H6V16.382L8 17.382V10ZM24 17.2768L25.5 16.4197V10H24V17.2768Z"
        fill={color ?? `white`}
      />
    </svg>
  </div>
);
