import {
  ExpertiseProgressBarProps,
  ExpertiseProgressProps,
} from '@/utilts/types';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ExpertiseProgressBar } from '.';
import { mockExpertiseProgressBar } from './mock';

describe(`<ExpertiseProgressBar />`, () => {
  it(`should render successfully with values`, () => {
    render(<ExpertiseProgressBar {...mockExpertiseProgressBar} />);

    function validateTexts(value: ExpertiseProgressBarProps) {
      value.expertiseProgress.map((value: ExpertiseProgressProps) =>
        expect(screen.getByText(value.label)),
      );
    }

    validateTexts(mockExpertiseProgressBar);
  });
});
