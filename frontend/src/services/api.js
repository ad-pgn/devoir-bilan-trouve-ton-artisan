const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

async function handleResponse(response) {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Une erreur est survenue.' }));
    throw new Error(error.message || `Erreur ${response.status}`);
  }
  return response.json();
}

export async function getCategories() {
  const response = await fetch(`${API_URL}/categories`);
  return handleResponse(response);
}

export async function getArtisans(params = {}) {
  const query = new URLSearchParams(params).toString();
  const response = await fetch(`${API_URL}/artisans${query ? `?${query}` : ''}`);
  return handleResponse(response);
}

export async function getTopArtisans() {
  const response = await fetch(`${API_URL}/artisans/top`);
  return handleResponse(response);
}

export async function searchArtisans(q) {
  const response = await fetch(`${API_URL}/artisans/search?q=${encodeURIComponent(q)}`);
  return handleResponse(response);
}

export async function getArtisanById(id) {
  const response = await fetch(`${API_URL}/artisans/${id}`);
  return handleResponse(response);
}

export async function contactArtisan(id, formData) {
  const response = await fetch(`${API_URL}/artisans/${id}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  return handleResponse(response);
}