import React, { useEffect } from 'react';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import CheckoutProduct from './CheckoutProduct';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';






function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(()=>{
      auth.onAuthStateChanged((authUser)=>{
        console.log('the user is >>>> ', authUser);
        if(authUser){
          dispatch({
            type:"SET-USER",
            user:authUser            
          })
          
        }
        else{
          dispatch({
            type:'SET-USER',
            user:null
          })   
        }
      })
  }, []);
  return (
    //BEM
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
  {/*<Route path="CheckoutProduct/" element={<CheckoutProduct />} />*/}

       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
