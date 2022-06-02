import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Blogs from './Pages/Blogs';
import AddProduct from './Pages/Dashboard/AddProduct';
import AddReview from './Pages/Dashboard/AddReview';
import DashBoard from './Pages/Dashboard/Dashboard';
import ManageOrder from './Pages/Dashboard/ManageOrder';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import Payment from './Pages/Dashboard/Payment';
import Users from './Pages/Dashboard/Users';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAdmin from './Pages/Login/PequireAdmin';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import NotFound from './Pages/NotFound';
import Portfolio from './Pages/Portfolio';
import Purchase from './Pages/Purchase';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className="App bg-slate-100">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>} ></Route>

        
        <Route path='/dashboard' element={<RequireAuth><DashBoard></DashBoard></RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>} ></Route>
          <Route path='review' element={<AddReview></AddReview>}></Route>
          <Route path='myOrder' element={<MyOrders></MyOrders>}></Route>        
          {/* <Route path='profile' element={<MyProfile></MyProfile>}></Route> */}
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='addProduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='allUsers' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='manageProduct' element={<RequireAdmin><ManageProduct></ManageProduct> </RequireAdmin>}></Route>
          <Route path='manageOrder' element={<RequireAdmin><ManageOrder></ManageOrder></RequireAdmin>}></Route>
        </Route>


        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      
    </div>
  );
}

export default App;
