# Project name: Enhetsregisteret

### Project Goal:

Applikasjonen i React som gjør en spørring mot Brønnøysundregistrene sitt API og presenterer en liste over bedriftene som ble funnet.

#### Minstekrav til oppgaven:

List ut alle bedrifter som er opprettet i en gitt kommune i et gitt år

## 🧩 Tech Stack

![React](https://img.shields.io/badge/React_18.2.0-424242?logo=react&logoColor=61DAFB)
![React DOM](https://img.shields.io/badge/React_DOM_18.2.0-424242?logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router_6-424242?logo=reactrouter&logoColor=CA4245)
![Vite](https://img.shields.io/badge/Vite_5.2-424242?logo=vite&logoColor=646CFF)
![ESLint](https://img.shields.io/badge/ESLint_8.57-424242?logo=eslint&logoColor=fff)
![GitHub_Pages](https://img.shields.io/badge/GitHub_Pages_6.1.1-424242?logo=githubpages&logoColor=fff)

[<img src="preview.png" height="250" />](preview.png)

<details style="border:1px solid #d4d4d4; border-radius:2px; padding:1rem;">
<summary><h4 style="display:inline; padding-left:6px;">Videre oppgaver:<h4></summary>

**velge/skrive:**

- navn
- organisasjonsnummer
- fra RegistreringsdatoEnhetsregisteret til RegistreringsdatoEnhetsregisteret
- konkurs
- under Tvangsavvikling Eller Tvangsopplosning
- underAvvikling

- markere alle konkursbo i lista
- lagre brukenes tidligere søkekriteriene i local storage
- sortere resultat
- vise hvor mange treff
- vise hvis resultatet er tomt

**sortering:**

- navn
- organisasjonsnummer
- antallAnsatte
- registreringsdatoEnhetsregisteret

sort={feltnavn},{ASC/DESC}
`https://data.brreg.no/enhetsregisteret/api/enheter?sort=antallAnsatte,DESC`

</details>

## [TODO]

noe data kommer som array og må parses
for eks. firma:INNSIKT

```
//forretningsadresse - adresse:
// (2) ['c/o Gjørva', 'Hellerud gårdsvei 5B']

// aktivitet:
// (2) ['Oversettingstjenester for dokumenter, tjenester, film og media med', 'mere.']

// vedtektsfestetFormaal:
// (2) ['Investeringer, eiendom, konsulentvirksomhet og rådgivning innenfor', 'finansielle områder samt forretningsutvikling.']

// organisasjonsform:
// {kode: 'ENK', beskrivelse: 'Enkeltpersonforetak', \_links: {…}}
```

**flere data og filtrer**

- registrertIMvaregisteret
- registrertIForetaksregisteret
- registrertIStiftelsesregisteret
- registrertIFrivillighetsregisteret
- frivilligRegistrertIMvaregisteret

- fraStiftelsesdato --> tilStiftelsesdato
- fraAntallAnsatte --> tilAntallAnsatte

- naeringskode
- sisteInnsendteAarsregnskap

- overordnetEnhet
- organisasjonsform
- institusjonellSektorkode
- forretningsadresse.landkode
- postadresse.landkode

**vise brukenes tidligere søkekriteriene**
