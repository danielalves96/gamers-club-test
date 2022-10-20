import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TournamentsSection } from '.';
import i18n from '../../i18n';
import { mockPlayerDataResponse } from '../../utilts/mocks';

const tournamentData = { ...mockPlayerDataResponse.tournaments };

type Texts = {
  REGISTERED_TEAMS: string;
};

function TFactory(): Texts {
  return {
    REGISTERED_TEAMS: i18n.t(`REGISTERED_TEAMS`),
  };
}

const t = TFactory();

describe(`<TournamentsSection />`, () => {
  it(`should render successfully component with props`, async () => {
    render(<TournamentsSection {...tournamentData} />);

    expect(screen.getByTestId(`tounaments-section`)).toBeInTheDocument();
    expect(screen.getByText(`${tournamentData.label}`));
    expect(screen.getByText(`${tournamentData.nextTournament.name}`));
    expect(screen.getByText(`${tournamentData.nextTournament.currentTeams}`));
    expect(screen.getByText(`/${tournamentData.nextTournament.maxTeams}`));
    expect(screen.getByText(t.REGISTERED_TEAMS));
  });
});
