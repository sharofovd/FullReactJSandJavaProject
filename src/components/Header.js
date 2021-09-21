import React from 'react';
import './Header.css';
const Header = ({headers}) => {
        return (
                // container1  
                <div className="flex-container">
                    <p style={{color:"#0e1c4f"}}>{headers}</p>
                    {/* 
                    <button className="button">contact me</button>
                    <button className="button btn-big">contact me</button>
                    <button className="button btn-samll">learn more about me</button> */}
                </div>
             );
             };   
export default Header;