import "@testing-library/jest-dom"; // ← This must be included
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";

test("displays the toggle button", () => {
  const mockToggle = jest.fn();
  render(<Header isDarkMode={false} onDarkModeClick={mockToggle} />);

  const button = screen.getByRole("button", { name: /light mode/i });
  expect(button).toBeInTheDocument();

  fireEvent.click(button);
  expect(mockToggle).toHaveBeenCalledTimes(1);
});
