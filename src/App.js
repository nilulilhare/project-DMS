
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import Header from './template/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './template/home/Home';
import About from './template/about/About';
import ContactUs from './include/contactUs/ContactUs';
import Review from './include/review/Review';
import SignIn from './include/signIn/SignIn';
import Search from './include/search/Search';
function App() {
  return (
   <div>
   <BrowserRouter>
    <Header/>
    <div className='img'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/review' element={<Review/>}/>
        <Route path='/login' element={<SignIn/>}/>
        <Route path='/search' element={<Search/>}/>
       
      </Routes>
    </div>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
