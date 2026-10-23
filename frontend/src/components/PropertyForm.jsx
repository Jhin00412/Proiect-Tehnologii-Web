import { CATEGORIES, CATEGORY_LABELS, PROPERTY_TYPES, STATUSES, STATUS_LABELS } from '../data/properties.js';
import './PropertyForm.css';

export default function PropertyForm({
    formData,
    errorMessage,
    successMessage,
    onFieldChange,
    onSubmit
}) {
    return (
        <section className="panel">
            <h2>Adauga un anunt</h2>

            <form className="item-form" onSubmit={onSubmit}>
                <label htmlFor="titlu">
                    Titlu
                    <input
                        id="titlu"
                        name="titlu"
                        type="text"
                        value={formData.titlu}
                        onChange={onFieldChange}
                        placeholder="Ex: Apartament 2 camere"
                    />
                </label>

                <label htmlFor="descriere">
                    Descriere
                    <textarea
                        id="descriere"
                        name="descriere"
                        rows="4"
                        value={formData.descriere}
                        onChange={onFieldChange}
                        placeholder="Descrierea proprietatii"
                    />
                </label>

                <label htmlFor="pret">
                    Pret
                    <input
                        id="pret"
                        name="pret"
                        type="number"
                        min="1"
                        value={formData.pret}
                        onChange={onFieldChange}
                        placeholder="Ex: 85000"
                    />
                </label>

                <label htmlFor="suprafata">
                    Suprafata
                    <input
                        id="suprafata"
                        name="suprafata"
                        type="number"
                        min="1"
                        value={formData.suprafata}
                        onChange={onFieldChange}
                        placeholder="Ex: 50"
                    />
                </label>

                <label htmlFor="camere">
                    Numar de camere
                    <input
                        id="camere"
                        name="camere"
                        type="number"
                        min="1"
                        step="1"
                        value={formData.camere}
                        onChange={onFieldChange}
                        placeholder="Ex: 2"
                    />
                </label>

                <label htmlFor="locatie">
                    Locatie
                    <input
                        id="locatie"
                        name="locatie"
                        type="text"
                        value={formData.locatie}
                        onChange={onFieldChange}
                        placeholder="Ex: Eroilor, Bucuresti"
                    />
                </label>

                <label htmlFor="poze">
                    Fotografii (link-uri separate prin virgula sau rand nou)
                    <textarea
                        id="poze"
                        name="poze"
                        rows="3"
                        value={formData.poze}
                        onChange={onFieldChange}
                        placeholder="https://example.com/1.jpg"
                    />
                </label>

                <label htmlFor="tip-proprietate">
                    Tip proprietate
                    <select
                        id="tip-proprietate"
                        name="tip_proprietate"
                        value={formData.tip_proprietate}
                        onChange={onFieldChange}
                    >
                        {PROPERTY_TYPES.map((type) => (
                            <option key={type} value={type}>
                                {type === 'casa' ? 'Casa' : type === 'garsoniera' ? 'Garsoniera' : 'Apartament'}
                            </option>
                        ))}
                    </select>
                </label>

                <label htmlFor="status">
                    Status
                    <select
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={onFieldChange}
                    >
                        {STATUSES.map((status) => (
                            <option key={status} value={status}>
                                {STATUS_LABELS[status]}
                            </option>
                        ))}
                    </select>
                </label>

                <label htmlFor="categorie">
                    Categorie
                    <select
                        id="categorie"
                        name="categorie"
                        value={formData.categorie}
                        onChange={onFieldChange}
                    >
                        {CATEGORIES.map((category) => (
                            <option key={category} value={category}>
                                {CATEGORY_LABELS[category]}
                            </option>
                        ))}
                    </select>
                </label>

                {errorMessage ? <p className="form-message error">{errorMessage}</p> : null}
                {successMessage ? <p className="form-message success">{successMessage}</p> : null}

                <button type="submit">Adauga anuntul</button>
            </form>
        </section>
    );
}
