import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PlayPauseButton from './PlayPauseButton';
import '@testing-library/jest-dom';

describe('PlayPauseButton', () => {
  test('renders "Play" button when isPlaying is false', () => {
    const { getByText } = render(<PlayPauseButton isPlaying={false} onClick={() => {}} />);
    const playButton = getByText('Play');
    expect(playButton).toBeInTheDocument();
  });

  test('renders "Pause" button when isPlaying is true', () => {
    const { getByText } = render(<PlayPauseButton isPlaying={true} onClick={() => {}} />);
    const pauseButton = getByText('Pause');
    expect(pauseButton).toBeInTheDocument();
  });

  test('calls onClick handler when button is clicked', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<PlayPauseButton isPlaying={false} onClick={handleClick} />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});