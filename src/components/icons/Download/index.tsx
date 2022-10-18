import { IconsProps } from '@/utilts/types';

export const IconDownload = ({ size, color }: IconsProps) => (
  <div style={{ display: `flex` }}>
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="icon-download"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7071 21.7071L16 22.4142L15.2929 21.7071L7.29289 13.7071L8.70711 12.2929L15 18.5858V3H17V18.5858L23.2929 12.2929L24.7071 13.7071L16.7071 21.7071ZM3 21V27V28H4H28H29V27V21H27V26H5V21H3Z"
        fill={color ?? `white`}
      />
    </svg>
  </div>
);
