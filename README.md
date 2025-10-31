# CJ Portfolio

A modern, responsive portfolio website for Carl'averis Jackson, a full-stack developer specializing in React, Node.js, and modern web technologies.

## Features

- **Responsive Design**: Optimized for desktop and mobile devices using Tailwind CSS.
- **SEO Optimized**: Integrated with React Helmet for meta tags.
- **Contact Form**: Functional email sending via EmailJS.
- **Project Showcase**: Highlighting key projects with live links.
- **Fast Performance**: Built with Vite for quick builds and HMR.

## Tech Stack

- **Frontend**: React 19, React Router, Tailwind CSS 4
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/CjDaOne/CJ-Portffolio.git
   cd cjportfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up EmailJS for contact form:
   - Sign up at [EmailJS](https://www.emailjs.com/).
   - Create a service, template, and get your public key.
   - Update `src/pages/Contact.jsx` with your service ID, template ID, and public key.

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   npm run preview
   ```

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
- `npm run preview`: Preview production build

## Deployment

Deploy to Netlify by connecting your GitHub repo or uploading the `dist` folder.
