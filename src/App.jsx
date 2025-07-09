import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Orcamentos from './pages/Orcamentos'
import Contato from './pages/Contato'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/orcamentos" element={<Orcamentos />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
