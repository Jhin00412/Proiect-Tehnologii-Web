export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

async function request(path, options = {}) {
    const res = await fetch(`${API_URL}${path}`, {
        ...options,
        headers: { "Content-Type": "application/json", ...options.headers }
    });
    if (!res.ok) {
        throw new Error(`Eroare server: ${res.status}`);
    }
    return res.status === 204 ? null : res.json();
}

export function fetchProprietati() {
    return request("/proprietati");
}

export function fetchProprietate(id) {
    return request(`/proprietati/${id}`);
}

export function createProprietate(proprietate) {
    return request("/proprietati", {
        method: "POST",
        body: JSON.stringify(proprietate)
    });
}

export function updateProprietate(id, changes) {
    return request(`/proprietati/${id}`, {
        method: "PATCH",
        body: JSON.stringify(changes)
    });
}

export function deleteProprietate(id) {
    return request(`/proprietati/${id}`, {
        method: "DELETE"
    });
}
