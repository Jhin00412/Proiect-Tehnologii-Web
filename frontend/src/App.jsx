import { useMemo, useState } from 'react';
import AppHeader from './components/AppHeader.jsx';
import PropertyForm from './components/PropertyForm.jsx';
import PropertyList from './components/PropertyList.jsx';
import {
    EMPTY_PROPERTY_FORM,
    initialProperties,
    STATUSES
} from './data/properties.js';
import { createProperty } from './utils/properties.js';
import './App.css';

function getInitialTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function App() {
    const [properties, setProperties] = useState(initialProperties);
    const [filters, setFilters] = useState({ query: '', status: 'all', category: 'all' });
    const [formData, setFormData] = useState(EMPTY_PROPERTY_FORM);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [theme, setTheme] = useState(getInitialTheme);

    const activeCount = properties.filter((property) => property.status === 'activ').length;

    const visibleProperties = useMemo(() => {
        const query = filters.query.trim().toLowerCase();

        return properties.filter((property) => {
            const matchesQuery =
                !query ||
                property.titlu.toLowerCase().includes(query) ||
                property.locatie.toLowerCase().includes(query) ||
                property.descriere.toLowerCase().includes(query);
            const matchesStatus = filters.status === 'all' || property.status === filters.status;
            const matchesCategory =
                filters.category === 'all' || property.categorie === filters.category;

            return matchesQuery && matchesStatus && matchesCategory;
        });
    }, [filters, properties]);

    const handleFieldChange = (event) => {
        const { name, value } = event.target;
        setFormData((previous) => ({ ...previous, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        const result = createProperty(formData, properties);

        if (result.error) {
            setErrorMessage(result.error);
            return;
        }

        setProperties((previous) => [result.property, ...previous]);
        setFormData(EMPTY_PROPERTY_FORM);
        setSuccessMessage('Anuntul a fost adaugat cu succes.');
    };

    const handleStatusChange = (propertyId, status) => {
        setProperties((previous) =>
            previous.map((property) =>
                property.id === propertyId ? { ...property, status } : property
            )
        );
    };

    const handleSoldToggle = (propertyId, isSold) => {
        setProperties((previous) =>
            previous.map((property) =>
                property.id === propertyId
                    ? { ...property, status: isSold ? 'vandut' : 'activ' }
                    : property
            )
        );
    };

    const handleDelete = (propertyId) => {
        setProperties((previous) =>
            previous.filter((property) => property.id !== propertyId)
        );
    };

    const handleThemeToggle = () => {
        const nextTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme);
        document.documentElement.dataset.theme = nextTheme;
    };

    return (
        <>
            <AppHeader
                propertyCount={properties.length}
                activeCount={activeCount}
                theme={theme}
                onThemeToggle={handleThemeToggle}
            />

            <main className="container">
                <PropertyForm
                    formData={formData}
                    errorMessage={errorMessage}
                    successMessage={successMessage}
                    onFieldChange={handleFieldChange}
                    onSubmit={handleSubmit}
                />
                <PropertyList
                    properties={visibleProperties}
                    filters={filters}
                    onFiltersChange={setFilters}
                    onStatusChange={handleStatusChange}
                    onSoldToggle={handleSoldToggle}
                    onDelete={handleDelete}
                />
            </main>

            <footer className="app-footer">Proiect Tehnologii Web - Doamne ajuta</footer>
        </>
    );
}
