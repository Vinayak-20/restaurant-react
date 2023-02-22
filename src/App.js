import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Restuarentlist from './components/Restuarentlist';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ViewRestuarant from './components/ViewRestuarant';


function App() {
  return (
    <div className="App">

    <Router>
              <Header></Header>
   
       <Routes>
        {/* path setting for restaurent list */}
        <Route path='/' element={<Restuarentlist/>}/>
        <Route path='/view-restaurant/:id' element={<ViewRestuarant/>} />
        </Routes>
              
  
        {/* <h1>RESTUARANT</h1> */}
        <Footer></Footer>
    </Router>
    </div>
  );
}

export default App;
