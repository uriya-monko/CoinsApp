import './App.css'
import ExchangeRates from './components/ExchangeRates';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
     <Header title="Coins App"/>
     <div style={{ display: 'flex' }}>
     <Sidebar/>
     <div style={{ marginLeft: "300px",marginTop:"20px", width: "100%" }}>
     <Routes>
      <Route path="/" element={<h2>Welcome to the Currency Exchange App</h2>} />
      <Route path="/rates/:base/" element={<ExchangeRates />} />
     </Routes >
     </div>
      </div>
    </Router>
  )
}

export default App
