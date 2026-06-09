import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/index.css'

// Providers
import { LanguageProvider } from './context/LanguageContext'
import { ErrorBoundary } from './components/common/ErrorBoundary'

// Layout
import TransitionLayout from './components/TransitionLayout.jsx'

// Pages
import TestPage from './pages/TestPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import PortfolioPage from './pages/PortfolioPage.jsx'
import ProjectPage from './pages/ProjectPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<TransitionLayout />}>
              <Route path="/" element={<TestPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/project/:id" element={<ProjectPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ErrorBoundary>
  </StrictMode>,
)
