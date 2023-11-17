
import './App.css';
import Increment from './Components/Increment';
import SimpleIntrest from './Components/SimpleIntrest';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home';
import SimpleFormWithOutValid from './Components/SimpleFormWithOutValid';
import FormOne from './Components/FormOne';
import FormTwo from './Components/FormTwo';
import FormThree from './Components/FormThree';


function App() {
  return (
    
  <Router>
    <Navbar/>
    <FormOne/>
    <FormTwo/>
    <FormThree/>
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
