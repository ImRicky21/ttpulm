import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavbarMenu() {
    const [isOpen,setIsOpen] = useState()
    return(
        <nav className={`container flex items-center justify-between flex-wrap p-3 backdrop-blur-xl `}>
            <div className="">
                <a className="lg:hidden"><Link to="/">logo</Link></a>
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
                 <a className=" group mx-3">
            <a href="#" className="text-slate-950">Profil</a>
            <ul className=" md:absolute transition duration-150 hidden group-hover:block align-middle bg-slate-50 text-gray-800 space-y-2 shadow ">
              <li><Link to="/latar-belakang" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Latar Belakang</Link></li>
              <li><Link to="/kata-sambutan" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Kata Sambutan Koordinator Program Studi</Link></li>
              <li><Link to="/visi-dan-misi" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Visi dan Misi</Link></li>
              <li><Link to="/struktur-organisasi" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Struktur Organisasi</Link></li>
              <li><Link to="/dosen-dan-tenaga-kependidikan" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Dosen & Tenaga Kependidikan</Link></li>
            </ul>
                </a>
                 <a className=" group mx-3">
            <a href="#" className="text-slate-950">Akademik</a>
            <ul className="z-40 md:absolute hidden group-hover:block bg-slate-50 text-gray-800 space-y-2 shadow">
              <li><Link to="" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Seminar Hasil/Ujian Skripsi</Link></li>
              <li><Link to="" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Jurnal</Link></li>
              <li><Link to="" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Akreditasi Program Studi</Link></li>
              <li><Link to="" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Kurikulum</Link></li>
              <li><Link to="" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Jadwal Perkuliahan</Link></li>
            </ul>
                </a>
                 <a className=" group mx-3">
            <a href="#" className="text-slate-950 ">Mahasiswa</a>
            <ul className="z-40 md:absolute hidden group-hover:block bg-slate-50 text-gray-800 space-y-2 shadow">
              <li><Link to="" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Himpunan Mahasiswa</Link></li>
              <li><Link to="" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Daftar Mahasiswa</Link></li>
              <li><Link to="" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Prestasi Mahasiswa</Link></li>
              <li><Link to="" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Panduan</Link></li>
            </ul>
                </a>
                 <a className=" group mx-3">
            <a href="#" className="text-slate-950 ">Alumni</a>
            <ul className="z-40 md:absolute hidden group-hover:block bg-slate-50 text-gray-800 space-y-2 shadow">
              <li><Link to="" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Prospek Lulusan</Link></li>
              <li><Link to="" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Tracer Alumni</Link></li>
              <li><Link to="" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">CDC ULM</Link></li>  
            </ul>
                </a>
                 <a className=" group mx-3">
            <a href="#" className="text-slate-950 ">Informasi</a>
            <ul className="z-40 md:absolute hidden group-hover:block bg-slate-50 text-gray-800 space-y-2 shadow">
              <li><Link to="" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Jadwal Wisuda </Link></li>
              <li><Link to="" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Brosur Program Studi</Link></li>
              <li><Link to="" className="block transition eas-in-out w-52 p-2 duration-200 delay-200 hover:bg-violet-300">Berita dan Pengumuman</Link></li>  
            </ul>
                </a>
                 <a className="">
                    <a href="#" className="text-white "></a>
                </a>
            </div>
       <div>
         <button href="" target="_blank" className="inline-flex items-center bg-black border-0 py-2 px-4 text-white">
           Daftar Ujian Skripsi
         </button>
       </div>

            </div>

        </nav>
    )
}
