import { Link } from 'react-router-dom';
import { STATUS_LABELS } from '../constants.js';
import styles from './PropertyCard.module.css';

export default function PropertyCard({ property, onToggle, onDelete }) {
    const isSold = Boolean(property.vandut || property.status === 'vandut');

    return (
        <li
            className={isSold ? `${styles.card} ${styles.done}` : styles.card}
            data-testid="item"
            data-id={property.id}
        >
            <div className={styles.main}>
                <input
                    type="checkbox"
                    checked={isSold}
                    onChange={() => onToggle(property.id)}
                    aria-label={`Marcheaza ${property.titlu}`}
                    data-testid="item-toggle"
                />
                <div>
                    <Link
                        to={`/proprietati/${property.id}`}
                        className={styles.title}
                        data-testid="item-link"
                    >
                        {property.titlu}
                    </Link>
                    <span className={`badge badge-${property.status}`}>
                        {STATUS_LABELS[property.status] || property.status}
                    </span>
                    <span className={styles.meta}>
                        {property.locatie} - {property.pret} EUR
                    </span>
                </div>
            </div>
            <button
                className="btn-danger"
                onClick={() => onDelete(property.id)}
                aria-label={`Sterge ${property.titlu}`}
                data-testid="item-delete"
            >
                Sterge
            </button>
        </li>
    );
}
