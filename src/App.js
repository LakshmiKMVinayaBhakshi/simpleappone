
import './App.css';
import Increment from './Components/Increment';
import SimpleIntrest from './Components/SimpleIntrest';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home';
import SimpleFormWithOutValid from './Components/SimpleFormWithOutValid';


function App() {
  return (
    
  <Router>
    <Navbar/>
    <SimpleFormWithOutValid/>
    <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/increment'  element={<Increment/>}/>
    <Route path='/simple' element={<SimpleIntrest/>}/>
    </Routes>
    
    </Router>
  );
}

export default App;
