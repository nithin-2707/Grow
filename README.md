# Dr. Maya Reynolds - Therapy Website

A modern, responsive therapy practice website built with Next.js 14, Tailwind CSS, and GSAP animations.

![Next.js](https://img.shields.io/badge/Next.js-14.2.3-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)

## 🌟 Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Scroll reveal effects powered by GSAP
- **SEO Optimized** - Meta tags, semantic HTML, and keyword-rich content
- **Modern UI** - Clean teal color palette with professional aesthetics
- **Fast Performance** - Built with Next.js App Router for optimal loading

## 📄 Pages

| Page | Description |
|------|-------------|
| **Home** | Hero section, specialties, about preview, FAQ, CTA |
| **About** | Full bio, therapeutic approach, credentials, philosophy |
| **Contact** | Contact form, office location, hours, Google Maps |

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** GSAP with ScrollTrigger
- **Font:** Plus Jakarta Sans

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/nithin-2707/Grow.git

# Navigate to project directory
cd Grow

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── public/
│   ├── fonts/          # Plus Jakarta Sans font files
│   └── images/         # Website images
├── src/
│   ├── app/
│   │   ├── about/      # About page
│   │   ├── contact/    # Contact page
│   │   ├── globals.css # Global styles
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page
│   └── components/     # Reusable components
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── Specialties.tsx
│       ├── FAQSection.tsx
│       ├── Footer.tsx
│       └── ...
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Teal Dark | `#306e78` | Primary, headings, buttons |
| Teal Light | `#49838d` | Gradients, accents |
| Cream | `#eef6f9` | Light backgrounds |
| Sage | `#deeeec` | Section backgrounds |
| White | `#FFFFFF` | Cards, content areas |

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🌐 Deployment

This project is optimized for deployment on **Vercel**:

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/nithin-2707/Grow)

## 👨‍💻 Author

**Gandrathi Nithin**

- GitHub: [@nithin-2707](https://github.com/nithin-2707)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ If you found this project helpful, please give it a star!
