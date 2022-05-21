import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/SignUp';
import Purchases from './Pages/Purchases/Purchases';
import NavigationBar from './Pages/Shared/NavigationBar';

function App() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/purchases/:Id' element={<Purchases></Purchases>}></Route>
      </Routes>
    </div>
  );
}

export default App;
