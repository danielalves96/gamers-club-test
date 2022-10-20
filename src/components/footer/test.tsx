import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Footer } from '.';
import { mockPlayerDataResponse } from '../../utilts/mocks';

describe(`<Footer />`, () => {
  it(`should render successfully component with props`, () => {
    render(<Footer {...mockPlayerDataResponse} />);

    expect(screen.getByTestId(`footer`)).toBeInTheDocument();
    expect(screen.getByTestId(`footer-buttons`)).toBeInTheDocument();
    expect(screen.getByTestId(`reports`)).toBeInTheDocument();
  });
});
