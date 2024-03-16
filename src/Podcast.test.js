// Podcast.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Podcast from './Podcast';
import '@testing-library/jest-dom';

describe('Podcast component', () => {
  test('renders episode title', () => {
    const { getByText } = render(<Podcast episodeTitle="Test Episode" />);
    expect(getByText('Episode Title: Test Episode')).toBeInTheDocument();
  });

  test('renders episode and season if provided', () => {
    const { getByText } = render(<Podcast episodeTitle="Test Episode" season={2} episode={5} />);
    expect(getByText('Episode: 5')).toBeInTheDocument();
    expect(getByText('Season: 2')).toBeInTheDocument();
  });

  test('renders only episode if season is not provided', () => {
    const { getByText, queryByText } = render(<Podcast episodeTitle="Test Episode" episode={5} />);
    expect(getByText('Episode: 5')).toBeInTheDocument();
    expect(queryByText('Season')).toBeNull(); // Season should not be rendered
  });

  test('renders only season if episode is not provided', () => {
    const { getByText, queryByText } = render(<Podcast episodeTitle="Test Episode" season={2} />);
    expect(getByText('Season: 2')).toBeInTheDocument();
    expect(queryByText('Episode')).toBeNull(); // Episode should not be rendered
  });
});
