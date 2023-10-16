import { useState } from "react";
import { Link } from "react-router-dom";
import logoTP from "../assets/logo-Teknologi-Pendidikan-FKIP-ulm.png"
export default function NavbarMenu() {
    const [isOpen,setIsOpen] = useState()
    return(
        <nav className={`container flex items-center justify-between flex-wrap p-3 backdrop-blur-xl `}>
            <div className="">
                <h2 className="lg:hidden"><Link to="/"><img src={logoTP} alt="logo-tp" className="w-11" /></Link></h2>
            </div>
            <div className="lg:hidden block">
                <button onClick={()=> setIsOpen (!isOpen)} className="">
                    <div className={ `cursor-pointer h-1 w-6 rounded-3xl bg-black fill-black m-1 ${isOpen?"duration-75 delay-duration-75 transition ease-in-out origin-top-left rotate-45":"transition ease-in-out origin-top-left rotate-0 block"}`}></div>
                    <div className={ `cursor-pointer h-1 w-6 rounded-3xl bg-black fill-black m-1 ${isOpen?"duration-75 delay-duration-75 transition ease-in-out opacity-0 ":"transition ease-in-out block"}`}></div>
                    <div className={ `cursor-pointer h-1 w-6 rounded-3xl bg-black fill-black m-1 ${isOpen?"duration-75 delay-duration-75 transition ease-in-out origin-bottom-left -rotate-45":"transition ease-in-out origin-bottom-left rotate-0 block"}`}></div>
                </button>
            </div>
            <div className={`trasnsition ease-in-out w-full block relative flex-grow justify-between lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
            <div className="transition ease-in-out flex flex-col lg:flex-row lg:flex-grow ">
                 <button className=" group mx-3">
            <h2 href="#" className="text-slate-950">Profil</h2>
            <ul className=" md:absolute transition duration-150 hidden group-hover:block align-middle bg-slate-50 text-gray-800 space-y-2 shadow ">
              <li><Link to="/latar-belakang" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Latar Belakang</Link></li>
              <li><Link to="/kata-sambutan" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Kata Sambutan Koordinator Program Studi</Link></li>
              <li><Link to="/visi-dan-misi" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Visi dan Misi</Link></li>
              <li><Link to="/struktur-organisasi" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Struktur Organisasi</Link></li>
              <li><Link to="/dosen-dan-tenaga-kependidikan" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Dosen & Tenaga Kependidikan</Link></li>
            </ul>
                </button>
                 <button className=" group mx-3">
            <h2 href="#" className="text-slate-950">Akademik</h2>
            <ul className="z-40 md:absolute hidden group-hover:block bg-slate-50 text-gray-800 space-y-2 shadow">
              <li><Link to="" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Seminar Hasil/Ujian Skripsi</Link></li>
              <li><Link to="" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Jurnal</Link></li>
              <li><Link to="" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Akreditasi Program Studi</Link></li>
              <li><Link to="" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Kurikulum</Link></li>
              <li><Link to="" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Jadwal Perkuliahan</Link></li>
            </ul>
                </button>
                 <button className=" group mx-3">
            <h2 href="#" className="text-slate-950 ">Mahasiswa</h2>
            <ul className="z-40 md:absolute hidden group-hover:block bg-slate-50 text-gray-800 space-y-2 shadow">
              <li><Link to="" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Himpunan Mahasiswa</Link></li>
              <li><Link to="" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Daftar Mahasiswa</Link></li>
              <li><Link to="" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Prestasi Mahasiswa</Link></li>
              <li><Link to="" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Panduan</Link></li>
            </ul>
                </button>
                 <button className=" group mx-3">
            <h2 href="#" className="text-slate-950 ">Alumni</h2>
            <ul className="z-40 md:absolute hidden group-hover:block bg-slate-50 text-gray-800 space-y-2 shadow">
              <li><Link to="" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Prospek Lulusan</Link></li>
              <li><Link to="" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Tracer Alumni</Link></li>
              <li><Link to="" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">CDC ULM</Link></li>  
            </ul>
                </button>
                 <button className=" group mx-3">
            <h2 href="#" className="text-slate-950 ">Informasi</h2>
            <ul className="z-40 md:absolute hidden group-hover:block bg-slate-50 text-gray-800 space-y-2 shadow">
              <li><Link to="" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Jadwal Wisuda </Link></li>
              <li><Link to="" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Brosur Program Studi</Link></li>
              <li><Link to="" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Berita dan Pengumuman</Link></li>  
            </ul>
                </button>
                 <button className=" group mx-3">
                  <h2 className="text-slate-950 "><Link to="/kebijakan">Kebijakan</Link></h2>
                </button>
            </div>
       <div>
         <button  className="inline-flex items-center bg-violet-900 font-bold border-0 rounded-xl py-2 px-4 text-white">
           <a href="https://docs.google.com/forms/d/e/1FAIpQLSc-VicJIsmIAM_Yg_IhbgZv0mAbaRDPAcd7KUD6agXVQTCbvw/viewform" target="blank">
           
             Daftar Ujian Skripsi
           
            </a>
         </button>
       </div>

            </div>

        </nav>
    )
}
