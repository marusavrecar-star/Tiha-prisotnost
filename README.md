# AlexTherapies - Aleksandar Marinković s.p.

Spletna stran za terapevtske storitve, jogo in nedualnost.

## Namestitev

1. Klonirajte repozitorij:
   ```bash
   git clone <repo-url>
   cd <repo-name>
   ```

2. Namestite odvisnosti:
   ```bash
   npm install
   ```

3. Ustvarite `.env` datoteko na podlagi `.env.example` (če so potrebni ključi).

## Razvoj

Zaženite razvojni strežnik:
```bash
npm run dev
```

## Produkcija

1. Zgradite aplikacijo:
   ```bash
   npm run build
   ```

2. Zaženite produkcijski strežnik:
   ```bash
   NODE_ENV=production npm start
   ```

## Tehnologije

- React 19
- Vite
- Tailwind CSS 4
- Express (Backend)
- Framer Motion (Animacije)
- Lucide React (Ikone)
