import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import HomePage from '../components/Homepage';

jest.mock('axios');

const mockStore = configureMockStore([thunk]);

describe('HomePage', () => {
  let container = null;
  const mockCategories = [
    { mal_id: 1, title: 'Category 1', images: { jpg: { image_url: 'image1.jpg' } } },
    { mal_id: 2, title: 'Category 2', images: { jpg: { image_url: 'image2.jpg' } } },
  ];

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('renders category items', async () => {
    axios.get.mockResolvedValueOnce({ data: { data: mockCategories } });

    const store = mockStore({ categories: [] });

    await act(async () => {
      render(
        <Provider store={store}>
          <Router>
            <HomePage />
          </Router>
        </Provider>,
        container,
      );
    });

    expect(container.querySelectorAll('li')).toHaveLength(mockCategories.length);
  });
});
