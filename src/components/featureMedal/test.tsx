import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { FeatureMedal } from '.';
import { mockPlayerDataResponse } from '../../utilts/mocks';

describe(`<FeatureMedal />`, () => {
  it(`should render successfully component with props`, () => {
    render(<FeatureMedal {...mockPlayerDataResponse} />);
    const image = screen.getByRole(`img`);

    expect(image).toHaveAttribute(
      `src`,
      `${mockPlayerDataResponse.featuredMedal.image}`,
    );
    expect(image).toHaveAttribute(
      `alt`,
      `${mockPlayerDataResponse.featuredMedal.name}`,
    );
  });
});
