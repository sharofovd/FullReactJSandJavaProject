import React from 'react';
import { delAuthToken } from "../utils/token";
import "./Logout.css";

const Logout = () => {
    const handleLogout = () => delAuthToken();
    return (
        <form className="logout" onSubmit={handleLogout}>
            <p style={{color:'#8d0ada',fontSize:"1.2rem"}}>Good-bye, user!</p>
            <button className="logout_button">Logout</button>
        </form>
    )
}

export default Logout;