# Nutrilane Landing Page

Marketing landing page for Nutrilane - a fertilizer commodity trading intelligence platform.

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

The development server runs on `http://localhost:8080`.

## Deployment

### Vercel (Recommended)

1. Push this repository to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite and deploy

The `vercel.json` is pre-configured for SPA routing.

### Manual Build

```bash
npm run build
```

The build output will be in the `dist/` directory. Deploy this to any static hosting provider.

## Project Structure

```
src/
├── App.tsx                         # App entry with router
├── main.tsx                        # React entry point
├── index.css                       # Global styles + Tailwind
├── assets/                         # Static assets (logo, images)
├── pages/
│   ├── Landing.tsx                 # Main landing page
│   └── NotFound.tsx                # 404 page
├── features/
│   └── landing/
│       └── components/             # Landing page sections
│           ├── Navbar.tsx
│           ├── Hero.tsx
│           ├── Features.tsx
│           ├── HowItWorks.tsx
│           ├── CTA.tsx
│           └── Footer.tsx
└── shared/
    ├── components/ui/              # Reusable UI components
    ├── hooks/                      # Custom hooks
    └── lib/                        # Utilities
```

## License

Proprietary - All rights reserved
