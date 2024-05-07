import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest'
import LeavingSiteDisclaimerModal from '..';

window.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

describe('LeavingSiteDisclaimerModal component', () => {
  it('LeavingSiteDisclaimerModal renders correctly when not open', () => {
    const { container } = render(
      <LeavingSiteDisclaimerModal open={false} setOpen={undefined}  message={""} location={""} />
    );
    expect(container).toMatchSnapshot()
  });

  it('LeavingSiteDisclaimerModal renders correctly when open', () => {
    const { container } = render(
      <LeavingSiteDisclaimerModal open={true} setOpen={undefined}  message={"message_mock"} location={"location_mock"} />
    );
    expect(container).toMatchSnapshot()
  });

  it('LeavingSiteDisclaimerModal continue correctly when continue is clicked', async () => {
    const setOpen = vi.fn()

    const { container } = render(
      <LeavingSiteDisclaimerModal open={true} setOpen={setOpen}  message={"message_mock"} location={"location_mock"} />
    );

    // NOTE: buttons are in flex order
    const continueButton = screen.getByTestId('continue')

    await userEvent.click(continueButton).then(async() => {
      expect(setOpen).toBeCalledTimes(0)
      expect(container).toMatchSnapshot()
    });
  });

  it('LeavingSiteDisclaimerModal continue correctly when cancel is clicked', async () => {
    const setOpen = vi.fn()

    const { container } = render(
      <LeavingSiteDisclaimerModal open={true} setOpen={setOpen}  message={"message_mock"} location={"location_mock"} />
    );

    // NOTE: buttons are in flex order
    const cancelButton = screen.getByTestId('cancel')

    await userEvent.click(cancelButton).then(async() => {
      expect(setOpen).toBeCalledTimes(1)
      expect(container).toMatchSnapshot()
    });
  });
});
