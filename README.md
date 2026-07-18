# Dukes Tech Services - Official Website(Currently in Working State)

## Overview

Dukes Tech Services is a modern, responsive web application built with React and Tailwind CSS. The website showcases the company's technology solutions, services, and expertise in web development, digital marketing, software development, and IT consulting.

## Live Demo

[https://dukes-tech-services.vercel.app/](https://dukes-tech-services.vercel.app/)

## Features

- Responsive design optimized for all devices
- Dynamic hero section with rotating images
- Interactive services with expandable categories
- Technology stack showcase with moving logo banner
- Team member profiles with hover effects
- Client portfolio and sectors display
- FAQ section with accordion functionality
- Contact form with validation
- SEO optimized with meta tags and JSON-LD schema
- Smooth animations and transitions
- Glassmorphism and modern UI effects

## Tech Stack

### Frontend
- React 18
- React Router DOM for routing
- Tailwind CSS for styling
- Framer Motion for animations
- Lucide React for icons
- React Intersection Observer for scroll animations
- React Helmet Async for SEO

### Development Tools
- Vite for build tooling
- ESLint for code quality
- Git for version control

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Khadija-Bilal244/dukes-tech-services.git
```

2. Navigate to the project directory:
```bash
cd dukes-tech-services
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

6. Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── assets/          - Images, icons, and static assets
├── components/      - Reusable UI components
│   ├── About-Dukes.jsx
│   ├── About-Mission.jsx
│   ├── About-Vision.jsx
│   ├── AboutHero.jsx
│   ├── Contact.jsx
│   ├── CoreValues.jsx
│   ├── FAQ.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── MovingBanner.jsx
│   ├── Navbar.jsx
│   ├── Sectors-Clients.jsx
│   ├── Sectors-Values.jsx
│   ├── Sectors.jsx
│   ├── Services-Details.jsx
│   ├── Services-Hero.jsx
│   ├── Services-List.jsx
│   ├── Services.jsx
│   ├── Team.jsx
│   └── WhyChooseUs.jsx ,etc....
├── pages/           - Page components
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Home.jsx
│   ├── Sectors.jsx
│   ├── Services.jsx
│   └── Team.jsx
├── styles/          - CSS files (if any)
├── App.jsx          - Main application component
├── index.css        - Global styles and Tailwind imports
└── main.jsx         - Application entry point
```

## Key Components

### Hero Section
Dynamic hero with rotating background images and prominent call-to-action buttons.

### Services
Comprehensive services section with expandable categories, technology icons, and detailed descriptions.

### Sectors
Industry-specific solutions with visual timeline layout and client portfolio.

### Team
Team member profiles organized by department with hover effects.

### FAQ
Accordion-style frequently asked questions with schema markup.

### Contact
Contact form with validation and integrated Google Maps.

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_endpoint
```

## Deployment

The project is configured for deployment on Vercel. To deploy:

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Performance Optimizations

- Lazy loading for images
- Code splitting with React Router
- Optimized asset delivery
- Minimal external dependencies
- Tailwind CSS purge in production

## SEO Implementation

- Meta tags for all pages
- Open Graph tags for social sharing
- JSON-LD structured data
- Canonical URLs
- Responsive design for mobile SEO


## License

All rights reserved. This project is proprietary and confidential.

## Contact

Dukes Tech Services
- Email: info.dukestech@gmail.com
- Phone: +92 309 7671363
- Address: Naqi Center, Dulha Street, 71-Mall Road, Lahore, Pakistan
