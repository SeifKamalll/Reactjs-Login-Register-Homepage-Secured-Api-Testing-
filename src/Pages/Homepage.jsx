import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Homepage() {
    const navigate = useNavigate()

    const [user, setuser] = useState();

    let url = "http://82.112.241.233:1993/api/users/me"


    useEffect(() => {
        let token = sessionStorage.getItem("token") || localStorage.getItem("token")
        !token && navigate("/login")

        axios.get(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => {
            setuser(res.data)
        }).catch((err) => {
            console.log(err)
        })

    }, [])

    const logout = () => {
        sessionStorage.removeItem("token")
        localStorage.removeItem("token")
        Navigate("/login")
    }
    return (

        <div className="w-full flex flex-col items-center text-black">
            <div className="h-[50px] container flex bg-primary justify-between items-center p-3 text-xl">
                <div className="">The Logo</div>
                <button onClick={logout} className="btn btn-error">Log Out</button>
                <div className="flex justify-center items-center gap-2">
                    <div>Facebook</div>
                    <div>Instagram</div>
                </div>
            </div>
            <h1 className="p-4 text-3xl text-orange-400">Welocome : {user?.username}</h1>
            <Outlet />
        </div>

    )
}
