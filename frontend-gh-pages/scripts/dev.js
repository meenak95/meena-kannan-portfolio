#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting development environment for GitHub Pages version...\n');

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

// Start development server
console.log('🌐 Starting development server...');
console.log('📱 Open http://localhost:3000 in your browser\n');

try {
  execSync('npm run dev', { cwd: path.join(__dirname, '..'), stdio: 'inherit' });
} catch (error) {
  console.error('❌ Development server failed:', error.message);
  process.exit(1);
}
