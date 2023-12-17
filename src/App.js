import logo from './logo.svg';
import './App.css';
import Navbar from './component/comon/navbar/Navbar';
import Card from './component/comon/card/Card';
import Banner from './component/comon/banner/Banner';
import Addition from './component/comon/addition/Addition';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter >
      <Navbar />
        <Routes>
          <Route path="/" element={ <Banner />} /> {/* 👈 Renders at /app/ */}
          <Route path="/about" element={  <Card />} /> {/* 👈 Renders at /app/ */}
          <Route path="/table" element={ <Addition />} /> {/* 👈 Renders at /app/ */}
        </Routes>
      </BrowserRouter>
     
     
     
    
    </div>
  );
}

export default App;
