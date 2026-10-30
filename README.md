# Real_Estate_Bucharest

Aplicatia are ca scop publicarea de anunturi imobiliare si posibilitatea celor care sunt interesati sa caute o noua locuinta, sa participe la licitatii sau sa programeze vizionari.

De asemenea, utilizatorii pot face oferte de pret direct din site, iar cel care a publicat anuntul le poate accepta, refuza sau poate depune o contraoferta.

## Data model

| Field | Type | Notes |
| ----------- | ------------ | -------------------------------------------------------- |
| titlu | text | obligatoriu, max 100 caractere, titlul anuntului |
| descriere | text | obligatoriu, descrierea proprietatii |
| pret | numar | obligatoriu, pretul proprietatii in EUR |
| suprafata | numar | obligatoriu, suprafata proprietatii in metri patrati |
| camere | numar | obligatoriu, numarul de camere |
| locatie | text | obligatoriu, max 150 caractere, zona sau adresa proprietatii |
| poze | imagine/fisier | obligatoriu, una sau mai multe fotografii ale proprietatii |
| tip_proprietate | valori fixe | apartament, casa, garsoniera |
| status | valori fixe | activ, vandut, retras |
| categorie | relatie | vanzare, inchiriere, licitatie |
| utilizator | relatie | proprietarul anuntului |
| data_publicarii | data | data publicarii anuntului |

## Sample data

Sample data used across all stages:

1. Apartament 2 camere - Eroilor, activ, vanzare
2. Casa - Berceni, activ, inchiriere
3. Garsoniera - Iancului, vandut, vanzare
4. Apartament 3 camere - Tineretului, retras, licitatie

## AI usage

    | Tool | Used for |
    | --- | --- |
    | ChatGPT | Definire set de date pentru test ; see [ai_log/etapa-01.md](ai_log/etapa-01.md). |

## Stage 2: data logic

The original mockup in `mockup/` keeps its plain JavaScript data and logic
separate from the DOM.

## AI usage

    | Tool | Used for |
    | --- | --- |
    | ChatGPT | Set de date pentru a testa functia adaugaAnunt ; see [ai_log/etapa-02.md](ai_log/etapa-02.md). |

## Stage 3: Vite and React project

The application lives in `frontend/`, built with Vite and React. The property
data is defined in `frontend/src/data/properties.js`.

### How to run

From the project root:

```sh
cd frontend
npm install
npm run dev
```
Open the address printed in the terminal (usually http://localhost:5173).

## AI usage

    | Tool | Used for |
    | --- | --- |
    | NU A FOST FOLOSIT ; see [ai_log/etapa-03.md](ai_log/etapa-03.md). |

## Stage 4: components

`PropertyList` renders the properties it receives, and `PropertyCard` displays
each property through props.

## AI usage

    | Tool | Used for |
    | --- | --- |
    | Gemini AI |Set de carduri pentru a folosii datele deja avute in format json, pentru a curata app.css si app.jsx; see [ai_log/etapa-04.md](ai_log/etapa-04.md). |



## Stage 5: local state and events
The list lives in React state. Checking and deleting work from the page,
and the counters in the header follow automatically. A button in the
header switches between light and dark mode. Changes are lost on refresh,
which is what stage 6 and stage 10 fix.

## AI usage

    | Tool | Used for |
    | --- | --- |
    | ChatGPT | Generating sample property data for testing. |
    | Copilot SDK in VS Code | Implementare stare suplimentara pentru schimb de status al cardului; see [ai_log/etapa-05.md](ai_log/etapa-05.md). |

    Details per stage are in the `ai_log/` folder.

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [x] Stage 5: local state and events
- [ ] Stage 6: loading data from a mock API