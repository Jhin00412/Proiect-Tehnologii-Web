import PropertyCard from './PropertyCard.jsx';
import styles from './PropertyList.module.css';

export default function PropertyList({ properties, onToggle, onDelete }) {
    if (properties.length === 0) {
        return (
            <p className="empty" data-testid="empty">
                Nu exista niciun anunt.
            </p>
        );
    }

    return (
        <ul className={styles.list}>
            {properties.map((property) => (
                <PropertyCard
                    key={property.id}
                    property={property}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}
