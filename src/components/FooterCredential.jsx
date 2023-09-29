export default function Footer() {
    const year = new Date().getFullYear()
    

    return(
        <div>
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-9 px-3">

                    <div className="flex flex-col px-10 ">    
                        <h3 className="font-bold text-xl text-violet-400">Teknologi Pendidikan</h3>
                        <p className="font-semibold ">Adalah program studi di Universitas Lambung Mangkurat Banjarmasin dan telah berdiri selama 8 tahun.</p>
                    </div>

                    <div className="flex flex-col">
                            <h2 className="text-center font-bold text-xl text-violet-400">Tautan</h2>

                            <div className="text-center ">
                                <div className="flex flex-col items-center gap-3">
                                <a className="bg-violet-400 text-white w-64 font-semibold rounded-lg " href="https://simari.ulm.ac.id/login/module.php/core/loginuserpass.php?AuthState=_ea94b6d9fa926cf07a63f79a911aafbc725d2e53d5%3Ahttps%3A%2F%2Fsimari.ulm.ac.id%2Flogin%2Fsaml2%2Fidp%2FSSOService.php%3Fspentityid%3Dhttps%253A%252F%252Fsimari.ulm.ac.id%252Fsaml%252Fmetadata%26cookieTime%3D1695968674%26RelayState%3Dhttps%253A%252F%252Fsimari.ulm.ac.id%252Fsaml"><span className="mx-6 text-center">Simari ULM</span></a>
                                <a className="bg-violet-400 text-white w-64 font-semibold rounded-lg " href=""><span className="mx-6 text-center">WEB FKIP ULM</span></a>
                                <a className="bg-violet-400 text-white w-64 font-semibold rounded-lg " href=""><span className="mx-6 text-center">WEB ULM</span> </a>
                                </div>
                            </div>
                    </div>

                    <div className="">
                        <h3></h3>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.2042635859357!2d114.58336167503097!3d-3.299552496675325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de423970d8e6f13%3A0x414e05913953224c!2sProdi%20Teknologi%20Pendidikan%20FKIP%20ULM!5e0!3m2!1sid!2sid!4v1695967245367!5m2!1sid!2sid" className='' width="400" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>


                </div>  

                <div className="text-center font-semibold text-violet-400">
                    <h3> &copy; {year} Teknologi Pendidikan FKIP - UNIVERSITAS LAMBUNG MANGKURAT</h3>
                </div>
            </div>
        </div>
    )
}
