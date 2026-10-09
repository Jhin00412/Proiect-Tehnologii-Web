# Stage 2: AI log

## Tools

- ChatGPT

## Conversations

- [share link](https://chatgpt.com/share/6ac8803e-80d4-83ed-8aac-d80a9e715965) (Definirea exemplelor unor date de structura pentru un anunt)

## Key requests

### 1. Set de date pentru a testa functia adauggaAnunt

- Asked: pentru aceasta structura da mi niste exemple:
const proprietateNoua = {
        id: nextId(lista),
        titlu: titlu,
        descriere: descriere,
        pret: date.pret,
        suprafata: date.suprafata,
        camere: date.camere,
        locatie: locatie,
        poze: [...date.poze],
        tip_proprietate: date.tip_proprietate,
        status: date.status,
        categorie: date.categorie,
        utilizator: date.utilizator.trim(),
        data_publicarii: date.data_publicarii
    };

- Got:
const proprietati = [
    {
        id: 1,
        titlu: "Apartament 2 camere în Drumul Taberei",
        descriere: "Apartament renovat, mobilat modern, situat la etajul 3, aproape de metrou și de magazine.",
        pret: 75000,
        suprafata: 52,
        camere: 2,
        locatie: "Drumul Taberei, București",
        poze: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
        ],
        tip_proprietate: "apartament",
        status: "disponibila",
        categorie: "vanzare",
        utilizator: "ion.popescu@email.com",
        data_publicarii: "2026-10-01"
    },
    {
        id: 2,
        titlu: "Garsonieră modernă în Militari",
        descriere: "Garsonieră luminoasă, complet mobilată și utilată, ideală pentru o persoană sau pentru investiție.",
        pret: 45000,
        suprafata: 32,
        camere: 1,
        locatie: "Militari, București",
        poze: [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
        ],
        tip_proprietate: "garsoniera",
        status: "disponibila",
        categorie: "vanzare",
        utilizator: "maria.ionescu@email.com",
        data_publicarii: "2026-10-02"
    },
    {
        id: 3,
        titlu: "Casă cu grădină în Otopeni",
        descriere: "Casă individuală cu trei dormitoare, living spațios, două băi, terasă și grădină proprie.",
        pret: 185000,
        suprafata: 145,
        camere: 4,
        locatie: "Otopeni, Ilfov",
        poze: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
        ],
        tip_proprietate: "casa",
        status: "disponibila",
        categorie: "vanzare",
        utilizator: "andrei.marin@email.com",
        data_publicarii: "2026-10-03"
    },
    {
        id: 4,
        titlu: "Apartament 3 camere de închiriat",
        descriere: "Apartament decomandat, mobilat, cu balcon și loc de parcare, situat într-un bloc modern.",
        pret: 650,
        suprafata: 78,
        camere: 3,
        locatie: "Tineretului, București",
        poze: [
            "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea"
        ],
        tip_proprietate: "apartament",
        status: "disponibila",
        categorie: "inchiriere",
        utilizator: "elena.dumitru@email.com",
        data_publicarii: "2026-10-04"
    },
    {
        id: 5,
        titlu: "Teren intravilan pentru construcții",
        descriere: "Teren intravilan cu acces la drum asfaltat și utilități în apropiere, potrivit pentru construirea unei case.",
        pret: 60000,
        suprafata: 500,
        camere: 0,
        locatie: "Bragadiru, Ilfov",
        poze: [
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef"
        ],
        tip_proprietate: "teren",
        status: "disponibila",
        categorie: "vanzare",
        utilizator: "mihai.stan@email.com",
        data_publicarii: "2026-10-05"
    },
    {
        id: 6,
        titlu: "Apartament de lux cu vedere panoramică",
        descriere: "Apartament premium cu finisaje de calitate, living generos, două băi și terasă cu vedere asupra orașului.",
        pret: 220000,
        suprafata: 110,
        camere: 3,
        locatie: "Floreasca, București",
        poze: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3"
        ],
        tip_proprietate: "apartament",
        status: "rezervata",
        categorie: "vanzare",
        utilizator: "robert.georgescu@email.com",
        data_publicarii: "2026-10-06"
    }
];

- Changed or rejected: Am adaugat o parte din ele pentru a testa validarea de la final in care este cerut un exemplu de anunt, dar am modificat anumiti parametrii de exemplu eu am definit "activ" pentru proprietati iar el a scris "disponibil".


