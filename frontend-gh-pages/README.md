# Meena Kannan Portfolio - GitHub Pages Version

This is a standalone, independent version of the portfolio frontend optimized for GitHub Pages deployment.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Development:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

## 📁 Project Structure

```
frontend-gh-pages/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── contexts/      # React contexts
│   ├── App.jsx        # Main app component
│   └── main.jsx       # App entry point
├── public/            # Static assets
├── dist/              # Build output (generated)
├── package.json       # Dependencies and scripts
├── vite.config.js     # Vite configuration
└── tailwind.config.js # Tailwind CSS configuration
```

## 🌐 GitHub Pages Configuration

- **Base URL**: `/meena-kannan-portfolio/`
- **Build Output**: `dist/` directory
- **Deployment**: Uses `gh-pages` package for automatic deployment

## 🔧 Key Features

- **React 18** with modern hooks and features
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for utility-first styling
- **React Router** for client-side routing
- **Responsive Design** optimized for all devices
- **SEO Optimized** for better search engine visibility

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

The `deploy` script will:
1. Build the project (`npm run build`)
2. Deploy the `dist/` folder to the `gh-pages` branch
3. Make it available at: `https://meenadavin.github.io/meena-kannan-portfolio`

## 🔒 Security

- No sensitive data in client-side code
- HTTPS enforced on GitHub Pages
- Content Security Policy headers included

## 📞 Support

For issues or questions about this GitHub Pages version, please check the main repository or create an issue.

---

**Note**: This is a standalone version optimized for GitHub Pages. The main application with backend services is in the parent directory.
