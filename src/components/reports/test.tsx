import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Reports } from '.';

const reportsData = {
  onlinePlayers: {
    type: `online`,
    total: 200,
    label: `Online **players**`,
  },
  bannedPlayers: {
    type: `banned`,
    total: 220,
    label: `Banned **players**`,
  },
};

describe(`<Reports />`, () => {
  it(`should render successfully component with props`, async () => {
    render(<Reports {...reportsData} />);

    expect(screen.getByTestId(`reports`)).toBeInTheDocument();
    await new Promise((r) => setTimeout(r, 3000));
    expect(screen.getByText(`${reportsData.onlinePlayers.total}`));
    expect(screen.getByText(`Online`));
  });
});
