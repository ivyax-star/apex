# Apex Edu - Modern Homeschooling Platform

A professional React + Vite landing page for Apex Edu homeschooling program.

## 🚀 Project Overview

Apex Edu is a responsive, modern landing page showcasing a comprehensive homeschooling education platform. Built with React and Vite for optimal performance and developer experience.

## 📁 Branch Strategy

This project uses a two-branch workflow for development and production:

### 🌳 **main** (Development Branch)
- **Purpose**: Active development and testing
- **Who can push**: All developers
- **Deployment**: Internal testing/staging
- **Protocol**: Feature branches → Pull Requests → main

### 🏆 **master** (Production Branch)
- **Purpose**: Production-ready code only
- **Who can push**: Only via pull requests with approvals
- **Deployment**: Live production environment
- **Protection Rules**:
  - ✅ Requires pull request before merging
  - ✅ Requires 1 approval
  - ✅ Applies to all users (including admins)
  - ✅ Linear history preferred

## 🔄 Development Workflow

### 1. Feature Development
```bash
# Create feature branch from main
git checkout main
git pull origin main
git checkout -b feature/your-feature-name
```

### 2. Create Pull Request to main
- Push your feature branch
- Create PR against `main` branch
- Request review from team members
- Merge after approval

### 3. Release to Production
```bash
# Create release branch
git checkout -b release/v1.0.0

# Make any final adjustments
# Create PR against master branch
# After approval and merge, master is deployed
```

## 💻 Getting Started

### Prerequisites
- Node.js 16+ 
- npm 7+

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Opens dev server at `http://localhost:5173`

### Production Build
```bash
npm run build
```
Generates optimized build in `dist/` folder

### Preview Production Build
```bash
npm run preview
```

## 📦 Project Structure

```
apex/
├── src/
│   ├── components/
│   │   ├── Header.jsx & Header.css
│   │   ├── Hero.jsx & Hero.css
│   │   ├── About.jsx & About.css
│   │   ├── Features.jsx & Features.css
│   │   ├── CTA.jsx & CTA.css
│   │   └── Footer.jsx & Footer.css
│   ├── App.jsx & App.css
│   ├── main.jsx
│   └── index.css
├── dist/                 (Production build output)
├── index.html
├── package.json
├── vite.config.js
└── .gitignore
```

## 🎨 Features

- **Responsive Design**: Mobile-first, works on all devices
- **Modern UI**: Clean, professional styling with CSS
- **Modular Components**: Reusable React components
- **Performance**: Optimized Vite build configuration
- **SEO Ready**: Proper HTML structure and meta tags

### Sections
1. **Header** - Navigation with smooth scrolling
2. **Hero** - Eye-catching landing section
3. **About** - 4-card grid describing Apex Edu benefits
4. **Features** - 6-feature showcase
5. **CTA** - Call-to-action section
6. **Footer** - Multi-column footer with links

## 🔧 Configuration

### Vite Config
- esbuild minification
- Asset optimization
- Development server on port 5173

### CSS Features
- CSS Variables for theming
- Responsive breakpoints (768px, 480px)
- Modern flexbox & grid layouts
- Smooth animations and transitions

## 📝 Styling

No Tailwind CSS - pure CSS with:
- CSS Variables for consistent colors and spacing
- Media queries for responsive design
- Semantic HTML for accessibility
- Professional color scheme:
  - Primary: `#6366f1` (Indigo)
  - Secondary: `#8b5cf6` (Violet)
  - Dark: `#0f172a`
  - Light: `#f8fafc`

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy dist/ folder to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

The `dist/` folder contains:
- `index.html` - Entry point
- `assets/index-*.css` - Minified CSS
- `assets/index-*.js` - Minified JavaScript

## 📚 Technologies

- **React 18.2** - UI library
- **Vite 5.0** - Build tool & dev server
- **CSS3** - Styling (no frameworks)
- **JavaScript ES6+** - Modern JavaScript

## 📄 License

This project is created for Apex Edu.

## 👥 Team

Developed with ❤️ for Apex Edu Homeschooling Program

---

**Repository**: https://github.com/ivyax-star/apex
