import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { AvatarAndCredentials } from '.';
import { mockPlayerProps } from './mock';

describe(`<AvatarAndCredentials />`, () => {
  it(`should render successfully with values`, () => {
    render(<AvatarAndCredentials {...mockPlayerProps} />);
    expect(screen.getByText(`${mockPlayerProps.nickname}`));
    expect(screen.getByText(`ID: ${mockPlayerProps.id}`));
  });

  it(`should render successfully image with props`, () => {
    render(<AvatarAndCredentials {...mockPlayerProps} />);

    const avatar = screen.getByRole(`img`);

    expect(avatar).toHaveAttribute(`src`, `${mockPlayerProps.avatar}`);
    expect(avatar).toHaveAttribute(`alt`, `${mockPlayerProps.nickname}`);
  });
});
