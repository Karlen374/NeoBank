import { InformationSection } from '@components';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

describe('information Section Test', () => {
  test('information Section Navigation', () => {
    render(<InformationSection />);
    const ratesButton = screen.getByText('Rates and conditions');
    const cashbackbutton = screen.getByText('Cashback');
    const faqButton = screen.getByText('FAQ');

    const aboutSection = screen.getByTestId(/about-section/i);
    expect(aboutSection).toBeInTheDocument();

    fireEvent.click(ratesButton);
    const ratesSection = screen.getByTestId(/rates-section/i);
    expect(ratesSection).toBeInTheDocument();

    fireEvent.click(cashbackbutton);
    const cashbackSection = screen.getByTestId(/cashback-section/i);
    expect(cashbackSection).toBeInTheDocument();

    fireEvent.click(faqButton);
    const faqSection = screen.getByTestId(/faq-section/i);
    expect(faqSection).toBeInTheDocument();
  });
});
