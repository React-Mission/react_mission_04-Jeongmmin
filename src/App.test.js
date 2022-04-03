import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Counter from './components/Counter';


test("the counter starts at 0", () => {
  render(<App />);
  expect(screen.getByText('0')).toBeTruthy();
});

test("minus button has correct text", () => {
  render(<Counter />);
    const minusBtn = screen.getByRole("button", {name: '➖'});
    expect(minusBtn).toHaveTextContent("➖");
  
});

test("plus button has correct text", () => {
    render(<Counter />);
  const plusBtn = screen.getByRole("button", {name: '➕'});
  expect(plusBtn).toHaveTextContent("➕");
});

test("When the + button is pressed, the counter changes to 1", () => {
  render(<Counter />);
  const plusBtn = screen.getByRole("button", {name: '➕'});
  fireEvent.click(plusBtn);
  expect(screen.getByText('1')).toBeTruthy();

});

test("When the - button is pressed, the counter changes to -1", () => {
  render(<Counter />);
  const minusBtn = screen.getByRole("button", {name: '➖'});
  fireEvent.click(minusBtn);
  expect(screen.getByText('-1')).toBeTruthy();

});

test("on/off button has blue color", () => {
  render(<Counter />);
  const onOffBtn = screen.getByRole("button", {name: 'On / Off'});
  expect(onOffBtn).toHaveStyle({backgroundColor: 'cornflowerblue'});
});

test("Prevent the -,+ button from being pressed when the on/off button is clicked", () => {
  render(<Counter />);
  const onOffBtn = screen.getByRole("button", {name: 'On / Off'});
  const plusBtn = screen.getByRole("button", {name: '➕'});
  const minusBtn = screen.getByRole("button", {name: '➖'});
  fireEvent.click(onOffBtn);
  expect(plusBtn && minusBtn).toHaveAttribute("disabled");
});