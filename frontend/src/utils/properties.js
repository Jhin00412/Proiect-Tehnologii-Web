import { CATEGORIES, PROPERTY_TYPES, STATUSES } from '../data/properties.js';

function parsePhotoUrls(value) {
    return value
        .split(/\n|,/)
        .map((entry) => entry.trim())
        .filter(Boolean);
}

export function createProperty(formData, properties) {
    const titlu = formData.titlu.trim();
    const descriere = formData.descriere.trim();
    const locatie = formData.locatie.trim();
    const pret = Number(formData.pret);
    const suprafata = Number(formData.suprafata);
    const camere = Number(formData.camere);
    const poze = parsePhotoUrls(formData.poze);

    if (!titlu || titlu.length > 100) {
        return { error: 'Titlul este obligatoriu si trebuie sa aiba maximum 100 de caractere.' };
    }

    if (!descriere) {
        return { error: 'Descrierea este obligatorie.' };
    }

    if (!locatie || locatie.length > 150) {
        return { error: 'Locatia este obligatorie si trebuie sa aiba maximum 150 de caractere.' };
    }

    if (!Number.isFinite(pret) || pret <= 0) {
        return { error: 'Pretul trebuie sa fie un numar pozitiv.' };
    }

    if (!Number.isFinite(suprafata) || suprafata <= 0) {
        return { error: 'Suprafata trebuie sa fie un numar pozitiv.' };
    }

    if (!Number.isInteger(camere) || camere < 1) {
        return { error: 'Numarul de camere trebuie sa fie un numar intreg pozitiv.' };
    }

    if (poze.length === 0) {
        return { error: 'Este necesara cel putin o fotografie valida.' };
    }

    if (!PROPERTY_TYPES.includes(formData.tip_proprietate)) {
        return { error: 'Tipul proprietatii este invalid.' };
    }

    if (!STATUSES.includes(formData.status)) {
        return { error: 'Statusul proprietatii este invalid.' };
    }

    if (!CATEGORIES.includes(formData.categorie)) {
        return { error: 'Categoria proprietatii este invalida.' };
    }

    const property = {
        id: properties.reduce((maxId, current) => Math.max(maxId, current.id), 0) + 1,
        titlu,
        descriere,
        pret,
        suprafata,
        camere,
        locatie,
        poze,
        tip_proprietate: formData.tip_proprietate,
        status: formData.status,
        categorie: formData.categorie,
        utilizator: formData.utilizator.trim() || 'Utilizator nou',
        data_publicarii: new Date().toISOString().slice(0, 10)
    };

    return { property };
}

export function formatPrice(value, category) {
    const formatted = new Intl.NumberFormat('ro-RO', {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 0
    }).format(value);

    return category === 'inchiriere' ? `${formatted} / luna` : formatted;
}

export function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}
