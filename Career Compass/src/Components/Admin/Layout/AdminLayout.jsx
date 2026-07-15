import { Outlet, useNavigate } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";
import AuthService from "../../../services/AuthService";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function AdminLayout(){

    const userType = AuthService.getUserType()
    const email = AuthService.getEmail()
    const nav = useNavigate()

    useEffect(()=>{
        if(email == null || !email && userType !== "admin"){
            toast.error("Unauthorized")
            nav("/login")
        }
    },[])
    
    return(
        <>
        <AdminHeader></AdminHeader>
        <Outlet></Outlet>
        <AdminFooter></AdminFooter>
        </>
    )
}