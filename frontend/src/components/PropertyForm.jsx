import { useState } from 'react';
import { TIPURI_PROPRIETATI } from '../constants.js';
import styles from './PropertyForm.module.css';

const TITLU_MAX = 100;

export default function PropertyForm({ onAdd }) {
    const [titlu, setTitlu] = useState('');
    const [tipProprietate, setTipProprietate] = useState('apartament');
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
                tip_proprietate: tipProprietate,
                status: 'activ',
                vandut: false,
                categorie: 'vanzare',
                pret: 85000,
                suprafata: 50,
                camere: 2,
                locatie: 'Bucuresti',
                descriere: 'Proprietate adaugata recent',
                poze: [
                    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80'
                ],
                utilizator: 'Utilizator nou',
                data_publicarii: new Date().toISOString().slice(0, 10)
            });

            setTitlu('');
            setTipProprietate('apartament');
        } catch (err) {
            setEroare(err.message);
        } finally {
            setTrimite(false);
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit} noValidate data-testid="form">
            <label>
                Titlu
                <input
                    type="text"
                    value={titlu}
                    onChange={(event) => setTitlu(event.target.value)}
                    placeholder="Ex: Apartament 2 camere"
                    maxLength={TITLU_MAX}
                    aria-invalid={Boolean(eroare)}
                    data-testid="form-title"
                />
            </label>

            <label>
                Tip proprietate
                <select
                    value={tipProprietate}
                    onChange={(event) => setTipProprietate(event.target.value)}
                    data-testid="form-tip_proprietate"
                >
                    {TIPURI_PROPRIETATI.map((p) => (
                        <option key={p.value} value={p.value}>
                            {p.label}
                        </option>
                    ))}
                </select>
            </label>

            {eroare && (
                <p className="error" data-testid="form-error">
                    {eroare}
                </p>
            )}

            <button type="submit" className="btn" disabled={trimite} data-testid="form-submit">
                {trimite ? 'Se salveaza...' : 'Adauga anuntul'}
            </button>
        </form>
    );
}
