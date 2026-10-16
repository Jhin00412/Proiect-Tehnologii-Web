const proprietati = [
    {
        id: 1,
        titlu: "Apartament 2 camere",
        descriere: "Apartament modern, luminos, situat aproape de metrou si de zona centrala.",
        pret: 89500,
        suprafata: 52,
        camere: 2,
        locatie: "Eroilor, Bucuresti",
        poze: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80"
        ],
        tip_proprietate: "apartament",
        status: "activ",
        categorie: "vanzare",
        utilizator: "Utilizator 1",
        data_publicarii: "2026-10-01"
    },
    {
        id: 2,
        titlu: "Casa cu gradina",
        descriere: "Casa spatioasa cu gradina proprie, potrivita pentru o familie.",
        pret: 1100,
        suprafata: 120,
        camere: 4,
        locatie: "Berceni, Bucuresti",
        poze: [
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
        ],
        tip_proprietate: "casa",
        status: "activ",
        categorie: "inchiriere",
        utilizator: "Utilizator 2",
        data_publicarii: "2026-10-02"
    },
    {
        id: 3,
        titlu: "Garsoniera Iancului",
        descriere: "Garsoniera renovata complet, cu acces rapid la mijloacele de transport.",
        pret: 62000,
        suprafata: 34,
        camere: 1,
        locatie: "Iancului, Bucuresti",
        poze: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1000&q=80"
        ],
        tip_proprietate: "garsoniera",
        status: "vandut",
        categorie: "vanzare",
        utilizator: "Utilizator 3",
        data_publicarii: "2026-09-15"
    },
    {
        id: 4,
        titlu: "Apartament 3 camere",
        descriere: "Apartament spatios in zona Tineretului, disponibil initial pentru licitatie.",
        pret: 125000,
        suprafata: 75,
        camere: 3,
        locatie: "Tineretului, Bucuresti",
        poze: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80"
        ],
        tip_proprietate: "apartament",
        status: "retras",
        categorie: "licitatie",
        utilizator: "Utilizator 4",
        data_publicarii: "2026-09-20"
    }
];
export default function App() {
    const active = proprietati.filter((p) => p.status === "activ").length;
  return (
    <>
        <header className="app-header">
          <h1>Real Estate Bucharest</h1>
          <p>Gaseste imobiliarele perfecte pentru tine</p>
          <p className="app-count">
              {proprietati.length} imobiliare, dintre care {active} active
          </p>
        </header>
        <main className="container">
          <section className="panel">
          <h2>Proprietatile</h2>
          <pre>{JSON.stringify(proprietati, null, 2)}</pre>
          </section>
        </main>
    </>
  );
}
