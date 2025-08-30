#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔨 Building production version for GitHub Pages...\n');

// Check if node_modules exists
if (!fs.existsSync(path.join(__dirname, '../node_modules'))) {
  console.log('📦 Installing dependencies...');
  try {
    execSync('npm install', { cwd: path.join(__dirname, '..'), stdio: 'inherit' });
    console.log('✅ Dependencies installed successfully!\n');
  } catch (error) {
    console.error('❌ Failed to install dependencies:', error.message);
    process.exit(1);
  }
}

// Clean dist directory
const distPath = path.join(__dirname, '../dist');
if (fs.existsSync(distPath)) {
  console.log('🧹 Cleaning previous build...');
  fs.rmSync(distPath, { recursive: true, force: true });
}

// Build the project
console.log('🏗️  Building project...');
try {
  execSync('npm run build', { cwd: path.join(__dirname, '..'), stdio: 'inherit' });
  console.log('✅ Build completed successfully!\n');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

// Check build output
if (fs.existsSync(distPath)) {
  const files = fs.readdirSync(distPath);
  console.log('📁 Build output:');
  files.forEach(file => {
    const stats = fs.statSync(path.join(distPath, file));
    if (stats.isDirectory()) {
      console.log(`  📁 ${file}/`);
    } else {
      console.log(`  📄 ${file}`);
    }
  });
  
  console.log('\n🎉 Build is ready for deployment!');
  console.log('💡 Run "npm run deploy" to deploy to GitHub Pages');
  console.log('💡 Run "npm run preview" to preview the build locally');
} else {
  console.error('❌ Build output not found');
  process.exit(1);
}

