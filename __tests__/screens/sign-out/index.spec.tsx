import React from 'react';
import { render, screen } from '@testing-library/react';
import SignUp from '~/app/(auth)/sign-up/page';
import '@testing-library/jest-dom';

describe('Sign-up screen testing', () => {
  it('should render properly', () => {
    render(<SignUp />);
    const el = screen.getByTestId('el');
    expect(el).toBeInTheDocument();
  });
});
