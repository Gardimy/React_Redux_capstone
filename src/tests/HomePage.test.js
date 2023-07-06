import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';
import HomePage from '../components/Homepage';

// Mocking axios get request
jest.mock('axios');

// Mocking the categories data
const mockCategories = [
  {
    mal_id: 1,
    images: {
      jpg: {
        image_url: 'https://example.com/image.jpg',
      },
    },
    title: 'Category 1',
  },
  {
    mal_id: 2,
    images: {
      jpg: {
        image_url: 'https://example.com/image2.jpg',
      },
    },
    title: 'Category 2',
  },
];

describe('HomePage', () => {
  let store;

  beforeEach(() => {
    // Create a mock Redux store
    store = configureStore();

    // Mock the axios.get function
    axios.get.mockResolvedValue({ data: { data: mockCategories } });
  });

  afterEach(() => {
    // Clear all axios mocks after each test
    axios.get.mockClear();
  });

  it('renders category items', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </Provider>,
    );

    // Wait for the axios.get promise to resolve and update the component
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));

    // Verify that category items are rendered
    expect(screen.getByText('Category 1')).toBeInTheDocument();
    expect(screen.getByText('Category 2')).toBeInTheDocument();
  });

  it('dispatches SET_SELECTED_CATEGORY action when a category link is clicked', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </Provider>,
    );

    // Wait for the axios.get promise to resolve and update the component
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));

    // Simulate clicking on a category link
    const categoryLink = screen.getByText('Category 1');
    categoryLink.click();

    // Verify that the SET_SELECTED_CATEGORY action is dispatched with the correct payload
    expect(store.getState().selectedCategory).toBe(1);
  });
});
