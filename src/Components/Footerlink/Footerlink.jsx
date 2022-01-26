import React from 'react';
import './Footerlink.css';
import { Link } from 'react-router-dom';
const Footerlink=({phrase,link,toAddress})=>{
    return(
    <div className="footer-link">
        {phrase}
        <Link to ={toAddress} className="footer-link-element">
            {link}
        </Link>
    </div>
    );
}
export default Footerlink;