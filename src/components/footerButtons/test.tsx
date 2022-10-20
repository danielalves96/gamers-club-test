import { mockPlayerDataResponse } from '../../utilts/mocks';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { FooterButtons } from '.';

const hideBannedData = {
  changeAvatarData: {
    action: `test`,
    label: `Change Avatar`,
  },
  hideBannedData: {
    action: `test`,
    label: `Hide Banned`,
  },
};

describe(`<FooterButtons />`, () => {
  it(`should render successfully component with props`, () => {
    render(<FooterButtons {...hideBannedData} {...mockPlayerDataResponse} />);
    expect(screen.getByTestId(`footer-buttons`)).toBeInTheDocument();
  });
});
