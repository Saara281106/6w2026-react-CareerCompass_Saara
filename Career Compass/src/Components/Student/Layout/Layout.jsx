import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AuthService from "../../../services/AuthService";
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function Layout(){

    const userType = AuthService.getUserType()
    const email = AuthService.getEmail()
    const nav = useNavigate()

    useEffect(()=>{
        if(email !== null && userType !== "admin"){
            toast.error("Unauthorized")
            nav("/login")
        }
    },[])

    return(
        <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    )
}