import WaveDown from "../components/WaveDown";
import WaveUp from "../components/WaveUp";

export default function LatarBelakang(){
    return(
        <div className="">
            <h1 className=" my-9  text-center text-3xl font-bold text-violet-400 mb-8">Latar Belakang Program Studi</h1>
            <WaveUp/>
            <div className="mx-0 py-0 bg-violet-400">
                <div className="grid col-span-1 gap-6 mx-10 text-xl text-white">
                    <h3>Perkembangan ilmu pengetahuan dan teknologi akhir-akhir ini semakin massive atau tak terbendung lagi sejalan dengan ditandainya Revolusi Industri 4.0. Perubahan-perubahan yang diterima oleh seluruh aspek kehidupan manusia sangatlah radikal, bebas, dan tak terarah/terukur, sehingga dunia pendidikan perlu dituntut untuk dapat berinovasi dalam mengimbangi era distruptive ini. Distruftif Innovation merupakan sesuatu yang menggeser teknologi yang telah mapan dan menggoyangkan industri atau produk yang kemudian melahirkan generasi industri baru 4.0 atau generasi millenial ( Zaman Now). Fenomena itu kini semakin dirasakan oleh banyak orang dan menjadi fenomena yang bersifat global. Distruptive Innovation teknologi telah melanda hampir ke semua bidang kehidupan manusia, termasuk dalam dunia pendidikan (Clayton, M Christensen, 1997).</h3>
                    <h3>Program Studi Teknologi Pendidikan merupakan Program Studi (Prodi) yang ditunjuk oleh Kemenristekdikti yang dalam penyelenggaraannya dituntut untuk dapat berinovasi dalam dunia pendidikan dan mengimbangi era distruptive saat ini. Prodi ini mengkaji Dasar-Dasar Ilmu Pendidikan dan Pembelajaran (Pedagogik & Androgogik), ISD (Instructional System Design), seperti Pengembangan Kurikulum dan Manajemen Diklat, Pengembangan Teknologi Pembelajaran dan Pengembangan Teknologi Kinerja, Wawasan Teknologi Pendidikan dalam mengimbangi era distruptive ini, tidak hanya sebatas materi/teoritis saja, akan tetapi adanya praktik etis dalam memfasilitasi proses pembelajaran dan memanfaatkan dan mengelola sumber-sumber belajar dan proses teknologi pembelajaran yang sesuai atau tepat guna.</h3>
                </div>

            </div>
            <WaveDown/>

        </div>
    )
}