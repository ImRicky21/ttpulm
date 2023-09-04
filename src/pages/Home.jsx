import ProfileTP from "../components/ProfileTP";
// import AOS from 'aos'
import 'aos/dist/aos.css'
import { Component,  } from "react";
import UserList from "../components/UserList";
import WaveDown from "../components/WaveDown";
import WaveUp from "../components/WaveUp";
import JumlahMahasiswa from "../components/JumlahMahasiswa";
import getUserData from "./Data";
import SistemInformasi from "../components/SistemInformasi";
import VisiKeilmuan from "../components/VisiKeilmuan";


export default class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            users : getUserData()
        }    
    }
    
    render(){
        return(
            <div className="flex flex-col justify-center">
               <ProfileTP className="my-12 py-4"/>               
                   <WaveUp className="mb-0" data-aos="fade-up"/>
                   <div className=" bg-violet-400">                      
                       <JumlahMahasiswa/>
                   </div>
                   <WaveDown className="mt-0"/>   
                <div className="">
                    <UserList
                    users = {this.state.users}/>
               </div>   
               <div>
                   <WaveUp/>
               </div>
                   <SistemInformasi/>
                   <WaveDown className="mt-0"/>   
                    <VisiKeilmuan/>
              
   
            </div>
       )
    }
    
}