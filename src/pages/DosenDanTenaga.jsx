import { Component } from "react";
import getUserData from "./Data";
import UserList from "../components/UserList";

export default class DosenDanTenaga extends Component{
    constructor(props){
        super(props)
        this.state={
            users: getUserData(),
        }
    }
    render(){
        return(
            <div className="py-7">
                    <UserList
                    users = {this.state.users}
                    data-aos="fade-up" data-aos-duration="3000"/>
               </div>   
        )
    }
}