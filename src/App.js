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
import AllUser from './Pages/DashBoard/AllUser';
import AddProduct from './Pages/DashBoard/AddProduct';
import ManageProduct from './Pages/DashBoard/ManageProduct';
import Payment from './Pages/DashBoard/Payment';
import NotfoundPage from './Pages/NotfoundPage';
import Blogs from './Pages/Blogs';
import MyPortfolio from './Pages/MyPortfolio';

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
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='review' element={<Review></Review>}></Route>
          <Route path='myOrders' element={<MyOrders></MyOrders>}></Route>
          <Route path='allOrder' element={<AllOrder></AllOrder>}></Route>
          <Route path='allUser' element={<AllUser></AllUser>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='manageProduct' element={<ManageProduct></ManageProduct>}></Route>
        </Route>
        <Route path='*' element={<NotfoundPage></NotfoundPage>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
      </Routes>
    </div>
  );
}

export default App;
