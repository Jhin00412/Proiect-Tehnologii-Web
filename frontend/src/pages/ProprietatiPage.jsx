import { useEffect, useState } from 'react';
import PropertyList from '../components/PropertyList.jsx';
import PropertyForm from '../components/PropertyForm.jsx';
import { createProprietate, deleteProprietate, fetchProprietati, updateProprietate } from '../api.js';
import styles from './ProprietatiPage.module.css';

export default function ProprietatiPage() {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    async function handleAdd(proprietate) {
        const creat = await createProprietate(proprietate);
        setProperties((prev) => [...prev, creat]);
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
            setProperties((prev) => prev.map((p) => (p.id === id ? actualizat : p)));
        } catch (err) {
            setError(err.message);
        }
    }

    async function handleDelete(id) {
        try {
            await deleteProprietate(id);
            setProperties((prev) => prev.filter((p) => p.id !== id));
        } catch (err) {
            setError(err.message);
        }
    }

    const active = properties.filter((p) => !p.vandut && p.status === 'activ').length;

    return (
        <div className={styles.grid}>
            <section className="panel">
                <h2>Adauga anunt</h2>
                <PropertyForm onAdd={handleAdd} />
            </section>
            <section className="panel">
                <h2>Anunturile mele</h2>
                <p className={styles.summary}>
                    {properties.length} anunturi, dintre care {active} active
                </p>
                {loading && (
                    <p className="info" data-testid="loading">
                        Se incarca...
                    </p>
                )}
                {error && (
                    <p className="error" data-testid="error">
                        {error}
                    </p>
                )}
                {!loading && (
                    <PropertyList
                        properties={properties}
                        onToggle={handleToggle}
                        onDelete={handleDelete}
                    />
                )}
            </section>
        </div>
    );
}
