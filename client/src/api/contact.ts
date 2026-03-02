import { request } from './client';

export interface ContactData {
  name: string;
  email: string;
  language: string;
  subject: string;
  message: string;
  timestamp?: number;
  website?: string;
}

export interface QuoteItem {
  category: string;
  option: string;
  price: number;
}

export interface QuoteData {
  email: string;
  language: string;
  firstName?: string;
  lastName?: string;
  items: QuoteItem[];
  oneTimeTotal: number;
  monthlyTotal: number;
  currency: string;
}

export const sendContactMessage = async (data: ContactData) => {
  return request('/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

export const sendQuoteRequest = async (data: QuoteData) => {
  return request('/contact/quote', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
