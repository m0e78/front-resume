
import Navbar from './components/Navbar';
import './App.css'
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';
import ProductList from './components/ProductList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Orderlist from './components/Orderlist';
import ProductDetails from './components/ProductDetails';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SideBar />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/productlist" element={<ProductList />}></Route>

          {/* <Route index element={<PostList />} /> */}
          <Route path="/orderlist" element={<Orderlist />}></Route>

            <Route path='/orderlist/:id' element={<ProductDetails/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
        </Routes>

      </Router>
    </div>

  );
}

export default App;
