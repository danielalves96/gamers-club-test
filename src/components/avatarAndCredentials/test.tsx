import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { AvatarAndCredentials } from '.';
import { mockPlayerDataResponse } from '../../utilts/mocks';

describe(`<AvatarAndCredentials />`, () => {
  it(`should render successfully with values`, () => {
    render(<AvatarAndCredentials {...mockPlayerDataResponse.player} />);
    expect(screen.getByText(`${mockPlayerDataResponse.player.nickname}`));
    expect(screen.getByText(`ID: ${mockPlayerDataResponse.player.id}`));
  });

  it(`should render successfully image with props`, () => {
    render(<AvatarAndCredentials {...mockPlayerDataResponse.player} />);

    const avatar = screen.getByRole(`img`);

    expect(avatar).toHaveAttribute(
      `src`,
      `${mockPlayerDataResponse.player.avatar}`,
    );
    expect(avatar).toHaveAttribute(
      `alt`,
      `${mockPlayerDataResponse.player.nickname}`,
    );
  });
});
