const TIPURI_PROPRIETATI = [
    "apartament",
    "casa",
    "garsoniera"
];

const STATUSURI = [
    "activ",
    "vandut",
    "retras"
];

const CATEGORII = [
    "vanzare",
    "inchiriere",
    "licitatie"
];

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

function listeazaTitluri(lista) {
    return lista.map(proprietate => proprietate.titlu);
}

function numaraActive(lista) {
    return lista.filter(
        proprietate => proprietate.status === "activ"
    ).length;
}

function cautaProprietati(lista, text) {
    const termen = text.trim().toLowerCase();

    if (!termen) {
        return [];
    }

    return lista.filter(proprietate =>
        proprietate.titlu.toLowerCase().includes(termen) ||
        proprietate.locatie.toLowerCase().includes(termen)
    );
}

function nextId(lista) {
    return lista.reduce(
        (max, proprietate) => Math.max(max, proprietate.id),
        0
    ) + 1;
}

function adaugaProprietate(lista, date) {
    if (!date || typeof date !== "object") {
        console.error("Datele proprietatii sunt invalide.");
        return lista;
    }

    const titlu =
        typeof date.titlu === "string"
            ? date.titlu.trim()
            : "";

    const descriere =
        typeof date.descriere === "string"
            ? date.descriere.trim()
            : "";

    const locatie =
        typeof date.locatie === "string"
            ? date.locatie.trim()
            : "";

    if (!titlu || titlu.length > 100) {
        console.error(
            "Titlul este obligatoriu si trebuie sa aiba maximum 100 de caractere."
        );
        return lista;
    }

    if (!descriere) {
        console.error("Descrierea este obligatorie.");
        return lista;
    }

    if (!locatie || locatie.length > 150) {
        console.error(
            "Locatia este obligatorie si trebuie sa aiba maximum 150 de caractere."
        );
        return lista;
    }

    if (
        typeof date.pret !== "number" ||
        !Number.isFinite(date.pret) ||
        date.pret <= 0
    ) {
        console.error("Pretul trebuie sa fie un numar pozitiv.");
        return lista;
    }

    if (
        typeof date.suprafata !== "number" ||
        !Number.isFinite(date.suprafata) ||
        date.suprafata <= 0
    ) {
        console.error("Suprafata trebuie sa fie un numar pozitiv.");
        return lista;
    }

    if (
        !Number.isInteger(date.camere) ||
        date.camere < 1
    ) {
        console.error(
            "Numarul de camere trebuie sa fie un numar intreg pozitiv."
        );
        return lista;
    }

    if (
        !Array.isArray(date.poze) ||
        date.poze.length === 0 ||
        !date.poze.every(
            poza => typeof poza === "string" && poza.trim() !== ""
        )
    ) {
        console.error(
            "Este necesara cel putin o fotografie valida."
        );
        return lista;
    }

    if (!TIPURI_PROPRIETATI.includes(date.tip_proprietate)) {
        console.error("Tipul proprietatii este invalid.");
        return lista;
    }

    if (!STATUSURI.includes(date.status)) {
        console.error("Statusul proprietatii este invalid.");
        return lista;
    }

    if (!CATEGORII.includes(date.categorie)) {
        console.error("Categoria proprietatii este invalida.");
        return lista;
    }

    if (
        typeof date.utilizator !== "string" ||
        !date.utilizator.trim()
    ) {
        console.error("Utilizatorul este obligatoriu.");
        return lista;
    }

    if (
        typeof date.data_publicarii !== "string" ||
        !/^\d{4}-\d{2}-\d{2}$/.test(date.data_publicarii)
    ) {
        console.error(
            "Data publicarii trebuie sa fie in format AAAA-LL-ZZ."
        );
        return lista;
    }

    const dataPublicarii = new Date(
        date.data_publicarii + "T00:00:00Z"
    );

    if (
        Number.isNaN(dataPublicarii.getTime()) ||
        dataPublicarii.toISOString().slice(0, 10) !== date.data_publicarii
    ) {
        console.error("Data publicarii nu este valida.");
        return lista;
    }

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

    return [...lista, proprietateNoua];
}

function schimbaStatus(lista, id, statusNou) {
    if (!STATUSURI.includes(statusNou)) {
        console.error("Statusul introdus nu este valid.");
        return lista;
    }

    return lista.map(proprietate =>
        proprietate.id === id
            ? {
                ...proprietate,
                status: statusNou
            }
            : proprietate
    );
}

function stergeProprietate(lista, id) {
    return lista.filter(
        proprietate => proprietate.id !== id
    );
}

// Teste pentru functii

console.log("CITIRE");

console.log(
    "Titluri:",
    listeazaTitluri(proprietati).join(", ")
);

console.log(
    "Numar anunturi active:",
    numaraActive(proprietati)
);

console.log("CAUTARE");

console.log(
    "Cautare Eroilor:",
    listeazaTitluri(
        cautaProprietati(proprietati, "eroilor")
    ).join(", ")
);

console.log(
    "Cautare Tineretului:",
    listeazaTitluri(
        cautaProprietati(proprietati, "tineretului")
    ).join(", ")
);

console.log("ADAUGARE");

const listaNoua = adaugaProprietate(proprietati, {
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
    status: "activ",
    categorie: "vanzare",
    utilizator: "ion.popescu@email.com",
    data_publicarii: "2026-10-01"
});

console.log("Lista noua:", listaNoua.length, "proprietati");
console.log("Lista originala:", proprietati.length, "proprietati");

console.log("MODIFICARE SI STERGERE");

const listaModificata = schimbaStatus(
    listaNoua,
    1,
    "vandut"
);

console.log(
    "Statusul proprietatii cu ID 1:",
    listaModificata.find(proprietate => proprietate.id === 1).status
);

const listaFinala = stergeProprietate(listaModificata, 2);

console.log(
    "Titluri dupa stergere:",
    listeazaTitluri(listaFinala).join(", ")
);

console.log("VALIDARE");

const listaInvalida = adaugaProprietate(proprietati, {
    titlu: "",
    descriere: "Descriere de test",
    pret: 50000,
    suprafata: 40,
    camere: 2,
    locatie: "Bucuresti",
    poze: ["test.jpg"],
    tip_proprietate: "apartament",
    status: "activ",
    categorie: "vanzare",
    utilizator: "Utilizator test",
    data_publicarii: "2026-10-09"
});

console.log(
    "Lista originala a ramas neschimbata:",
    listaInvalida.length === proprietati.length
);