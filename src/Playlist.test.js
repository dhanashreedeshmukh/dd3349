import React from 'react';
import { render, fireEvent, act, screen } from '@testing-library/react';
import Playlist from './Playlist';
import { enableFetchMocks } from 'jest-fetch-mock';
import { faRandom } from '@fortawesome/free-solid-svg-icons';
import '@testing-library/jest-dom';


enableFetchMocks();

const mockData = [
    {
      "title": "Billie Jean",
      "artist": "Michael Jackson",
      "year": 1983,
      "id": "a615"
    },
    {
      "title": "Smells Like Teen Spirit",
      "artist": "Nirvana",
      "year": 1991,
      "id": "fbd2"
    },
    {
      "artist": "Rick Astley",
      "year": 1987,
      "title": "Never Gonna Give You Up",
      "id": "ce1f"
    }
  ]

beforeEach(() => {
    fetch.resetMocks(); // Reset fetch mocks before each test
    fetch.mockResponseOnce(JSON.stringify(mockData)); // Replace `mockData` with your mock response data
  });

test('renders playlist with correct data', async () => {
  await act(async () => {
    render(<Playlist />);
  });

  // Assert that the fetch function was called once
  expect(fetch).toHaveBeenCalledTimes(1);

  // Assert that the fetch function was called with the correct URL
  expect(fetch).toHaveBeenCalledWith('http://localhost:3001/tracks');

  // Assert that specific text is present in the rendered component
  //expect(screen.getByText(/Never\sGonna\sGive\sYou\sUp/)).toBeInTheDocument();

});

test('handles shuffle correctly', async () => {
  await act(async () => {
    render(<Playlist />);
  });
  const shuffleButton = screen.getAllByRole('button', {
    class: "svg-inline--fa fa-shuffle "
  });
  shuffleButton.forEach(button => {
    expect(button).toBeInTheDocument();
  });
  shuffleButton.forEach(button => {
  fireEvent.click(button)
  expect(fetch).toHaveBeenCalledTimes(1);
  });
});

test('handles play/pause correctly', async () => {
  await act(async () => {
    render(<Playlist />);
  });

  // Assert that clicking the play/pause button triggers the correct behavior
  const playPauseButton = screen.getAllByRole('button',{
    class: "svg-inline--fa fa-play"
  }) // Assuming play/pause button has text 'play'
  playPauseButton.forEach(button => {
    fireEvent.click(button);
    expect(fetch).toHaveBeenCalledTimes(1);
  })
  

  
});

test('handles navigation correctly', async () => {
  await act(async () => {
    render(<Playlist />);
  });

  // Assert that clicking the next button triggers the correct behavior
  const nextButton = screen.getAllByRole('button',{
    class: "svg-inline--fa fa-forward-step "
  })
  nextButton.forEach(button =>{
    fireEvent.click(button)
    expect(fetch).toHaveBeenCalledTimes(1);
  })
  
  // Your additional assertions...
});

test('plays track on double click', async () => {
  await act(async () => {
    render(<Playlist />);
  });

  // Assert that double-clicking on a track triggers the correct behavior
  const track = screen.getByText('Playing: Billie Jean');
  fireEvent.doubleClick(track);

  // Your additional assertions...
});
