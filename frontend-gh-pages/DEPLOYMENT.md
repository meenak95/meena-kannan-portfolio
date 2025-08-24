# GitHub Pages Deployment Guide

This guide will walk you through deploying your portfolio to GitHub Pages.

## 🚀 Prerequisites

1. **GitHub Account**: You need a GitHub account
2. **Repository**: Your portfolio should be in a GitHub repository
3. **Node.js**: Version 18+ installed on your machine
4. **Git**: Git installed and configured

## 📋 Step-by-Step Deployment

### 1. Repository Setup

Ensure your repository is named `meena-kannan-portfolio` and is public (required for free GitHub Pages).

### 2. Install Dependencies

```bash
cd frontend-gh-pages
npm install
```

### 3. Test Locally

```bash
npm run dev
```

Open `http://localhost:3000` to verify everything works correctly.

### 4. Build the Project

```bash
npm run build
```

This creates a `dist/` folder with your production-ready files.

### 5. Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
- Build your project
- Create a `gh-pages` branch
- Push the `dist/` contents to that branch
- Configure GitHub Pages to serve from that branch

### 6. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Choose **gh-pages** branch and **/(root)** folder
6. Click **Save**

### 7. Wait for Deployment

GitHub Pages typically takes 2-5 minutes to deploy. You'll see a green checkmark when it's ready.

## 🌐 Access Your Site

Your portfolio will be available at:
```
https://meenadavin.github.io/meena-kannan-portfolio
```

## 🔄 Updating Your Site

To update your deployed site:

1. Make your changes
2. Commit and push to your main branch
3. Run `npm run deploy` again

## 🛠️ Troubleshooting

### Common Issues

**Build Errors**
- Check that all dependencies are installed
- Verify Node.js version (18+)
- Check console for specific error messages

**Deployment Issues**
- Ensure you have write access to the repository
- Check that the repository is public
- Verify the `gh-pages` package is installed

**404 Errors**
- Verify the base path in `vite.config.js` matches your repository name
- Check that GitHub Pages is configured to use the `gh-pages` branch

**Routing Issues**
- GitHub Pages doesn't support client-side routing by default
- Consider using HashRouter instead of BrowserRouter for better compatibility

### Performance Optimization

1. **Image Optimization**: Use WebP format and compress images
2. **Code Splitting**: Vite automatically handles this
3. **Minification**: Build process includes minification
4. **Caching**: GitHub Pages provides good caching

## 🔒 Security Considerations

- No sensitive data in client-side code
- HTTPS is enforced on GitHub Pages
- Consider adding Content Security Policy headers
- Validate all user inputs

## 📱 Mobile Optimization

- Test on various devices
- Ensure responsive design works
- Optimize touch interactions
- Test loading times on mobile networks

## 📊 Analytics

Consider adding analytics to track your portfolio's performance:

- Google Analytics
- GitHub Pages built-in analytics
- Custom event tracking

## 🎯 Best Practices

1. **Regular Updates**: Keep your portfolio current
2. **Performance**: Monitor Core Web Vitals
3. **SEO**: Use proper meta tags and descriptions
4. **Accessibility**: Ensure WCAG compliance
5. **Testing**: Test across different browsers and devices

## 📞 Support

If you encounter issues:

1. Check the GitHub Pages documentation
2. Review the build logs in your terminal
3. Check the GitHub repository issues
4. Verify your repository settings

---

**Happy Deploying! 🎉**
