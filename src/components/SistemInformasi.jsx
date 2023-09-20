export default function SistemInformasi() {
    return(
        <div className="">
            <div className="flex flex-col items-center text-center">
                <div className="py-5 my-8">
                    <h1 className="font-bold text-4xl text-white"> - Sistem Informasi Dan Pelayanan Akademik Mahasiswa - </h1>
                </div>
                <div>
                    <h3 className="text-white font-extrabold text-2xl">Tingkat Fakultas</h3>
                    <div className="grid md:grid-cols-3  gap-8 my-10 py-5" data-aos="fade-up" data-aos-duration="1000">
                        <a target="/blank" href="https://ulm.ac.id/id/category/penerimaan-mahasiswa-baru/" className="bg-white rounded-md text-lg px-5 py-5 font-semibold text-violet-400 hover:shadow-lg transition ease-in duration-300 hover:-translate-y-3 hover:shadow-slate-100 text-center "><span className="">Penerimaan Mahasiswa Baru ULM</span></a>
                        <a target="/blank" href="https://upmfkip.ulm.ac.id/" className="bg-white rounded-md text-lg px-5 py-5 font-semibold text-violet-400 hover:shadow-lg transition ease-in duration-300 hover:-translate-y-3 hover:shadow-slate-100 text-center "><span className="">Unit Penjaminan Mutu FKIP ULM</span></a>
                        <a target="/blank" href="https://linktr.ee/akademikfkipulm" className="bg-white rounded-md text-lg px-5 py-5 font-semibold text-violet-400 hover:shadow-lg transition ease-in duration-300 hover:-translate-y-3 hover:shadow-slate-100 text-center "><span className="">Layanan Akademik FKIP ULM</span></a>
                        <a target="/blank" href="https://silat.ulm.ac.id/" className="bg-white rounded-md text-lg px-5 py-5 font-semibold text-violet-400 hover:shadow-lg transition ease-in duration-300 hover:-translate-y-3 hover:shadow-slate-100 text-center "><span className="">SILAT ULM</span></a>
                        <a target="/blank" href="https://simari.ulm.ac.id/" className="bg-white rounded-md text-lg px-5 py-5 font-semibold text-violet-400 hover:shadow-lg transition ease-in duration-300 hover:-translate-y-3 hover:shadow-slate-100 text-center "><span className="">SIMARI ULM</span></a>
                        <a target="/blank" href="https://mbkm.fkip.ulm.ac.id/login" className="bg-white rounded-md text-lg px-5 py-5 font-semibold text-violet-400 hover:shadow-lg transition ease-in duration-300 hover:-translate-y-3 hover:shadow-slate-100 text-center "><span className="">SIBISA ULM</span></a>
                    </div>
                </div>
                <div>
                    <h3 className="text-white font-extrabold text-2xl">Tingkat Program Studi</h3>
                    <div className="grid md:grid-cols-3 gap-8 my-10 py-5" data-aos="fade-up" data-aos-duration="1000">
                    <a target="/blank" href="" className="bg-white rounded-md text-lg px-5 py-5 font-semibold text-violet-400 hover:shadow-lg transition ease-in duration-300 hover:-translate-y-3 hover:shadow-slate-100 text-center "><span className="">Seminar Hasil/Ujian Skripsi</span></a>
                    <a target="/blank" href="" className="bg-white rounded-md text-lg px-5 py-5 font-semibold text-violet-400 hover:shadow-lg transition ease-in duration-300 hover:-translate-y-3 hover:shadow-slate-100 text-center "><span className="">JURNAL</span></a>
                    <a target="/blank" href="https://docs.google.com/document/d/1TsdZGqwLCjTlBCQ0lUr58wiVMnqZPdXK/edit" className="bg-white rounded-md text-lg px-5 py-5 font-semibold text-violet-400 hover:shadow-lg transition ease-in duration-300 hover:-translate-y-3 hover:shadow-slate-100 text-center "><span className="">Form Status Terminal</span></a>
                    </div>
                </div>
                <div className="">
                    <h3 className="text-white font-extrabold text-2xl">Program Merdeka Belajar Kampus Merdeka</h3>
                    <div className="grid md:grid-cols-2 gap-8 my-10 py-5" data-aos="fade-up" data-aos-duration="1000">
                    <a target="/blank" href="https://mbkm.ulm.ac.id/" className="bg-white rounded-md text-lg px-5 py-5 font-semibold text-violet-400 hover:shadow-lg transition ease-in duration-300 hover:-translate-y-3 hover:shadow-slate-100 text-center "><span className="">MBKM ULM</span></a>
                    <a target="/blank" href="https://docs.google.com/document/d/1Cm99ZDBUjxF6UquSzM9_yE6g2pFnK3p_/edit" className="bg-white rounded-md text-lg px-5 py-5 font-semibold text-violet-400 hover:shadow-lg transition ease-in duration-300 hover:-translate-y-3 hover:shadow-slate-100 text-center "><span className="">Form Pendaftaran MBKM</span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
