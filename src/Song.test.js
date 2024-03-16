// Song.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Song from './Song';
import '@testing-library/jest-dom';

describe('Song', () => {
  it('renders Song component with title, artist, and year', () => {
    const { getByText } = render(<Song title="Song Title" artist="Artist Name" year={2022} />);
    expect(getByText('Title: Song Title')).toBeInTheDocument();
    expect(getByText('Artist: Artist Name')).toBeInTheDocument();
    expect(getByText('Year: 2022')).toBeInTheDocument();
  });
});