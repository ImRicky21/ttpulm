/* eslint-disable react/prop-types */
import user from '../assets/User.png'
import Blob from './Blob'
export default function UserCard({position, nidn, username}){
    return(
        <>
        <div className="rounded-xl my-9 mx-4 group">
            <div className="bg-slate-200 flex flex-col border text-center trasition ease-in duration-300 border-solid border-red-600 rounded-lg w-64 justify-center hover:shadow-2xl hover:relative hover:scale-110">   
                <div className='flex items-center align-middle justify-center'>
            {/* <BsFillPersonFill className="text-3xl h-72 text-center align-middle" data-aos="fade-up"/>    */}
            <img src={user} alt="profiles" className="absolute opacity-20 z-40 h-40"/>
                    <Blob />
                </div>
                <div className='transition ease-in opacity-0 group-hover:opacity-100 '>
                    <p className="text-black text-sm">{username}</p>
                    <p className="text-black">{position}</p>
                    <p className="text-black">{nidn}</p>
                </div>
            </div>

        </div>
        </>
    )

}