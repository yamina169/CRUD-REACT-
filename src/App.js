
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import EmpListe from './EmpListe';
import EmpNew from './EmpNew';
import EmpDetails from './EmpDetails';
import EmpEdit from './EmpEdit';
function App() {
  return (
    <div className="App">
      <h1>Manage Employees</h1>
      <BrowserRouter>
  <Routes>
    <Route  path='/' element={<EmpListe/>}> </Route>
    <Route  path='/employee/new' element={<EmpNew/>}> </Route>
    <Route  path='/employee/details/:empid' element={<EmpDetails/>}> </Route>
    <Route  path='/employee/edit/:empid' element={<EmpEdit/>}></Route>
   
  </Routes>
  </BrowserRouter>
      </div>
      
  );
  
}

export default App;
