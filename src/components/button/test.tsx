import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Button } from '.';
import { IconCog } from '../icons';

const ButtonValues = {
  color: `red`,
  textColor: `green`,
  icon: <IconCog size={22} />,
  text: `Test Button`,
  width: `233px`,
};

describe(`<Button />`, () => {
  it(`should render successfully component with props`, () => {
    render(<Button {...ButtonValues} />);

    expect(screen.getByTestId(`button-default`)).toBeInTheDocument();
    expect(screen.getByTestId(`icon-cog`)).toBeInTheDocument();
    expect(screen.getByText(`${ButtonValues.text}`)).toBeInTheDocument();
  });
});
