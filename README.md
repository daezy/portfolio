# Personal Portfolio

A modern, animated personal portfolio website built with Next.js 15, TypeScript, and GSAP — showcasing my experience, skills, and projects as a full-stack and Web3 developer.

## Tech Stack

- **Framework** — [Next.js 15](https://nextjs.org) (App Router, Turbopack)
- **Language** — TypeScript
- **Styling** — Tailwind CSS v4
- **Animations** — [GSAP](https://gsap.com) with ScrollTrigger, [Framer Motion](https://www.framer.com/motion/)
- **Icons** — [React Icons](https://react-icons.github.io/react-icons/)

## Sections

- **Hero** — Animated entrance with role carousel
- **About** — Brief personal background with scroll-triggered animations
- **Skills** — Categorised skill cards (Frontend, Backend, Mobile, Web3)
- **Projects** — Featured project showcase with images
- **Experience** — Accordion-style work history timeline

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
app/              # Next.js App Router (layout, page, global styles)
components/
  views/Home/     # Page sections (Hero, About, Skills, Projects, Experience)
  Container.tsx   # Shared layout wrapper
  Navbar.tsx      # Navigation bar
  Sphere.tsx      # 3D decorative element
public/
  images/         # Project screenshots and skill icons
```

## Deployment

Deployed on [Vercel](https://vercel.com). Every push to `main` triggers an automatic production deployment.
