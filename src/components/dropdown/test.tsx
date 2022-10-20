import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Dropdown } from '.';

const DropdownData = {
  open: true,
  setOpen: () => true,
  changeAvatarData: {
    action: `test`,
    label: `Change Avatar`,
  },
  hideBannedData: {
    action: `test`,
    label: `Hide Banned`,
  },
};

describe(`<Dropdown />`, () => {
  it(`should render successfully component with props`, () => {
    render(<Dropdown {...DropdownData} />);

    expect(screen.getByTestId(`dropdown`)).toBeInTheDocument();
    expect(screen.getByText(`${DropdownData.changeAvatarData.label}`));
  });
});
