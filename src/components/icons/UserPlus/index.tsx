import { IconsProps } from '@/utilts/types';

export const IconUserPlus = ({ size, color }: IconsProps) => (
  <div style={{ display: `flex` }}>
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="icon-user-plus"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 1V5H21V7H25V11H27V7H31V5H27V1H25ZM16 2C16.9842 2 17.921 2.20312 18.7707 2.56973C18.4855 3.16969 18.2728 3.81077 18.1439 4.48166C17.4942 4.17282 16.7673 4 16 4C13.2386 4 11 6.23858 11 9C11 11.7614 13.2386 14 16 14C17.8131 14 19.4008 13.0349 20.2775 11.5904C20.7465 12.0705 21.2755 12.4918 21.8523 12.8421C21.5216 13.3448 21.1279 13.8024 20.6824 14.2035C23.7358 14.9568 26 17.714 26 21V29V30H25H7H6V29V21C6 17.714 8.26423 14.9568 11.3176 14.2035C9.89467 12.9222 9 11.0656 9 9C9 5.13401 12.134 2 16 2ZM16 16H13C10.2386 16 8 18.2386 8 21V28H24V21C24 18.2386 21.7614 16 19 16H16Z"
        fill={color ?? `white`}
      />
    </svg>
  </div>
);
