import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/SignUp';
import Purchases from './Pages/Purchases/Purchases';
import NavigationBar from './Pages/Shared/NavigationBar';
import RequireAuth from './Pages/RequireAuth'
import Dashboard from './Pages/DashBoard/Dashboard';
import MyOrders from './Pages/DashBoard/MyOrders';
import Review from './Pages/DashBoard/Review';
import MyProfile from './Pages/DashBoard/MyProfile';
import AllOrder from './Pages/DashBoard/AllOrder';

function App() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/purchases/:Id' element={<RequireAuth>
          <Purchases></Purchases>
        </RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='review' element={<Review></Review>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='allOrder' element={<AllOrder></AllOrder>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
