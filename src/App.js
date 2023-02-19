import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// import components
import Home from './components/pages/Home'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Header/>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
