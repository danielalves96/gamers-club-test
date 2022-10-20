import { mockPlayerDataResponse } from '../../utilts/mocks';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TournamentsSection } from '.';

const tournamentData = { ...mockPlayerDataResponse.tournaments };

describe(`<TournamentsSection />`, () => {
  it(`should render successfully component with props`, async () => {
    render(<TournamentsSection {...tournamentData} />);

    expect(screen.getByTestId(`tounaments-section`)).toBeInTheDocument();
    expect(screen.getByText(`${tournamentData.label}`));
    expect(screen.getByText(`${tournamentData.nextTournament.name}`));
    expect(screen.getByText(`${tournamentData.nextTournament.currentTeams}`));
    expect(screen.getByText(`/${tournamentData.nextTournament.maxTeams}`));
    expect(screen.getByText(`Times inscritos`));
  });
});
