// Status.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Status from './Status';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStepForward, faStepBackward, faRandom } from '@fortawesome/free-solid-svg-icons';
import '@testing-library/jest-dom';

describe('Status', () => {
  const currentTrack = {
    title: 'Test Track',
    artist: 'Test Artist',
    year: 2023,
  };

  const onNext = jest.fn();
  const onPrev = jest.fn();
  const onPlayPause = jest.fn();

  const renderComponent = (props = {}) => {
    return render(
      <Status
        currentTrack={currentTrack}
        isPlaying={false}
        onNext={onNext}
        onPrev={onPrev}
        onPlayPause={onPlayPause}
        {...props}
      />
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the current track title', () => {
    const { getByText } = renderComponent();
    expect(getByText('Playing: Test Track')).toBeInTheDocument();
  });

  it('calls onNext when the next button is clicked', () => {
    const { getAllByRole } = renderComponent();
    const nextButton = getAllByRole('button', { icon: faStepForward })[0];
    fireEvent.click(nextButton);
    expect(onNext).toHaveBeenCalled();
  });

  it('calls onPrev when the previous button is clicked', () => {
    const { getAllByRole } = renderComponent();
    const prevButton = getAllByRole('button', { icon: faStepBackward })[1];
    fireEvent.click(prevButton);
    expect(onPrev).toHaveBeenCalled();
  });

  it('toggles play/pause and updates status when play/pause button is clicked', () => {
    const { getAllByRole, getByText } = renderComponent({ isPlaying: true });
    const playPauseButton = getAllByRole('button', { icon: faPause })[2];
    fireEvent.click(playPauseButton);
    expect(onPlayPause).toHaveBeenCalled();
    expect(getByText('Paused')).toBeInTheDocument();
  });
});