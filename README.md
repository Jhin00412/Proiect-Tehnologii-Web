# Real_Estate_Bucharest

Aplicatia are ca scop publicarea de anunturi imobiliare si posibilitatea celor care sunt interesati sa caute o noua locuinta, sa participe la licitatii sau sa programeze vizionari.

De asemenea, utilizatorii pot face oferte de pret direct din site, iar cel care a publicat anuntul le poate accepta, refuza sau poate depune o contraoferta.

## Stage 1

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
| ChatGPT | Definire set de date pentru test; see [ai_log/etapa-01.md](ai_log/etapa-01.md). |

| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S1-R1 | README: description, fields, sample data, how to run | [README.md](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/bca6a1720fc13b3876236d7118c5a0e3874a7cf7/README.md#L1-L105) | Read |
| S1-R2 | AI usage section | [README.md](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/bca6a1720fc13b3876236d7118c5a0e3874a7cf7/README.md#L1-L105) | Read |
| S1-R3 | AI log for stage 1 | [ai_log/etapa-01.md](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/bca6a1720fc13b3876236d7118c5a0e3874a7cf7/ai_log/etapa-01.md#L1-L84) | Read |
| S1-R4 | Header, form (text + select), 3 cards with own data | [index.html](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/ee5223c54cf586966707c72d616cda7bcfcf0f20/index.html#L12-L230) | Open the page |
| S1-R5 | Finished card looks different | [style.css](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/ee5223c54cf586966707c72d616cda7bcfcf0f20/style.css#L445-L454) | Look at the sold card |
| S1-R6 | 2 columns on desktop, 1 under 700px | [style.css](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/ee5223c54cf586966707c72d616cda7bcfcf0f20/style.css#L490-L539) | Resize below 700px |
| S1-R7 | Visible keyboard focus and readable dark theme | [Stage 1 focus in `style.css`](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/ee5223c54cf586966707c72d616cda7bcfcf0f20/style.css#L478-L484) · [Dark theme in `frontend/src/App.css`](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/bca6a1720fc13b3876236d7118c5a0e3874a7cf7/frontend/src/App.css#L31-L115) | Press Tab to verify focus; use the theme button to verify dark mode. Note: the original Stage 1 mockup commit contains the focus style; the dark theme is implemented in the React app by Stage 5. |
| S1-R8 | Stage 1 commit pushed | [Stage 1 commit](https://github.com/Jhin00412/Proiect-Tehnologii-Web/commit/ee5223c54cf586966707c72d616cda7bcfcf0f20) | Check commit history |

## Stage 2: data logic

The original mockup in `mockup/` keeps its plain JavaScript data and logic

separate from the DOM.

## AI usage

| Tool | Used for |
| --- | --- |
| ChatGPT | Set de date pentru a testa functia `adaugaAnunt`; see [ai_log/etapa-02.md](ai_log/etapa-02.md). |

| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S2-R1 | JS file linked; logs on page load | [index.html](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/fabfbc374dd55f72b99bcfe46afcc7400ec4623d/index.html#L1-L12) | Open page, press F12 |
| S2-R2 | 3+ items with id, name, state and tag | [proprietati.js](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/fabfbc374dd55f72b99bcfe46afcc7400ec4623d/proprietati.js#L19-L95) | Read the initial array |
| S2-R3 | List, count, search, add, toggle and delete | [proprietati.js](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/fabfbc374dd55f72b99bcfe46afcc7400ec4623d/proprietati.js#L97-L295) | Inspect console output |
| S2-R4 | Add rejects empty name and invalid tag | [proprietati.js](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/fabfbc374dd55f72b99bcfe46afcc7400ec4623d/proprietati.js#L127-L271) | Check the validation messages |
| S2-R5 | Original array unchanged after add | [proprietati.js](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/fabfbc374dd55f72b99bcfe46afcc7400ec4623d/proprietati.js#L324-L345) | Compare new and original list lengths |
| S2-R6 | README Stage 2 section and AI log | [README.md](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/bca6a1720fc13b3876236d7118c5a0e3874a7cf7/README.md#L1-L105) · [ai_log/etapa-02.md](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/bca6a1720fc13b3876236d7118c5a0e3874a7cf7/ai_log/etapa-02.md#L1-L292) | Read |
| S2-R7 | Stage 2 commit pushed | [Stage 2 commit](https://github.com/Jhin00412/Proiect-Tehnologii-Web/commit/fabfbc374dd55f72b99bcfe46afcc7400ec4623d) | Check commit history |

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
| Not used; see [ai_log/etapa-03.md](ai_log/etapa-03.md). |

| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S3-R1 | `npm run dev` starts without errors | [frontend/package.json](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/e0d6f56ebb780ca46e65a9973e58188a21d8fff6/frontend/package.json#L6-L10) | Run `npm install`, then `npm run dev` in `frontend/` |
| S3-R2 | App name and counter computed from data | [frontend/src/App.jsx](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/e0d6f56ebb780ca46e65a9973e58188a21d8fff6/frontend/src/App.jsx#L1-L88) | Change data and save |
| S3-R3 | Data from the project README, not the example | [frontend/src/App.jsx](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/e0d6f56ebb780ca46e65a9973e58188a21d8fff6/frontend/src/App.jsx#L1-L77) | Compare the properties with README sample data |
| S3-R4 | Stage 1 styles reused | [frontend/src/App.css](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/e0d6f56ebb780ca46e65a9973e58188a21d8fff6/frontend/src/App.css#L1-L150) | Inspect the rendered page |
| S3-R5 | `node_modules` ignored and build configured | [frontend/.gitignore](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/e0d6f56ebb780ca46e65a9973e58188a21d8fff6/frontend/.gitignore#L1-L14) · [frontend/package.json](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/e0d6f56ebb780ca46e65a9973e58188a21d8fff6/frontend/package.json#L6-L10) | Run `npm run build`; confirm `node_modules/` and `dist/` are ignored |
| S3-R6 | README Stage 3 section and AI log | [README.md](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/bca6a1720fc13b3876236d7118c5a0e3874a7cf7/README.md#L1-L105) · [ai_log/etapa-03.md](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/bca6a1720fc13b3876236d7118c5a0e3874a7cf7/ai_log/etapa-03.md#L1-L10) | Read |
| S3-R7 | Stage 3 commit pushed | [Stage 3 commit](https://github.com/Jhin00412/Proiect-Tehnologii-Web/commit/e0d6f56ebb780ca46e65a9973e58188a21d8fff6) | Check commit history |

## Stage 4: components

`PropertyList` renders the properties it receives, and `PropertyCard` displays

each property through props.

## AI usage

| Tool | Used for |
| --- | --- |
| Gemini AI | Set de carduri pentru a folosi datele existente in format JSON si pentru a curata `App.css` si `App.jsx`; see [ai_log/etapa-04.md](ai_log/etapa-04.md). |

| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S4-R1 | At least two components in `src/components/` | [frontend/src/components/PropertyCard.jsx](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/4a6dc04d6d34e1aee2096952ca73af68670b91ed/frontend/src/components/PropertyCard.jsx#L1-L54) · [frontend/src/components/PropertyList.jsx](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/4a6dc04d6d34e1aee2096952ca73af68670b91ed/frontend/src/components/PropertyList.jsx#L1-L70) | Open the components folder |
| S4-R2 | Card receives data through props | [frontend/src/components/PropertyCard.jsx](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/4a6dc04d6d34e1aee2096952ca73af68670b91ed/frontend/src/components/PropertyCard.jsx#L5-L35) | Read the component parameters and rendered fields |
| S4-R3 | `map` + `key={id}`, no console warnings | [frontend/src/components/PropertyList.jsx](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/4a6dc04d6d34e1aee2096952ca73af68670b91ed/frontend/src/components/PropertyList.jsx#L58-L66) | Open DevTools Console |
| S4-R4 | Message for empty list | [frontend/src/components/PropertyList.jsx](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/4a6dc04d6d34e1aee2096952ca73af68670b91ed/frontend/src/components/PropertyList.jsx#L55-L57) | Temporarily set the properties array to `[]` |
| S4-R5 | State changes the card look | [frontend/src/components/PropertyCard.jsx](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/4a6dc04d6d34e1aee2096952ca73af68670b91ed/frontend/src/components/PropertyCard.jsx#L5-L21) | Change a property's status |
| S4-R6 | README Stage 4 section and AI log | [README.md](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/bca6a1720fc13b3876236d7118c5a0e3874a7cf7/README.md#L1-L105) · [ai_log/etapa-04.md](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/bca6a1720fc13b3876236d7118c5a0e3874a7cf7/ai_log/etapa-04.md#L1-L396) | Read |
| S4-R7 | Stage 4 commit pushed | [Stage 4 commit](https://github.com/Jhin00412/Proiect-Tehnologii-Web/commit/4a6dc04d6d34e1aee2096952ca73af68670b91ed) | Check commit history |

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

| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S5-R1 | List kept in `useState`, in App | [frontend/src/App.jsx](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/bca6a1720fc13b3876236d7118c5a0e3874a7cf7/frontend/src/App.jsx#L17-L25) | Read |
| S5-R2 | Toggling changes state and card look | [frontend/src/App.jsx](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/bca6a1720fc13b3876236d7118c5a0e3874a7cf7/frontend/src/App.jsx#L74-L82) · [frontend/src/components/PropertyCard.jsx](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/bca6a1720fc13b3876236d7118c5a0e3874a7cf7/frontend/src/components/PropertyCard.jsx#L37-L54) | Click a sold-status checkbox |
| S5-R3 | Delete removes the item | [frontend/src/App.jsx](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/bca6a1720fc13b3876236d7118c5a0e3874a7cf7/frontend/src/App.jsx#L84-L88) · [frontend/src/components/PropertyCard.jsx](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/bca6a1720fc13b3876236d7118c5a0e3874a7cf7/frontend/src/components/PropertyCard.jsx#L70-L77) | Click Delete |
| S5-R4 | Header counter derived, not in state | [frontend/src/App.jsx](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/bca6a1720fc13b3876236d7118c5a0e3874a7cf7/frontend/src/App.jsx#L25-L25) | Toggle a property's status and watch the header |
| S5-R5 | Immutable updates (no `push`, `splice` or direct assignment) | [frontend/src/App.jsx](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/bca6a1720fc13b3876236d7118c5a0e3874a7cf7/frontend/src/App.jsx#L66-L88) | Read the state update functions |
| S5-R6 | Light/dark toggle: state + `data-theme` on `html` | [frontend/src/App.jsx](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/bca6a1720fc13b3876236d7118c5a0e3874a7cf7/frontend/src/App.jsx#L13-L14) · [frontend/src/App.jsx](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/bca6a1720fc13b3876236d7118c5a0e3874a7cf7/frontend/src/App.jsx#L90-L96) · [frontend/src/App.css](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/bca6a1720fc13b3876236d7118c5a0e3874a7cf7/frontend/src/App.css#L31-L115) | Click the theme button in both OS theme settings |
| S5-R7 | No console warnings; README and AI log updated | [README.md](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/bca6a1720fc13b3876236d7118c5a0e3874a7cf7/README.md#L1-L105) · [ai_log/etapa-05.md](https://github.com/Jhin00412/Proiect-Tehnologii-Web/blob/bca6a1720fc13b3876236d7118c5a0e3874a7cf7/ai_log/etapa-05.md#L1-L1250) | Open DevTools Console |
| S5-R8 | Stage 5 commit pushed | [Stage 5 commit](https://github.com/Jhin00412/Proiect-Tehnologii-Web/commit/bca6a1720fc13b3876236d7118c5a0e3874a7cf7) | Check commit history |

## Status

- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [x] Stage 5: local state and events
- [ ] Stage 6: loading data from a mock API