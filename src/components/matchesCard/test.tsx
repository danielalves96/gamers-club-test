import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MatchesCard } from '.';

const MatchesCardData = {
  color: `red`,
  total: 200,
  label: `test`,
};

describe(`<MatchesCard />`, () => {
  it(`should render successfully component with props`, async () => {
    render(<MatchesCard {...MatchesCardData} />);

    expect(screen.getByTestId(`mathes-card`)).toBeInTheDocument();
    expect(screen.getByText(`${MatchesCardData.label}`));

    await new Promise((r) => setTimeout(r, 2000));
    expect(screen.getByText(`${MatchesCardData.total}`));
  });
});
