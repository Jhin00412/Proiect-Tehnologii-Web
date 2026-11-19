import { useEffect, useMemo, useState } from 'react';
import AppHeader from './components/AppHeader.jsx';
import PropertyForm from './components/PropertyForm.jsx';
import PropertyList from './components/PropertyList.jsx';
import { createProprietate, deleteProprietate, fetchProprietati, updateProprietate } from './api.js';
import './App.css';

function getInitialTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function App() {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({ query: '', status: 'all', category: 'all' });
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        let ignore = false;

        async function load() {
            try {
                const data = await fetchProprietati();
                if (!ignore) {
                    setProperties(data);
                }
            } catch (err) {
                if (!ignore) {
                    setError(err.message);
                }
            } finally {
                if (!ignore) {
                    setLoading(false);
                }
            }
        }

        load();

        return () => {
            ignore = true;
        };
    }, []);

    const activeCount = properties.filter((property) => property.status === 'activ' && !property.vandut).length;

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

    async function handleAdd(proprietate) {
        const creat = await createProprietate(proprietate);
        setProperties((previous) => [...previous, creat]);
    }

    async function handleToggle(id) {
        const prop = properties.find((p) => p.id === id);
        if (!prop) {
            return;
        }

        const nextVandut = !(prop.vandut || prop.status === 'vandut');

        try {
            const actualizat = await updateProprietate(id, {
                vandut: nextVandut,
                status: nextVandut ? 'vandut' : 'activ'
            });
            setProperties((previous) =>
                previous.map((p) => (p.id === id ? actualizat : p))
            );
        } catch (err) {
            setError(err.message);
        }
    }

    async function handleDelete(id) {
        try {
            await deleteProprietate(id);
            setProperties((previous) =>
                previous.filter((p) => p.id !== id)
            );
        } catch (err) {
            setError(err.message);
        }
    }

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
                <section className="panel">
                    <h2>Adauga anunt</h2>
                    <PropertyForm onAdd={handleAdd} />
                </section>

                <section className="panel">
                    <h2>Anunturile mele</h2>

                    {loading && (
                        <p className="info" data-testid="loading">
                            Se incarca proprietatile...
                        </p>
                    )}

                    {error && (
                        <p className="error" data-testid="error">
                            {error}
                        </p>
                    )}

                    {!loading && (
                        <PropertyList
                            properties={visibleProperties}
                            filters={filters}
                            onFiltersChange={setFilters}
                            onToggle={handleToggle}
                            onDelete={handleDelete}
                        />
                    )}
                </section>
            </main>

            <footer className="app-footer">Proiect Tehnologii Web - Doamne ajuta</footer>
        </>
    );
}
