import { LOGO_URL } from "../config/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../config/useOnlineStatus";

const Header=()=>{

    const [accessbtn,setaccessbtn]=useState("Login")  
    const onlineStatus=useOnlineStatus()
    return (
        <div className="flex  justify-between items-center m-2  shadow-lg ">
            <div>
                <img className="w-24" src={LOGO_URL} alt="Image not found" />
            </div>
            <div>
                <ul className="flex">
                <li className="p-2">Online Status:{onlineStatus?"✅":"🚩"}</li>
                    <li className="p-2"><Link to="/">Home</Link></li>
                    <li className="p-2"><Link to="/about">About Us</Link></li>
                    <li className="p-2"><Link to="/contact">Contact Us</Link></li>
                    <li className="p-2"><Link to="/grocery">Grocery</Link></li>
                    <li className="p-2">Cart</li>
                    <button className="p-2 mr-2 border-solid  border-black border-1 bg-slate-400"  onClick={()=>{
                        accessbtn=="Login" ?setaccessbtn("Logout"):setaccessbtn("Login")
                    }}>{accessbtn}</button>
                </ul>
            </div>

        </div>
    )

}

export default Header




