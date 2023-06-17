import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "../components/common/button/Button";
import { IButton } from "../utils/types/components/button";

describe("Button component", () => {
  let buttonProps: IButton;
  let buttonElement: ReturnType<typeof render>;

  beforeEach(() => {
    buttonProps = {
      primary: true,
      backgroundColor: "#0a4da3",
      size: "medium",
      label: "Click me",
      isLoading: false,
      disabled: false,
      children: "Button",
      onClick: jest.fn(),
      ml: "",
      color: "",
      mt: "",
      width: "",
      height: "",
    };
    buttonElement = render(<Button {...buttonProps} />);
  });

  it("renders with label when isLoading is false", () => {
    const { getByTestId } = buttonElement;
    const button = getByTestId("button");
    expect(button).toBeTruthy();
  });

  it("renders with loading spinner when isLoading is true", () => {
    buttonProps.isLoading = true;
    buttonElement.rerender(<Button {...buttonProps} />);
  });

  it("calls onClick when clicked", () => {
    const { getByTestId } = buttonElement;
    const button = getByTestId("button");
    fireEvent.click(button);
    expect(buttonProps.onClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    buttonProps.disabled = true;
    buttonElement.rerender(<Button {...buttonProps} />);
    const { getByTestId } = buttonElement;
    const button = getByTestId("button");
    fireEvent.click(button);
    expect(buttonProps.onClick).not.toHaveBeenCalled();
  });

  it("renders with primary styles when primary prop is true", () => {
    const { getByTestId } = buttonElement;
    const button = getByTestId("button");
    expect(button.classList.contains("storybook-button--primary")).toBe(true);
  });

  it("renders with secondary styles when primary prop is false", () => {
    buttonProps.primary = false;
    buttonElement.rerender(<Button {...buttonProps} />);
    const { getByTestId } = buttonElement;
    const button = getByTestId("button");
    expect(button.classList.contains("storybook-button--secondary")).toBe(true);
  });
});
