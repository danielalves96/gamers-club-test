import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MatchesSection } from '.';
import { mockPlayerDataResponse } from '../../utilts/mocks';
import { IconDoor } from '../icons';

const matchesSectionData = {
  color: `red`,
  matchData: mockPlayerDataResponse.lobby,
  icon: <IconDoor size={33} />,
  buttonTextColor: `blue`,
  buttonIcon: <IconDoor size={33} />,
};
describe(`<MatchesSection />`, () => {
  it(`should render successfully component with props`, () => {
    render(<MatchesSection {...matchesSectionData} />);

    expect(screen.getByTestId(`matches-section`)).toBeInTheDocument();
    expect(screen.getByText(`Partidas`)).toBeInTheDocument();
    expect(screen.getByText(`Vitórias`)).toBeInTheDocument();
    expect(screen.getByText(`Derrotas`)).toBeInTheDocument();
  });
});
