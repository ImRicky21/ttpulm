import { Route, Routes } from 'react-router-dom';
import { path } from './utils/path';
import KataSambutan from './pages/kataSambutan';
import LatarBelakang from './pages/latarBelakang';
import VisiDanMisi from './pages/visidanmisi';
import DosenDanTenaga from './pages/dosenDanTenaga';
import Home from './pages/Home';
import NotFound from './pages/404NotFound';
import StrukturOrganisasi from './pages/strukturOrganisasi';
import Aos from 'aos';
import NavbarMenu from './components/NavbarMenu';
import Footer from './components/FooterCredential';
//get data useState
// import dataUser from './service/Api';
// import React, { useState } from 'react';
// import latarBelakang from './pages/latarBelakang';

const { latarbelakang, root, katasambutan, visidanmisi, strukturorganisasi, dosendantenaga, other } = path;
function App(){
  
  Aos.init()
  //data user & effect state
  // dataUser()
//  const [loading, setLoading]= useState(false)  
//   React.useEffect(()=>{
//     setLoading(true);
//     setTimeout(()=>{
//       setLoading(false) 
//     }, 2000)
//   },[])
  return(
    <>
    <header className="sticky z-50 top-0 shadow-md">
      <NavbarMenu/>
    </header>
    <div className>
      <Routes>
        <Route path={root} element={<Home/>}/>
        <Route path={latarbelakang} element={<LatarBelakang/>}/>
        <Route path={katasambutan} element={<KataSambutan/>}/>
        <Route path={visidanmisi} element={<VisiDanMisi/>}/>
        <Route path={dosendantenaga} element={<DosenDanTenaga/>}/>
        <Route path={strukturorganisasi} element={<StrukturOrganisasi/>}/>
        <Route/>
        <Route/>
        <Route/>
        <Route/>
        <Route path={other} element={<NotFound/>}/>
      </Routes>
    </div>  
    <footer>
      <Footer/>
    </footer>
    </>
  )
}

export default App