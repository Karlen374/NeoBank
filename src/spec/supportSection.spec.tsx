import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import React from 'react';
import { SupportSection } from '@components';

const mockJsonPromise = Promise.resolve(200);
const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise });
global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

describe('Support Section Tests', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });
  const setLocalStorage = (name: string, data: any) => {
    window.localStorage.setItem(name, JSON.stringify(data));
  };
  test('set && get user email width localStorage', () => {
    const mockJson = { email: 'true' };
    setLocalStorage('email', mockJson);
    render(<SupportSection />);
    const emailText = screen.getByTestId('email');
    expect(emailText).toBeInTheDocument();
  });
  test('send true email', async () => {
    render(<SupportSection />);
    await screen.findByText('Support');
    expect(screen.queryByTestId('email')).toBeNull();
    fireEvent.change(screen.getByPlaceholderText('Your email'), { target: { value: 'test@mail.ru' } });
    fireEvent.click(screen.getByTestId('submit-email'));
    expect(global.fetch).toBeCalledWith(
      'http://localhost:8080/email',
      {
        body: '{"email":"test@mail.ru"}',
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      },
    );
    await waitFor(() => {
      expect(screen.queryByTestId('email')).toBeInTheDocument();
    });
  });
});
