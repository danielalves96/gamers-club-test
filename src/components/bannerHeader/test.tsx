import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import BannerHeader from '.';
import { mockBannerHeader } from './mock';

describe(`<BannerHeader />`, () => {
  it(`should render successfully component with props`, () => {
    render(<BannerHeader {...mockBannerHeader} />);

    expect(screen.getByTestId(`avatar-and-credentials`)).toBeInTheDocument();
    expect(screen.getByTestId(`expertise-progress-bar`)).toBeInTheDocument();
    expect(screen.getByTestId(`feature-medal`)).toBeInTheDocument();
  });
});
