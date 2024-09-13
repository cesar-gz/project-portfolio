import './App.scss';
import { Routes, Route } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
      <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/project-portfolio" element={<Home />} />
            </Route>
          </Routes>
        </ErrorBoundary>
    </>
  )
}

export default App;
