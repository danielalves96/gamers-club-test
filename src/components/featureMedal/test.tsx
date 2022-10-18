import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { FeatureMedal } from '.';
import { mockFeatureMedal } from './mock';

describe(`<FeatureMedal />`, () => {
  it(`should render successfully component with props`, () => {
    render(<FeatureMedal {...mockFeatureMedal} />);
    const image = screen.getByRole(`img`);

    expect(image).toHaveAttribute(
      `src`,
      `${mockFeatureMedal.featuredMedal.image}`,
    );
    expect(image).toHaveAttribute(
      `alt`,
      `${mockFeatureMedal.featuredMedal.name}`,
    );
  });
});
