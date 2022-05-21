import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/SignUp';
import NavigationBar from './Pages/Shared/NavigationBar';

function App() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
