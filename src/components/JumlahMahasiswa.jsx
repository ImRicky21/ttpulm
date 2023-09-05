export default function JumlahMahasiswa() {
    return(
        <>
        <div className="text-white">
            <div className="text-center mb-11">
                <h1 className="text-white text-3xl font-bold"> - Prodi Teknologi Pendidikan -</h1>
            </div>
            <div className="flex flex-col justify-center text-center space-x-4 p-4 m-4">
<div className="grid md:grid-flow-col gap-8 p-10">
                <div data-aos="fade-up" data-aos-duration="500">
                    <h2 className="text-8xl font-extrabold">9</h2>
                    <p className="font-bold">Dosen</p>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000">
                    <p className="text-8xl font-extrabold">1</p>
                    <h2 className="font-bold">Guru Besar</h2>
                </div>

                <div data-aos="fade-up" data-aos-duration="1500">
                    <h2 className="text-8xl font-extrabold">2</h2>
                    <p className="font-bold">Doktor</p>
                </div>
</div>

<div className="grid md:grid-flow-col gap-8">
                <div data-aos="fade-up" data-aos-duration="2000">
                    <h2 className="text-8xl font-extrabold">333</h2>
                    <p className="font-bold">Mahasiswa</p>
                </div>

                <div data-aos="fade-up" data-aos-duration="2500">
                    <h2 className="text-8xl font-extrabold">216</h2>
                    <p className="font-bold">Alumni</p>
                </div>
</div>
            </div>
        </div>    
        </>
    )
}
