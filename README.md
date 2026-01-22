# Nutrilane Landing Page

Marketing landing page for Nutrilane - a fertilizer commodity trading intelligence integration company.

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React

## Project Structure

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
