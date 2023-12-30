import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from '.';

describe('Button component', () => {
  it('Button should render correctly', () => {
    render(<Button />);
    screen.getByRole('button');
    // expect(button).toBeInTheDocument();
  });
});
