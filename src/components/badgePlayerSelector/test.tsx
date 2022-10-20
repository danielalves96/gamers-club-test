import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BadgePLayerSelector } from '.';

describe(`<BadgePlayerSelector />`, () => {
  it(`should render successfully with values`, () => {
    render(<BadgePLayerSelector name="fallen" />);
    expect(screen.getByTestId(`player-selector`)).toBeInTheDocument();
  });
});
