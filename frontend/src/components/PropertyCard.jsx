import { CATEGORY_LABELS, STATUS_LABELS } from '../data/properties.js';
import { capitalize, formatPrice } from '../utils/properties.js';
import './PropertyCard.css';

export default function PropertyCard({
    property,
    onStatusChange,
    onSoldToggle,
    onDelete
}) {
    const isSold = property.status === 'vandut';

    return (
        <li className={`item-card ${isSold ? 'done' : ''}`}>
            <img src={property.poze[0]} alt={property.titlu} />

            <div className="item-content">
                <div className="item-header">
                    <div>
                        <h3>{property.titlu}</h3>
                        <p>{property.locatie}</p>
                    </div>

                    <span className={`status ${isSold ? 'sold' : ''}`}>
                        {STATUS_LABELS[property.status]}
                    </span>
                </div>

                <p className="description">{property.descriere}</p>

                <div className="details">
                    <span>{capitalize(property.tip_proprietate)}</span>
                    <span>{property.suprafata} m²</span>
                    <span>{property.camere} camere</span>
                </div>

                <div className="item-bottom">
                    <strong>{formatPrice(property.pret, property.categorie)}</strong>
                    <span className="category">{CATEGORY_LABELS[property.categorie]}</span>
                </div>

                <div className="property-actions">
                    <label className="sold-toggle" htmlFor={`sold-${property.id}`}>
                        <input
                            id={`sold-${property.id}`}
                            type="checkbox"
                            checked={isSold}
                            onChange={(event) =>
                                onSoldToggle(property.id, event.target.checked)
                            }
                        />
                        Marcheaza ca vandut
                    </label>

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

                    <button
                        className="delete-property"
                        type="button"
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
