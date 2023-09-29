import { Route, Routes } from 'react-router-dom';
import { path } from './utils/path';
import KataSambutan from './pages/KataSambutan';
import LatarBelakang from './pages/LatarBelakang';
import DosenDanTenaga from './pages/DosenDanTenaga';
import Home from './pages/Home';
import NotFound from './pages/404NotFound';
import StrukturOrganisasi from './pages/StrukturOrganisasi';
import Aos from 'aos';
import NavbarMenu from './components/NavbarMenu';
import Footer from './components/FooterCredential';
import VisiDanMisi from './pages/VisidanMisi';


const { latarbelakang, root, katasambutan, visidanmisi, strukturorganisasi, dosendantenaga, other } = path;
function App(){
  Aos.init()
  
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
        <Route path={dosendantenaga} element={<DosenDanTenaga/>}/>
        <Route path={visidanmisi} element={<VisiDanMisi/>}/>
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