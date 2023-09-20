export default function Fasilitas() {
    return(
        <div className="bg-violet-400 text-white py-8">
            <div className=" text flex flex-col justify-center py">
                <h1 className="text-center font-bold text-4xl py-8"> - Fasilitas - </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center place-items-center py-5 px-4">
                    <div className="transition hover:shadow-lg  hover:relative hover:-translate-y-3 ease-in duration-200 text-violet-400 bg-white rounded-lg hover:text-violet-400">
                        <div className="mx-3 py-2 my-6">
                        <h3 className="font-bold text-center mb-3 text-xl hover:text-violet-400">Ruang Multimedia</h3>
                        <p>Digunakan mahasiswa dalam melaksanakan praktikum untuk pembelajaran</p>
                        </div>
                    </div>

                    <div className="group h-auto transition hover:shadow-lg  hover:relative hover:-translate-y-3 ease-in duration-200 text-violet-400 bg-white rounded-lg hover:text-violet-400">
                        <div className="mx-3 py-2 my-6">
                        <h3 className="font-bold text-center mb-3 text-xl   ">Ruang Kelas dan Laboratorium Komputer</h3>
                        <p className="">Dilengkapi dengan koneksi internet agar mahasiswa selalu Update</p>
                        </div>
                    </div>

                    <div className="transition hover:shadow-lg  hover:relative hover:-translate-y-3 ease-in duration-200 text-violet-400 bg-white rounded-lg hover:text-violet-400">
                        <div className="mx-3 py-2 my-6">
                        <h3 className="font-bold text-center mb-3 text-xl hover:text-violet-400">Pusat Sumber Belajar</h3>
                        <p>Menyediakan Buku, Jurnal, dan Hasil penelitian terkait teknologi pendidikan</p>
                        </div>
                    </div>

                    <div className="transition hover:shadow-lg  hover:relative hover:-translate-y-3 ease-in duration-200 text-violet-400 bg-white rounded-lg hover:text-violet-400">
                        <div className="mx-3 py-2 my-6">
                        <h3 className="font-bold text-center mb-3 text-xl hover:text-violet-400">Ruang Broadcasting</h3>
                        <p>Sebagai penunjang pembelajaran mahasiswa berkenaan dengan foto dan video untuk pembelajaran</p>
                        </div>
                    </div>

                    <div className="transition hover:shadow-lg  hover:relative hover:-translate-y-3 ease-in duration-200 text-violet-400 bg-white rounded-lg hover:text-violet-400">
                        <div className="mx-3 py-2 my-6">
                        <h3 className="font-bold text-center mb-3 text-xl hover:text-violet-400">Ruang Podcast</h3>
                        <p>Tempat untuk mahasiswa belajar menjadi juru bicara pada stasiun radio</p>
                        </div>
                    </div>

                    <div className="transition hover:shadow-lg  hover:relative hover:-translate-y-3 ease-in duration-200 text-violet-400 bg-white rounded-lg hover:text-violet-400">
                        <div className="mx-3 py-2 my-6">
                        <h3 className="font-bold text-center mb-3 text-xl hover:text-violet-400">Perkuliahan Berstandar Nasional</h3>
                        <p>Teknologi Pendidikan sendiri sudah memliki akreditasi B yang tentunya memiliki standar tinggi </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}