import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MatchesSection } from '.';
import i18n from '../../i18n';
import { mockPlayerDataResponse } from '../../utilts/mocks';
import { IconDoor } from '../icons';

const matchesSectionData = {
  color: `red`,
  matchData: mockPlayerDataResponse.lobby,
  icon: <IconDoor size={33} />,
  buttonTextColor: `blue`,
  buttonIcon: <IconDoor size={33} />,
};

type Texts = {
  MATCHES: string;
  VICTORIES: string;
  DEFEATS: string;
};

function TFactory(): Texts {
  return {
    MATCHES: i18n.t(`MATCHES`),
    VICTORIES: i18n.t(`VICTORIES`),
    DEFEATS: i18n.t(`DEFEATS`),
  };
}

const t = TFactory();

describe(`<MatchesSection />`, () => {
  it(`should render successfully component with props`, () => {
    render(<MatchesSection {...matchesSectionData} />);

    expect(screen.getByTestId(`matches-section`)).toBeInTheDocument();
    expect(screen.getByText(t.MATCHES)).toBeInTheDocument();
    expect(screen.getByText(t.VICTORIES)).toBeInTheDocument();
    expect(screen.getByText(t.DEFEATS)).toBeInTheDocument();
  });
});
