import React from 'react';
import { Routes,Route } from 'react-router-dom';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignup from './pages/CaptainSignup';
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Footer from './component/common/Footer';
import Help from './pages/Help';
import Drive from './pages/Drive';
import Buisness from './pages/Buisness';
import Ride from './pages/Ride';
import Start from './pages/Start';
import CaptainHome from './pages/CaptainHome';
import CaptainProtectWrapper from './pages/CaptainProtectWrapper';
import UserProtectWrapper from './pages/UserProtectWrapper';

const app = () =>{
  return(
     <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<UserSignup/>}/>
        <Route path='/Captain-Login' element={<CaptainLogin/>}/>
        <Route path='/Captain-Signup' element={<CaptainSignup/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/drive' element={<Drive/>}/>
        <Route path='/buisness' element={<Buisness/>}/>
        <Route path='/Ride' element={<Ride/>}/>
        
        <Route path='/home' element={
          <UserProtectWrapper>
            <Home/>
          </UserProtectWrapper>
        }/>

        <Route path='/Captain_Home' element={
           <CaptainProtectWrapper>
            <CaptainHome/>
           </CaptainProtectWrapper>
          }/>

          
      </Routes>
      <Footer/>
     </div>
  )
}

export default app