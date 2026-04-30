# Site Actualizări — Task Spec

**Source:** `site actualizari.docx` (desktop)
**Date:** 2026-04-30
**Approach:** Four independent task groups, each scoped to a distinct section of the site.

---

## Group 1 — Services

**File:** `src/theme/components/organisms/Services/index.tsx`

### 1a. Price updates (2 changes in the `services` array)

| Service | Field | Old | New |
|---|---|---|---|
| Abonament Terapie Manuala Avansată | `label` | `"600 Ron / 3 Sedinte"` | `"660 Ron / 3 Sedinte"` |
| Terapie Manuală | `label` | `"220 Ron"` | `"250 Ron"` |

### 1b. New urgency booking service card

Add a new entry to the `services` array with:

```
label: "Taxă urgență: +80 lei / ședință"
title: "Programări în Regim de Urgență"
svg: "/assets/kineto.svg"
image: "/assets/serviciiUrgenta.jpg"  ← already in public/assets/
```

**desc content (plain text, no emoji bullets):**

```
Oferim posibilitatea programărilor în regim de urgență, pentru situațiile
în care aveți nevoie de o ședință în aceeași zi sau de pe o zi pe alta.

Acest tip de programare implică reorganizarea programului terapeutului,
motiv pentru care se aplică un cost suplimentar.

Costuri:
- Taxă de urgență: +80 lei / ședință
- Se achită separat față de ședința de kinetoterapie / terapie manuală

Condiții de aplicare:
- Se aplică doar pentru ședințe individuale (nu este inclusă în abonament)
- În cazul pacienților cu abonament: se consumă o ședință din abonament,
  se achită diferența până la prețul standard, plus taxa de urgență de 80 lei

Important:
- Veți fi informat în prealabil dacă programarea este în regim de urgență
- Programarea se confirmă doar după acceptul dvs. asupra acestor condiții
```

Use the existing `ServiceCard` design without modification — the text renders in the hover overlay (`HiddenDesc`).

---

## Group 2 — Team section restructure

**Files:**
- `src/theme/components/organisms/Team/index.tsx`
- `src/theme/components/molecules/TeamCard/index.tsx`

### 2a. Update existing therapist data

In `Team/index.tsx`, change `experiences[0]` from `"+7 ani de experiență"` to `"+9 ani de experiență"`. No other changes to the existing therapist's data.

### 2b. Add two new team members

**Boldor Cosmin**
```
name: "Boldor Cosmin"
title: "Kinetoterapeut & Maseur"
imageSrc: "/assets/DSC_8995.jpg"
skills: [
  "Absolvent Universitatea Babeș-Bolyai Cluj-Napoca — Kinetoterapie (licență + master)",
  "Absolvent Orthopedic Manual Therapy Romania (OMTRO)",
  "Specialist IASTM (Instrument Assisted Soft Tissue Mobilization)",
  "Specialist Masaj (Drenaj Limfatic, Terapeutic, Relaxare, Recuperare Medicală)",
  "Specialist recuperare umăr, genunchi și dureri de spate",
]
experiences: [
  "+5 ani de experiență",
  "- Kinetoterapeut la Cranio Facial Pain",
  "- Kinetoterapeut la Novoengrama",
]
```

**Moldovan Marcel-Raul**
```
name: "Moldovan Marcel-Raul"
title: "Kinetoterapeut"
imageSrc: "/assets/DSC_9091.jpg"
skills: [
  "Absolvent Facultatea de Educație Fizică și Sport — Kinetoterapie, UBB Cluj-Napoca",
  "Master în Kinetoterapia Afecțiunilor Aparatului Locomotor, UBB Cluj-Napoca",
  "Absolvent curs Chiropractică, Medboost Academy, 2024",
  "Absolvent curs Neuroștiința durerii, 2026",
]
experiences: [
  "5 ani de experiență",
  "- Kinetoterapeut la KinetikMED",
  "- Kinetoterapeut, maseur, antrenor personal la BodyMove Studio",
  "- Kinetoterapeut la Novoengrama",
  "- Kinetoterapeut la Centrul de vârstnici Senior",
]
```

### 2c. Restructure Team organism layout

The current `TeamCard` renders the "Echipa / Cunoaste personalul" heading inside every card. With 3 therapists this would repeat 3 times.

**Change:** Extract the section heading out of `TeamCard` into `Team/index.tsx`. Render it once above the card list. The `TeamCard` becomes a pure data card (name, title, photo, skills, experiences).

**Layout:** Render the 3 cards in a horizontal scrollable row on desktop (same pattern as Services — `display: flex`, `gap: 40px`, `overflow-x: auto` or arrow navigation). On mobile, stack vertically.

The existing `StyleTeamBox` will need its `max-width` and flex direction updated to accommodate 3 cards side by side.

---

## Group 3 — Footer legal details

**File:** `src/theme/components/organisms/Footer/index.tsx`

Add a "Date firmă" column inside the existing "About Us, Map and Logo Section" `Flex` row, positioned next to the map `Box`. Use the same `Box` + `Text` pattern already present in the footer. Use `theme.text.smallest` or `theme.text.smaller` for the text size to keep it compact.

**Content:**
```
Date firmă

RECUPERAREACASA S.R.L
Sat Florești, Comuna Florești, Strada TĂUȚULUI, Nr. 19D, Sc. 1, Ap. 1, Județ Cluj
Activitate principală: 8690
CUI: 48543710
Nr. ordine: J12/3204/26.07.2023
IBAN: RO82RZBR0000060025106494
```

On mobile (`theme.media.isMobile`), display the column below the map (column direction). On desktop, show it as a sibling `Box` in the same row as the map.

---

## Group 4 — Mobile / Header fixes

**Files:**
- `src/theme/components/organisms/Header/index.tsx`
- `src/theme/components/organisms/Footer/index.tsx`

### 4a. Fix phone `tel:` link

All phone `href` values currently use `"phone:+40 727 860 759"` which does not work on mobile. Replace with the correct `tel:` URI scheme in all locations:

```
"phone:+40 727 860 759"  →  "tel:+40727860759"
```

Locations to fix:
- `Header/index.tsx` — top bar phone link (line ~77)
- `Header/index.tsx` — BurgerModal phone link (line ~273)
- `Footer/index.tsx` — Contact section phone link (line ~51)

### 4b. Add Instagram icon

`InstaIcon` already exists at `src/theme/components/molecules/Icons/InstaIcon.tsx`.

Add it to all three social icon rows:
1. **Header top bar** — after the YouTube icon
2. **Header BurgerModal** — after the YouTube icon
3. **Footer Contact section** — after the YouTube icon

**Link URL:** Confirm the Instagram profile URL with the client — the document contains a post URL (`https://www.instagram.com/p/DVfol0VCDW-/`), not a profile URL. Use the correct profile URL when implementing.

---

## Notes

- Photos `DSC_8995.jpg` and `DSC_9091.jpg` will be placed in `public/assets/` by the client before implementation of Group 2.
- `serviciiUrgenta.jpg` is already present in `public/assets/`.
- All groups are independent and can be implemented in any order.
