import { IconsProps } from '@/utilts/types';

export const IconCog = ({ size, color }: IconsProps) => (
  <div>
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="icon-cog"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.00002L13 1.00002H19L20 2.00002V4.68313C20.4014 4.82502 20.793 4.98763 21.1735 5.16967L23.0711 3.27209H24.4853L28.7279 7.51473V8.92895L26.8303 10.8265C27.0124 11.207 27.175 11.5986 27.3169 12H30L31 13V19L30 20H27.3169C27.175 20.4014 27.0124 20.793 26.8303 21.1735L28.7279 23.0711V24.4853L24.4853 28.7279H23.0711L21.1735 26.8304C20.793 27.0124 20.4014 27.175 20 27.3169V30L19 31H13L12 30V27.3169C11.5986 27.175 11.207 27.0124 10.8265 26.8304L8.92894 28.7279H7.51472L3.27208 24.4853V23.0711L5.16966 21.1735C4.98762 20.793 4.82501 20.4015 4.68312 20H2L1 19V13L2 12H4.68312C4.82501 11.5986 4.98762 11.207 5.16966 10.8265L3.27208 8.92895V7.51473L7.51472 3.27209L8.92893 3.27209L10.8265 5.16967C11.207 4.98764 11.5986 4.82502 12 4.68313V2.00002ZM14 3.00002V5.41408L13.2722 6.37633C12.5164 6.59009 11.7968 6.8906 11.1248 7.26661L9.92945 7.10103L8.22183 5.39341L5.3934 8.22184L7.10102 9.92946L7.26659 11.1249C6.89059 11.7969 6.59008 12.5164 6.37632 13.2722L5.41407 14H3V18H5.41407L6.37632 18.7279C6.59008 19.4836 6.89059 20.2032 7.26659 20.8752L7.10102 22.0706L5.3934 23.7782L8.22183 26.6066L9.92945 24.899L11.1249 24.7334C11.7968 25.1094 12.5164 25.4099 13.2722 25.6237L14 26.5859V29H18V26.586L18.7278 25.6237C19.4836 25.4099 20.2032 25.1094 20.8752 24.7334L22.0706 24.899L23.7782 26.6066L26.6066 23.7782L24.899 22.0706L24.7334 20.8752C25.1094 20.2032 25.4099 19.4836 25.6237 18.7279L26.5859 18H29V14H26.5859L25.6237 13.2722C25.4099 12.5164 25.1094 11.7968 24.7334 11.1249L24.899 9.92946L26.6066 8.22184L23.7782 5.39341L22.0706 7.10103L20.8752 7.26661C20.2032 6.8906 19.4836 6.59009 18.7278 6.37633L18 5.41408V3.00002H14ZM16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13ZM11 16C11 13.2386 13.2386 11 16 11C18.7614 11 21 13.2386 21 16C21 18.7614 18.7614 21 16 21C13.2386 21 11 18.7614 11 16Z"
        fill={color ?? `white`}
      />
    </svg>
  </div>
);
