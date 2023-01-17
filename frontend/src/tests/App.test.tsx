import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('renders loading page', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/Agora/i);
  expect(linkElement).toBeInTheDocument();
});
test('search box', async () => {
  render(<App />);
  const searchBox = await screen.findByRole('textbox');
  expect(searchBox).toBeInTheDocument();
  await userEvent.type(searchBox, 'agor');
  const noResults = await screen.findByText(/agora/i);
  expect(noResults).toBeInTheDocument();
});
test('dropdown', async () => {
  render(<App />);
  const optionList = await screen.findAllByRole('list');
  expect(optionList).toMatchSnapshot(`[<ul class="options "><li class="option  ">Payroll</li><li class="option  ">Treasury</li><li class="option  ">Implementation</li><li class="option  ">Bank Payments</li></ul>]`);
  const selectServices = await screen.findByText('Bank Payments');
  await userEvent.click(selectServices);
  const filteredServices = await screen.findAllByText('Bank Payments');
  expect(filteredServices).toMatchSnapshot(`[<button class="optionBadge">Bank Payments<span class="removeBtn">×</span></button>, <li class="option selected highlighted">Bank Payments</li>]`);


});
