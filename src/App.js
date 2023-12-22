import logo from './logo.svg';
import './App.css';
import Navbar from './component/comon/navbar/Navbar';
import Card from './component/comon/card/Card';
import Banner from './component/comon/banner/Banner';
import Addition from './component/comon/addition/Addition';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Table } from './component/comon/table/Table';

function App() {
  return (
    <div>
      <BrowserRouter >
      <Navbar />
        {/* <Routes>
          <Route path="/" element={ <Banner />} /> 
          <Route path="/about" element={  <Card />} /> 
          <Route path="/table" element={ <Addition />} /> 
        </Routes> */}
        <Table/>
      </BrowserRouter>
     
     
     
    
    </div>
  );
}

export default App;
