import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PrevButton from './PrevButton';

describe('PrevButton', () => {
  test('calls onClick handler when button is clicked', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<PrevButton onClick={handleClick} />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});