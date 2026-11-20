export const TIPURI_PROPRIETATI = [
    { value: 'apartament', label: 'Apartament' },
    { value: 'casa', label: 'Casa' },
    { value: 'garsoniera', label: 'Garsoniera' }
];

export const ETICHETE_TIPURI = Object.fromEntries(
    TIPURI_PROPRIETATI.map((t) => [t.value, t.label])
);

export const STATUSURI = [
    { value: 'activ', label: 'Activ' },
    { value: 'vandut', label: 'Vandut' },
    { value: 'retras', label: 'Retras' }
];

export const ETICHETE_STATUS = Object.fromEntries(
    STATUSURI.map((s) => [s.value, s.label])
);

export const CATEGORII = [
    { value: 'vanzare', label: 'Vanzare' },
    { value: 'inchiriere', label: 'Inchiriere' },
    { value: 'licitatie', label: 'Licitatie' }
];

export const ETICHETE_CATEGORII = Object.fromEntries(
    CATEGORII.map((c) => [c.value, c.label])
);

export const PROPERTY_TYPES = TIPURI_PROPRIETATI.map((t) => t.value);
export const STATUSES = STATUSURI.map((s) => s.value);
export const CATEGORIES = CATEGORII.map((c) => c.value);
export const STATUS_LABELS = ETICHETE_STATUS;
export const CATEGORY_LABELS = ETICHETE_CATEGORII;
