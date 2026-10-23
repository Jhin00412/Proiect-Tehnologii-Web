import PropertyCard from './PropertyCard.jsx';
import { CATEGORIES, CATEGORY_LABELS, STATUSES, STATUS_LABELS } from '../data/properties.js';
import './PropertyList.css';

export default function PropertyList({
    properties,
    filters,
    onFiltersChange,
    onStatusChange
}) {
    const updateFilter = (name, value) => {
        onFiltersChange((previous) => ({ ...previous, [name]: value }));
    };

    return (
        <section className="panel">
            <h2>Anunturile mele</h2>

            <div className="property-toolbar">
                <input
                    type="search"
                    aria-label="Cautare proprietati"
                    placeholder="Cauta dupa titlu, locatie sau descriere"
                    value={filters.query}
                    onChange={(event) => updateFilter('query', event.target.value)}
                />

                <select
                    aria-label="Filtreaza dupa categorie"
                    value={filters.category}
                    onChange={(event) => updateFilter('category', event.target.value)}
                >
                    <option value="all">Toate categoriile</option>
                    {CATEGORIES.map((category) => (
                        <option key={category} value={category}>
                            {CATEGORY_LABELS[category]}
                        </option>
                    ))}
                </select>

                <select
                    aria-label="Filtreaza dupa status"
                    value={filters.status}
                    onChange={(event) => updateFilter('status', event.target.value)}
                >
                    <option value="all">Toate statusurile</option>
                    {STATUSES.map((status) => (
                        <option key={status} value={status}>
                            {STATUS_LABELS[status]}
                        </option>
                    ))}
                </select>
            </div>

            {properties.length === 0 ? (
                <p className="empty-state">Niciun anunt nu corespunde filtrelor curente.</p>
            ) : (
                <ul className="item-list">
                    {properties.map((property) => (
                        <PropertyCard
                            key={property.id}
                            property={property}
                            onStatusChange={onStatusChange}
                        />
                    ))}
                </ul>
            )}
        </section>
    );
}
