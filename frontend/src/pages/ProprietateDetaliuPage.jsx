import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchProprietate } from '../api.js';
import { STATUS_LABELS } from '../constants.js';
import styles from './ProprietateDetaliuPage.module.css';

export default function ProprietateDetaliuPage() {
    const { id } = useParams();
    const [proprietate, setProprietate] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ignore = false;

        fetchProprietate(id)
            .then((data) => {
                if (!ignore) {
                    setProprietate(data);
                    setError(null);
                }
            })
            .catch((err) => {
                if (!ignore) {
                    setError(err.message);
                }
            })
            .finally(() => {
                if (!ignore) {
                    setLoading(false);
                }
            });

        return () => {
            ignore = true;
        };
    }, [id]);

    if (loading) {
        return (
            <p className="info" data-testid="loading">
                Se incarca...
            </p>
        );
    }

    if (error) {
        return (
            <section className="panel">
                <p className="error" data-testid="error">
                    Proprietatea nu a putut fi incarcata: {error}
                </p>
                <Link to="/">Inapoi la lista</Link>
            </section>
        );
    }

    const isSold = Boolean(proprietate.vandut || proprietate.status === 'vandut');

    return (
        <section className={`panel ${styles.detail}`} data-testid="detail">
            <Link to="/" className={styles.back}>
                Inapoi la lista
            </Link>
            <h2 className={isSold ? styles.done : undefined} data-testid="detail-title">
                {proprietate.titlu}
            </h2>
            <dl className={styles.fields}>
                <dt>Status</dt>
                <dd>
                    <span className={`badge badge-${proprietate.status}`}>
                        {STATUS_LABELS[proprietate.status] || proprietate.status}
                    </span>
                </dd>
                <dt>Locatie</dt>
                <dd>{proprietate.locatie}</dd>
                <dt>Pret</dt>
                <dd>{proprietate.pret} EUR</dd>
                <dt>Suprafata</dt>
                <dd>{proprietate.suprafata} m2</dd>
                <dt>Camere</dt>
                <dd>{proprietate.camere}</dd>
                <dt>Tip</dt>
                <dd>{proprietate.tip_proprietate}</dd>
                <dt>Descriere</dt>
                <dd>{proprietate.descriere}</dd>
                <dt>Data publicarii</dt>
                <dd>{proprietate.data_publicarii}</dd>
                <dt>ID</dt>
                <dd>{proprietate.id}</dd>
            </dl>
        </section>
    );
}
