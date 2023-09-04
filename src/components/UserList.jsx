/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import UserCard from "./UserCard.jsx"

export default function UserList({users}) {
    
     if (users !== 3 ) {
        return(
            <div>
                <h1 className="text-center text-3xl mb-20 font-bold text-violet-400" data-aos="fade-up" data-aos-duration="1000" > - Dosen dan Tenaga Kependidikan - </h1>
            <div className="flex flex-wrap justify-center" data-aos="fade-up" data-aos-duration="3000">
                {users.map((user)=>(
                    <UserCard
                    user = {user.id}
                    position={user.position}
                    username={user.username}
                    nidn={user.nidn}
                    />
                    ))}
            </div>
        </div>
        )    
    }
}