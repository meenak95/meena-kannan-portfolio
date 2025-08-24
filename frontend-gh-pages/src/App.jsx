import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
