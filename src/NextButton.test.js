import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NextButton from './NextButton';
import '@testing-library/jest-dom';

describe('NextButton', () => {
  it('renders the button with the correct text', () => {
    const { getByText } = render(<NextButton />);
    const buttonElement = getByText('Next');
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls the onClick function when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<NextButton onClick={handleClick} />);
    const buttonElement = getByText('Next');

    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});