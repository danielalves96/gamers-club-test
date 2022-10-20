import { mockPlayerDataResponse } from '../../utilts/mocks';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { DataTabs } from '.';

describe(`<DataTabs />`, () => {
  it(`should render successfully component with props`, () => {
    render(<DataTabs {...mockPlayerDataResponse} />);

    expect(screen.getByTestId(`data-tabs`)).toBeInTheDocument();
    expect(screen.getByTestId(`tounaments-section`)).toBeInTheDocument();
  });
});
