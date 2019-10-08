import React from 'react';
import {Link} from 'react-router-dom'

const ViewForensic = (props) => 
{
    var {crimeId} = props;
    var url = "/";
    return (
       
        <nav className="nav-wrapper grey darken-4 navbar">
            <div className="container">
                <b><a href="/" className="brand-logo">Thadam</a></b>
                <ul className = "right">
                <li><a href="/forensichome">Home</a></li>
                <li> <a href={url}> Logout </a></li>
                </ul>
                </div> 
        </nav>
        
    )
    
}


export default ViewForensic;