import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Header from './Components/Home/Header/header';
import Home from './Components/Home/Home/Home';
import Services from './Components/Home/Services/Services/Services';
import Login from './Components/Login/Login/Login';
import Signup from './Components/Login/Signup/Signup';
import RequairAuth from './Components/Login/RequairAuth/RuquairAuth';
import Order from './Components/Order/Order';
import Footer from './Components/Home/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path= '/order' element={
          <RequairAuth>
            <Order></Order>
          </RequairAuth>
        }>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
