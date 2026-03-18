const API_URL = import.meta.env.VITE_API_URL || 'https://torneo-1v1-app.vercel.app/api';

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok || data.ok === false) {
    throw new Error(data.message || 'Error en la petición');
  }

  return data;
}

export async function getSlots() {
  const res = await request('/slots');
  return res.data || [];
}

export async function getEntries(filters = {}) {
  const params = new URLSearchParams();

  if (filters.day) params.append('day', filters.day);
  if (filters.slotId) params.append('slotId', filters.slotId);

  const query = params.toString() ? `?${params.toString()}` : '';
  const res = await request(`/entries${query}`);
  return res.data || [];
}

export async function createEntry(payload) {
  const res = await request('/entries', {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  return res.data;
}

export async function updateEntryById(entryId, payload) {
  const res = await request(`/entries/${entryId}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
  });

  return res.data;
}

export async function deleteEntryById(entryId) {
  const res = await request(`/entries/${entryId}`, {
    method: 'DELETE',
  });

  return res.data;
}