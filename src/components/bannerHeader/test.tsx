import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import BannerHeader from '.';
import { mockPlayerDataResponse } from '../../utilts/mocks';

describe(`<BannerHeader />`, () => {
  it(`should render successfully component with props`, () => {
    render(<BannerHeader {...mockPlayerDataResponse} />);

    expect(screen.getByTestId(`avatar-and-credentials`)).toBeInTheDocument();
    expect(screen.getByTestId(`expertise-progress-bar`)).toBeInTheDocument();
    expect(screen.getByTestId(`feature-medal`)).toBeInTheDocument();
  });
});
