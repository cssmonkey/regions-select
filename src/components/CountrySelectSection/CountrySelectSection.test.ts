import React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { cleanup, screen, waitFor } from '@testing-library/react';
import { render } from '../../utilities/testRender';
import { initialState } from '../../state/region/regionSlice';
import CountrySelectionSection from './CountrySelectionSection';
import { Status } from '../../state/region/types';

const mock = new MockAdapter(axios, { onNoMatch: 'throwException' });

const mockResponse = [
  {
    region: 'Africa',
    area: 2344858,
    name: {
      official: 'Democratic Republic of the Congo',
      common: 'Democratic Republic of the Congo',
      nativeName: {
        fra: {
          official: 'République démocratique du Congo',
          common: 'RD Congo',
        },
      },
    },
    flag: 'CD',
    flags: {
      svg: 'www.myflagurl.com/image.svg',
    },
    population: 89561404,
    translations: {
      jpn: {
        official: 'コンゴ民主共和国',
        common: 'コンゴ民主共和国',
      },
    },
  },
];

const preloadedState = {
  region: {
    ...initialState,
    status: Status.Succeeded,
  },
};

beforeAll(() => {
  mock.reset();
});

afterEach(cleanup);

describe('CoutrySelectSection', () => {
  it('should display loader followed by select with list of regions', async () => {
    mock
      .onGet('https://restcountries.com/v3.1/region/Africa')
      .reply(200, mockResponse);

    render({
      ui: CountrySelectionSection,
      preloadedState,
    });

    expect(screen.getByText('Loading country options...')).toBeInTheDocument();
    expect(screen.queryByLabelText('Enter a country')).not.toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Enter a country')).toBeInTheDocument();
    });
  });
});
