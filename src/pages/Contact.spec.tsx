import React from 'react';
import { API } from '@aws-amplify/api';
import { fireEvent, render, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Contact from './Contact';

beforeAll(() => {
  jest.clearAllMocks();
});

describe('contact form', () => {
  test('snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>,
    );

    expect(container.innerHTML).toMatchSnapshot();
  });

  test('api error', async () => {
    const { getByTestId, getByLabelText, container } = render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>,
    );

    const firstName = getByLabelText('First name') as HTMLInputElement;
    fireEvent.change(firstName, { target: { value: 'Luke' } });
    expect(firstName.value).toBe('Luke');

    const lastName = getByLabelText('Last name') as HTMLInputElement;
    fireEvent.change(lastName, { target: { value: 'Skywalker' } });
    expect(lastName.value).toBe('Skywalker');

    const emailAddr = getByLabelText('Email') as HTMLInputElement;
    fireEvent.change(emailAddr, {
      target: { value: 'luke.skywalker@jedi.com' },
    });
    expect(emailAddr.value).toBe('luke.skywalker@jedi.com');

    const subject = getByLabelText('Subject') as HTMLInputElement;
    fireEvent.change(subject, { target: { value: 'This is a test' } });
    expect(subject.value).toBe('This is a test');

    const message = getByLabelText('Message') as HTMLInputElement;
    fireEvent.change(message, { target: { value: 'Test message' } });
    expect(message.value).toBe('Test message');

    API.graphql = jest.fn().mockRejectedValueOnce(() => new Error('error'));

    await act(async () => {
      fireEvent.click(getByTestId('send-btn'));
    });

    expect(getByTestId('error-icon')).toBeTruthy();
    expect(container.innerHTML).toMatchSnapshot();
  });

  test('submit message successfully', async () => {
    const { getByTestId, getByLabelText, container } = render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>,
    );

    const firstName = getByLabelText('First name') as HTMLInputElement;
    fireEvent.change(firstName, { target: { value: 'Luke' } });
    expect(firstName.value).toBe('Luke');

    const lastName = getByLabelText('Last name') as HTMLInputElement;
    fireEvent.change(lastName, { target: { value: 'Skywalker' } });
    expect(lastName.value).toBe('Skywalker');

    const emailAddr = getByLabelText('Email') as HTMLInputElement;
    fireEvent.change(emailAddr, {
      target: { value: 'luke.skywalker@jedi.com' },
    });
    expect(emailAddr.value).toBe('luke.skywalker@jedi.com');

    const subject = getByLabelText('Subject') as HTMLInputElement;
    fireEvent.change(subject, { target: { value: 'This is a test' } });
    expect(subject.value).toBe('This is a test');

    const message = getByLabelText('Message') as HTMLInputElement;
    fireEvent.change(message, { target: { value: 'Test message' } });
    expect(message.value).toBe('Test message');

    API.graphql = jest.fn().mockResolvedValueOnce(() => {});

    // form complete
    await act(async () => {
      fireEvent.click(getByTestId('send-btn'));
    });

    expect(API.graphql).toHaveBeenCalled();
    expect(getByTestId('success-icon')).toBeTruthy();
    expect(container.innerHTML).toMatchSnapshot();
  });
});
