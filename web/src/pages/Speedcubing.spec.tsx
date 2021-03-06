import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import * as rdd from 'react-device-detect';
import Speedcubing from './Speedcubing';

const videoData = [
  {
    id: 'E5h2XIfgcow',
    text: 'North American Record: 7.57 3x3 One-Handed Solve',
  },
  {
    id: 'U5x6YN1k6T8',
    text: "1st Place @ Newmarket Open 2019: 7.39 3x3 Rubik's Cube Average",
  },
  {
    id: 'aJKcaV2tP_o',
    text:
      '2nd Place @ Canadian Championship 2019: 12.94 3x3 One-Handed Average',
  },
];

describe('speedcubing page', () => {
  test('each video renders', () => {
    const { container, getByText } = render(
      <MemoryRouter>
        <Speedcubing />
      </MemoryRouter>,
    );

    videoData.forEach((video) => {
      expect(getByText(video.text)).toBeTruthy();
    });

    expect(container.innerHTML).toMatchSnapshot();
  });

  test('open video, desktop', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    rdd.isMobile = false;
    const { getByLabelText, queryByTitle } = render(
      <MemoryRouter>
        <Speedcubing />
      </MemoryRouter>,
    );

    // modal is initially closed
    expect(queryByTitle('Video Player')).toBeFalsy();

    // click on video
    fireEvent.click(getByLabelText(`Open video: ${videoData[0].text}`));

    // modal is open
    await waitFor(() => expect(queryByTitle('Video Player')).toBeTruthy());

    // close modal via button
    fireEvent.click(getByLabelText('Close'));

    // modal is closed
    await waitFor(() => expect(queryByTitle('Video Player')).toBeFalsy());

    // click on another video
    fireEvent.click(getByLabelText(`Open video: ${videoData[1].text}`));

    // modal is open
    await waitFor(() => expect(queryByTitle('Video Player')).toBeTruthy());
  });

  test('navigate to video, mobile', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    rdd.isMobile = true;
    const { queryByRole, getByLabelText } = render(
      <MemoryRouter>
        <Speedcubing />
      </MemoryRouter>,
    );

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    delete window.location;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.location = { assign: jest.fn() };

    expect(queryByRole('presentation')).toBeFalsy();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    delete window.location;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.location = { assign: jest.fn() };

    const button = getByLabelText(`Open video: ${videoData[0].text}`);
    fireEvent.click(button);

    expect(queryByRole('presentation')).toBeFalsy();
    expect(window.location.assign).toHaveBeenCalledWith(
      `https://www.youtube.com/watch?v=${videoData[0].id}`,
    );
  });
});
