import { useState } from 'react';
import { CATEGORIES, CATEGORY_LABELS, PROPERTY_TYPES } from '../data/properties.js';
import './PropertyForm.css';

const TITLU_MAX = 100;

export default function PropertyForm({ onAdd }) {
    const [titlu, setTitlu] = useState('');
    const [descriere, setDescriere] = useState('');
    const [pret, setPret] = useState('');
    const [suprafata, setSuprafata] = useState('');
    const [camere, setCamere] = useState('');
    const [locatie, setLocatie] = useState('');
    const [tipProprietate, setTipProprietate] = useState('apartament');
    const [categorie, setCategorie] = useState('vanzare');
    const [eroare, setEroare] = useState('');
    const [trimite, setTrimite] = useState(false);

    function valideaza() {
        const t = titlu.trim();
        if (t === '') {
            return 'Titlul este obligatoriu.';
        }
        if (t.length > TITLU_MAX) {
            return `Titlul are maximum ${TITLU_MAX} de caractere.`;
        }
        if (pret !== '' && Number(pret) <= 0) {
            return 'Pretul trebuie sa fie un numar pozitiv.';
        }
        return '';
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const mesaj = valideaza();
        if (mesaj) {
            setEroare(mesaj);
            return;
        }

        setEroare('');
        setTrimite(true);

        try {
            await onAdd({
                titlu: titlu.trim(),
                descriere: descriere.trim() || 'Proprietate adaugata recent',
                pret: pret !== '' ? Number(pret) : 85000,
                suprafata: suprafata !== '' ? Number(suprafata) : 50,
                camere: camere !== '' ? Number(camere) : 2,
                locatie: locatie.trim() || 'Bucuresti',
                poze: [
                    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80'
                ],
                tip_proprietate: tipProprietate,
                status: 'activ',
                vandut: false,
                categorie: categorie,
                utilizator: 'Utilizator nou',
                data_publicarii: new Date().toISOString().slice(0, 10)
            });

            setTitlu('');
            setDescriere('');
            setPret('');
            setSuprafata('');
            setCamere('');
            setLocatie('');
            setTipProprietate('apartament');
            setCategorie('vanzare');
        } catch (err) {
            setEroare(err.message);
        } finally {
            setTrimite(false);
        }
    }

    return (
        <form className="task-form item-form" onSubmit={handleSubmit} noValidate data-testid="form">
            <label htmlFor="form-title">
                Titlu
                <input
                    id="form-title"
                    type="text"
                    value={titlu}
                    onChange={(event) => setTitlu(event.target.value)}
                    placeholder="Ex: Apartament 2 camere"
                    maxLength={TITLU_MAX}
                    aria-invalid={Boolean(eroare)}
                    data-testid="form-title"
                />
            </label>

            <label htmlFor="form-descriere">
                Descriere
                <textarea
                    id="form-descriere"
                    rows="3"
                    value={descriere}
                    onChange={(event) => setDescriere(event.target.value)}
                    placeholder="Descrierea proprietatii"
                    data-testid="form-descriere"
                />
            </label>

            <label htmlFor="form-pret">
                Pret
                <input
                    id="form-pret"
                    type="number"
                    min="1"
                    value={pret}
                    onChange={(event) => setPret(event.target.value)}
                    placeholder="Ex: 85000"
                    data-testid="form-pret"
                />
            </label>

            <label htmlFor="form-suprafata">
                Suprafata
                <input
                    id="form-suprafata"
                    type="number"
                    min="1"
                    value={suprafata}
                    onChange={(event) => setSuprafata(event.target.value)}
                    placeholder="Ex: 50"
                    data-testid="form-suprafata"
                />
            </label>

            <label htmlFor="form-camere">
                Numar de camere
                <input
                    id="form-camere"
                    type="number"
                    min="1"
                    step="1"
                    value={camere}
                    onChange={(event) => setCamere(event.target.value)}
                    placeholder="Ex: 2"
                    data-testid="form-camere"
                />
            </label>

            <label htmlFor="form-locatie">
                Locatie
                <input
                    id="form-locatie"
                    type="text"
                    value={locatie}
                    onChange={(event) => setLocatie(event.target.value)}
                    placeholder="Ex: Eroilor, Bucuresti"
                    data-testid="form-locatie"
                />
            </label>

            <label htmlFor="form-tip_proprietate">
                Tip proprietate
                <select
                    id="form-tip_proprietate"
                    value={tipProprietate}
                    onChange={(event) => setTipProprietate(event.target.value)}
                    data-testid="form-tip_proprietate"
                >
                    {PROPERTY_TYPES.map((type) => (
                        <option key={type} value={type}>
                            {type === 'casa' ? 'Casa' : type === 'garsoniera' ? 'Garsoniera' : 'Apartament'}
                        </option>
                    ))}
                </select>
            </label>

            <label htmlFor="form-categorie">
                Categorie
                <select
                    id="form-categorie"
                    value={categorie}
                    onChange={(event) => setCategorie(event.target.value)}
                    data-testid="form-categorie"
                >
                    {CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>
                            {CATEGORY_LABELS[cat]}
                        </option>
                    ))}
                </select>
            </label>

            {eroare && (
                <p className="error form-message" data-testid="form-error">
                    {eroare}
                </p>
            )}

            <button type="submit" disabled={trimite} data-testid="form-submit">
                {trimite ? 'Se salveaza...' : 'Adauga anuntul'}
            </button>
        </form>
    );
}
