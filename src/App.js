import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
      {<Layout />}
      {<Home />}
      {<About />}
      {<Portfolio />}
      {<Contact />}
    </>
  )
}

export default App;
