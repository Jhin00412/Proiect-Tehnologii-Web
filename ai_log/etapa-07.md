# Stage 7: AI log

## Tool

- Google Antigravity / Gemini

## Key Request

### 1. Implementare Etapa 7: Formular si validare

- Asked:
  Implementarea etapei 7 prin adaugarea formularului controlat si validat pentru anunturi imobiliare, extinderea modulului api.js cu functia comuna request si metodele CRUD (POST, PATCH, DELETE), mutarea persistentei pe server pentru creare, bifare si stergere, configurarea fisierului tw.json si a atributelor data-testid pentru testarea automata, actualizarea README.md si crearea jurnalului AI, fara comentarii in cod si fara diacritice.

- Got:
  - Extinderea frontend/src/api.js prin introducerea functiei asincrone request(path, options) cu setarea header-ului Content-Type application/json, verificarea res.ok si tratarea codului HTTP 204. Implementarea functiilor fetchProprietati, createProprietate, updateProprietate si deleteProprietate.
  - Crearea componentei frontend/src/components/PropertyForm.jsx ca formular controlat cu starea interna a campurilor, validare sincronizata (titlu obligatoriu, lungime maxima de 100 de caractere, pret numeric pozitiv), dezactivarea butonului la trimitere (afisand "Se salveaza..."), stergerea campurilor doar dupa salvarea reusita si afisarea mesajului de eroare in caz de esec.
  - Actualizarea frontend/src/components/PropertyCard.jsx cu atributele data-testid="item", data-id={property.id}, data-testid="item-title", data-testid="item-toggle" si data-testid="item-delete".
  - Actualizarea frontend/src/components/PropertyList.jsx cu atributul data-testid="empty" pentru starea de lista goala.
  - Modificarea frontend/src/App.jsx pentru a delega adaugarea (handleAdd fara bloc try intern), comutarea starii (handleToggle cu PATCH) si stergerea (handleDelete cu DELETE), pastrand lista vizibila si afisand mesajul de eroare deasupra listei.
  - Actualizarea stilurilor in frontend/src/App.css pentru starea disabled a butonului din formular si bordura rosie a campurilor invalide.
  - Crearea fisierului tw.json in radacina repository-ului pentru compatibilitate cu validatorul automat.
  - Fara comentarii in cod si fara diacritice in toate fisierele etapei.

### 2. Ce nu a mers / Probleme intalnite si solutii

- In PropertyCard.jsx caracterul special pentru metri patrati a fost inlocuit cu m2 pentru a asigura compatibilitatea totala ASCII.
- Functia handleAdd din App.jsx nu trebuie sa intercepteze exceptiile, permitand transmiterii din PropertyForm sa gestioneze eroarea si sa pastreze valorile introduse de utilizator in campuri daca serverul nu raspunde.
- Pentru compatibilitatea cu verificarea automata, cheile din tw.json au fost mapate exact pe structura din db.json: resource proprietati, title titlu, done vandut si sample cu tip_proprietate.
