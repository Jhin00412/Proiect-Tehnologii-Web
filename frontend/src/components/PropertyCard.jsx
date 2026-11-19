import { CATEGORY_LABELS, STATUS_LABELS } from '../data/properties.js';
import { capitalize, formatPrice } from '../utils/properties.js';
import './PropertyCard.css';

export default function PropertyCard({
    property,
    onToggle,
    onSoldToggle,
    onStatusChange,
    onDelete
}) {
    const isSold = Boolean(property.vandut || property.status === 'vandut');

    const handleToggle = () => {
        if (onToggle) {
            onToggle(property.id);
        } else if (onSoldToggle) {
            onSoldToggle(property.id, !isSold);
        }
    };

    return (
        <li
            className={`item-card ${isSold ? 'done' : ''}`}
            data-testid="item"
            data-id={property.id}
        >
            <img
                src={property.poze && property.poze[0] ? property.poze[0] : 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80'}
                alt={property.titlu}
            />

            <div className="item-content">
                <div className="item-header">
                    <div>
                        <h3 data-testid="item-title">{property.titlu}</h3>
                        <p>{property.locatie}</p>
                    </div>

                    <span className={`status ${isSold ? 'sold' : ''}`}>
                        {STATUS_LABELS[property.status] || property.status}
                    </span>
                </div>

                <p className="description">{property.descriere}</p>

                <div className="details">
                    <span>{capitalize(property.tip_proprietate)}</span>
                    <span>{property.suprafata} m2</span>
                    <span>{property.camere} camere</span>
                </div>

                <div className="item-bottom">
                    <strong>{formatPrice(property.pret, property.categorie)}</strong>
                    <span className="category">{CATEGORY_LABELS[property.categorie] || property.categorie}</span>
                </div>

                <div className="property-actions">
                    <label className="sold-toggle" htmlFor={`sold-${property.id}`}>
                        <input
                            id={`sold-${property.id}`}
                            type="checkbox"
                            checked={isSold}
                            data-testid="item-toggle"
                            onChange={handleToggle}
                        />
                        Marcheaza ca vandut
                    </label>

                    {onStatusChange && (
                        <label className="status-selector" htmlFor={`status-${property.id}`}>
                            <span>Schimba status</span>
                            <select
                                id={`status-${property.id}`}
                                value={property.status}
                                onChange={(event) =>
                                    onStatusChange(property.id, event.target.value)
                                }
                            >
                                {Object.entries(STATUS_LABELS).map(([status, label]) => (
                                    <option key={status} value={status}>
                                        {label}
                                    </option>
                                ))}
                            </select>
                        </label>
                    )}

                    <button
                        className="delete-property"
                        type="button"
                        data-testid="item-delete"
                        onClick={() => onDelete(property.id)}
                        aria-label={`Sterge anuntul: ${property.titlu}`}
                    >
                        Sterge anuntul
                    </button>
                </div>
            </div>
        </li>
    );
}
