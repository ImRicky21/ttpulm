import {BsInstagram, BsWhatsapp, BsYoutube} from 'react-icons/bs'

export default function ProfileTP() {
    return(
        <div className="flex flex-col pb-9 m-10  justify-between sm:flex :flex-row ">
        <div className="" data-aos="fade-up" data-aos-duration="3000">
            <h1 className="text-5xl font-bold text-violet-400">Universitas Lambung Mangkurat</h1>
            <h2 className="">Fakultas Ilmu Keguruan dan Ilmu Pendidikan </h2>
            <h3 className="text-4xl font-bold">Program Studi</h3>
            <h1 className="text-3xl">Teknologi Pendidikan</h1>

            <div className='flex mt-6 space-x-4'>
                <a data-aos="fade-up" data-aos-duration="1000" href='https://www.youtube.com/@teknologipendidikanulm6008' target='/blank' className=' text-red-600 transition ease-in-out duration-200 delay-300 drop-shadow-2xl hover:relative hover:scale-150 text-3xl'><BsYoutube/></a>
                <a data-aos="fade-up" data-aos-duration="2000" href='https://wa.me/6287764040189' target='/blank' className=' text-green-500 transition ease-in-out duration-200 delay-300 drop-shadow-2xl hover:relative hover:scale-150 text-3xl'><BsWhatsapp/></a>
                <a data-aos="fade-up" data-aos-duration="3000" href='https://www.instagram.com/tekpenulm/' target='/blank' className=' text-violet-500 transition ease-in-out duration-200 delay-300 drop-shadow-2xl hover:relative hover:scale-150 text-3xl'><BsInstagram/></a>
            </div>
        </div>
    </div>
    )   
}
