# <Real_Estate_Bucharest>
<Aplicatia are ca scop publicarea de anunturi imobiliare si posibilitatea celor care sunt interesati
sa caute o noua locuinta de a participa la licitatii sau de a programa vizionari.
De asemenea oferte de pret ale utilizatorilor se pot face direct din site, iar cel care a publicat anuntul le poate accepta, refuza sau depune o contraoferta.>
## Data model
| Field | Type | Notes |
| ----------- | ------------ | -------------------------------------------------------- |
| <titlu> | text | obligatoriu, max 100 caractere  titlul anuntului |
| <descriere> | text | obligatoriu  descrierea proprietatii |
| <pret> | numar | obligatoriu  pretul proprietatii in EUR |
| <suprafata> | numar | obligatoriu  suprafata proprietatii in metri patrati |
| <camere> | numar | obligatoriu  numarul de camere |
| <locatie> | text | obligatoriu, max 150 caractere zona sau adresa proprietatii |
| <poze> | imagine/fisier | obligatoriu una sau mai multe fotografii ale proprietatii |
| <tip_proprietate> | valori fixe | <apartament>, <casa>, <garsoniera> |
| <status> | valori fixe | <activ>, <vandut>, <retras> |
| <categorie> | relatie | <vanzare>, <inchiriere>, <licitatie> |
| utilizator | relatie | proprietarul anuntului |
| <data_publicarii> | data | data publicarii anuntului |

Sample data used across all stages:
1. <Apartament 2 camere> Eroilor, activ, <vanzare>
2. <Casa> Berceni, activ, <inchiriere>
3. <Garsoniera> Iancului, vandut, <vanzare>
4. <Apartament 3 camere> Tineretului, retras, <licitatie>