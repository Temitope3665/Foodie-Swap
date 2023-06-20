import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { EmptyResult } from "@/components/EmptyResult";
import ErrorAlert from "@/components/alerts/ErrorAlert";
import LoadingAlert from "@/components/alerts/LoadingAlert";
import SuccessAlert from "@/components/alerts/SuccessAlert";

describe("<Component />", () => {
  it("renders empty result", () => {
    render(<EmptyResult />);
  });

  it("renders error alert", () => {
    const props = { message: '', clear: jest.fn() }
    render(<ErrorAlert {...props}  />);

    const clearFn = screen.getByTestId('clear-fn');
    fireEvent.click(clearFn);
  });

  it("renders loading alert when message is empty", () => {
    const props = { message: '' }
    render(<LoadingAlert {...props}  />);
  });

  it("renders loading alert when message is not empty", () => {
    const props = { message: 'Loading...' }
    render(<LoadingAlert {...props}  />);
  });

  it("renders success when message is empty", () => {
    const props = { message: 'Success...' }
    render(<SuccessAlert {...props}  />);
  });
});
