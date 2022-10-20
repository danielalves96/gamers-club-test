import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { UsersData } from '.';

const UsersDataMock = {
  color: `red`,
  total: 200,
  label: `test **players**`,
};

describe(`<UsersData />`, () => {
  it(`should render successfully component with props`, async () => {
    render(<UsersData {...UsersDataMock} />);

    expect(screen.getByTestId(`users-data`)).toBeInTheDocument();

    await new Promise((r) => setTimeout(r, 3000));
    expect(screen.getByText(`${UsersDataMock.total}`));
  });
});
