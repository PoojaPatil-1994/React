import logo from './logo.svg';
import './App.css';
import Navbar from './component/comon/navbar/Navbar';
import Card from './component/comon/card/Card';              
import Banner from './component/comon/banner/Banner';
import Addition from './component/comon/addition/Addition';

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Card/>
      <Card/>
      <Addition/>
      
    </div>
  );
}

export default App;
