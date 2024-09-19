import './App.scss';
import { Routes, Route } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio';
import OtherProjects from './components/OtherProjects';
import Blog from './components/Blog';
import BlogPost from './components/Blog/BlogPost/FirstPost';

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
            <Route path="/otherProjects" element={<OtherProjects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </>
  )
}

export default App;
