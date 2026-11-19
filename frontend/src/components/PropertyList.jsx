import PropertyCard from './PropertyCard.jsx';
import { CATEGORIES, CATEGORY_LABELS, STATUSES, STATUS_LABELS } from '../data/properties.js';
import './PropertyList.css';

export default function PropertyList({
    properties,
    filters,
    onFiltersChange,
    onToggle,
    onSoldToggle,
    onStatusChange,
    onDelete
}) {
    const updateFilter = (name, value) => {
        if (onFiltersChange) {
            onFiltersChange((previous) => ({ ...previous, [name]: value }));
        }
    };

    return (
        <>
            {filters && onFiltersChange && (
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
            )}

            {properties.length === 0 ? (
                <p className="empty-state" data-testid="empty">
                    Niciun anunt disponibil.
                </p>
            ) : (
                <ul className="item-list">
                    {properties.map((property) => (
                        <PropertyCard
                            key={property.id}
                            property={property}
                            onToggle={onToggle}
                            onSoldToggle={onSoldToggle}
                            onStatusChange={onStatusChange}
                            onDelete={onDelete}
                        />
                    ))}
                </ul>
            )}
        </>
    );
}
