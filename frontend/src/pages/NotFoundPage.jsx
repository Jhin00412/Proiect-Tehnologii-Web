import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <section className="panel" data-testid="not-found">
            <h2>Pagina nu exista</h2>
            <p className="info">Adresa ceruta nu duce nicaieri.</p>
            <Link to="/">Inapoi la anunturi</Link>
        </section>
    );
}
