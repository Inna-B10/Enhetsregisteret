# Project name: Enhetsregisteret

### Project Goal:

Applikasjonen i React som gjør en spørring mot Brønnøysundregistrene sitt API og presenterer en liste over bedriftene som ble funnet.

#### Minstekrav til oppgaven:

List ut alle bedrifter som er opprettet i en gitt kommune i et gitt år

<details style="border:1px solid #d4d4d4; border-radius:2px; padding:1rem;">
<summary><h4 style="display:inline; padding-left:6px;">Videre oppgaver:</h4></summary>

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

## 💎 Description

[<img src="preview.png" height="250" align="right" style="margin-left:20px" />](preview.png)

"Enhetsregisteret" is a React app that queries the Brønnøysundregistrene API to list companies based on municipality and year. Users can filter by name, org number, registration date, and bankruptcy status. Features include sorting, result count, and localStorage for search history. Built with React Router and deployed via GitHub Pages.

### 🧩 Tech Stack

![React](https://img.shields.io/badge/React_18.2.0-424242?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite_5.2-424242?logo=vite&logoColor=646CFF)
![react-dom](https://img.shields.io/badge/react--dom_18.2.0-424242?logo=react&logoColor=61DAFB)
![react-router-dom](https://img.shields.io/badge/react--router--dom_6-424242?logo=reactrouter&logoColor=CA4245)

<!-- end:tech-stack -->

![ESLint](https://img.shields.io/badge/ESLint_8.57-424242?logo=eslint&logoColor=fff)
![GitHub_Pages](https://img.shields.io/badge/GitHub_Pages_6.1.1-424242)

### 🚀 [View demo](https://inna-b10.github.io/Enhetsregisteret/)

## 📋 TODO:

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
