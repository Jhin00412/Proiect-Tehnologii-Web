import './AppHeader.css';

export default function AppHeader({ propertyCount, activeCount }) {
    return (
        <header className="app-header">
            <div className="header-content">
                <h1>Real Estate Bucharest</h1>
                <p>Platforma pentru publicarea si cautarea proprietatilor imobiliare din Bucuresti.</p>
                <p className="app-count">
                    {propertyCount} anunturi, dintre care {activeCount} active
                </p>
            </div>
        </header>
    );
}
