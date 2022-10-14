import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { IconArrowRight } from './ArrowRight';
import { IconCog } from './Cog';
import { IconDoor } from './Door';
import { IconDownload } from './Download';
import { IconEyeOff } from './EyeOff';
import { IconMissions } from './Missions';
import { IconPin } from './Pin';
import { IconTrophy } from './Trophy';
import { IconUserPlus } from './UserPlus';
import { IconUsers } from './Users';

describe(`Icons Test`, () => {
  it(`Should render all the icons with default props`, () => {
    render(<IconArrowRight size={25} />);
    render(<IconCog size={25} />);
    render(<IconDoor size={25} />);
    render(<IconDownload size={25} />);
    render(<IconEyeOff size={25} />);
    render(<IconMissions size={25} />);
    render(<IconPin size={25} />);
    render(<IconTrophy size={25} />);
    render(<IconUserPlus size={25} />);
    render(<IconUsers size={25} />);

    expect(screen.getByTestId(`icon-arrow-right`)).toBeInTheDocument();
    expect(screen.getByTestId(`icon-cog`)).toBeInTheDocument();
    expect(screen.getByTestId(`icon-door`)).toBeInTheDocument();
    expect(screen.getByTestId(`icon-download`)).toBeInTheDocument();
    expect(screen.getByTestId(`icon-eye-off`)).toBeInTheDocument();
    expect(screen.getByTestId(`icon-missions`)).toBeInTheDocument();
    expect(screen.getByTestId(`icon-pin`)).toBeInTheDocument();
    expect(screen.getByTestId(`icon-trophy`)).toBeInTheDocument();
    expect(screen.getByTestId(`icon-user-plus`)).toBeInTheDocument();
    expect(screen.getByTestId(`icon-users`)).toBeInTheDocument();
  });
});
