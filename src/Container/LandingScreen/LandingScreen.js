import React from 'react';
import './LandingScreen.css';
import { Link } from 'react-router-dom';
import FoggyBackground from '../../Components/FoggyBackground';

const landing = ( props ) => {

    var iconsStyle;
    if (window.innerWidth > 750) {
        iconsStyle = {
            widht: 24+'px',
            height: 24+'px'
        }
    } else {
        iconsStyle = {
            widht: 18+'px',
            height: 18+'px'
        }
    }

    return (
        <div id="landingContainer">
            <FoggyBackground />
            <div className="controllers">
                <div id="lanlogo">
                    <img
                        id="logoImage"
                        src={require('../../assets/logo.png')} alt='Adr-logo' />
                </div>
                <Link to='/projects'>
                    <div className="control" id="menu">
                        <svg style={iconsStyle} viewBox="0 0 24 24">
                            <path fill="#000" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                        </svg>
                    </div>
                </Link>
                <Link to='/about'>
                    <div className="control" id="bottomArrow">
                        <svg style={iconsStyle} viewBox="0 0 24 24">
                            <path fill="#000" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                    </div>
                </Link>
                <Link to='/gallery'>
                    <div className="control" id="gallery">GALLERY</div>
                </Link>
            </div>
            <div id="container">
                {/* <Link to='/about'> */}
                    <div id="titleFrame">
                        <div id="title">Anthony De Rada</div>
                        <div id="subtitle">SOFTWARE ENGINEER</div>
                    </div>
                {/* </Link> */}
            </div>
        </div>
    );
};

export default landing;