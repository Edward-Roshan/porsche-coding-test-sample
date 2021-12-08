import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('open window', () => {
  render(<App />);
  var windowBtn = screen.getByText(/弹框/i);
  expect(windowBtn).toBeInTheDocument();
  fireEvent.click(windowBtn);
  var tableHeader = screen.queryByText("fixed Header");
  expect(tableHeader).toBeVisible();
});

test('close window', () => {
  render(<App />);
  var windowBtn = screen.getByText(/弹框/i);
  expect(windowBtn).toBeInTheDocument();
  fireEvent.click(windowBtn);
  var tableHeader = screen.queryByText("fixed Header");
  expect(tableHeader).toBeVisible();

  var closeWindowBtn = screen.getByText(/关闭/i);
  fireEvent.click(closeWindowBtn);
  expect(tableHeader).toBeVisible();
});

test('show data', () => {
  render(<App />);
  var windowBtn = screen.getByText(/弹框/i);
  expect(windowBtn).toBeInTheDocument();
  fireEvent.click(windowBtn);
  var tableHeader = screen.queryByText("fixed Header");
  expect(tableHeader).toBeVisible();

  var data = screen.getAllByText(/Demo Data/i);
  expect(data.length).toBe(30);
});