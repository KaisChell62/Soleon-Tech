// Wrapper for fetch API
// If VITE_API_URL is set, use it. Otherwise, assume backend is at /api (same domain) or a specific production URL.
const API_URL = import.meta.env.VITE_API_URL 
  ? import.meta.env.VITE_API_URL 
  : (import.meta.env.PROD ? '/api' : 'http://localhost:5000/api');

export async function request(endpoint: string, options: RequestInit = {}) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error?.message || 'Something went wrong');
  }

  return data;
}
