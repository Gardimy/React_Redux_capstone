import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import HomePage from '../components/Homepage';

jest.mock('axios');

describe('HomePage', () => {
  const mockCategories = [
    {
      mal_id: 1,
      title: 'Category 1',
      images: {
        jpg: {
          image_url: 'https://example.com/image.jpg',
        },
      },
    },
    {
      mal_id: 2,
      title: 'Category 2',
      images: {
        jpg: {
          image_url: 'https://example.com/image.jpg',
        },
      },
    },
  ];

  const mockStore = configureMockStore()({
    categories: mockCategories,
  });

  beforeEach(() => {
    axios.get.mockResolvedValue({ data: { data: mockCategories } });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders categories on the homepage', async () => {
    render(
      <Provider store={mockStore}>
        <Router>
          <HomePage />
        </Router>
      </Provider>,
    );

    // Wait for the categories to be fetched and rendered
    await waitFor(() => {
      const categoryElements = screen.getAllByRole('link', { name: /category/i });
      expect(categoryElements.length).toBe(mockCategories.length);

      categoryElements.forEach((categoryElement, index) => {
        const category = mockCategories[index];
        expect(categoryElement).toHaveAttribute('href', `/details/${category.mal_id}`);
        expect(categoryElement).toHaveTextContent(category.title);

        const imageElement = categoryElement.querySelector('img');
        expect(imageElement).toHaveAttribute('src', category.images.jpg.image_url);
        expect(imageElement).toHaveAttribute('alt', category.image_url);
      });
    });
  });
});
