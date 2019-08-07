import React from 'react';
import HomeIcon from '../images/home.png';
import AboutIcon from '../images/information.png';
import ResumeIcon from '../images/newspaper-variant.png';

function IconButton(props) {
  return (
    <div className='icon_button' style={props.iconStyle} onClick={props.onClick}>
      {props.image_src &&
        <img src={props.image_src} alt='icon_button' />
      }
    </div>
  );
}

const homeStyle = {
  top: '28px',
  left: '28px',
};
function HomeButton(props) {
  return (
    <IconButton image_src={HomeIcon} iconStyle={homeStyle} onClick={props.onClick}/>
  );
}

const aboutStyle = {
  left: '50%',
  bottom: '28px',
  transform: 'translateX(-50%)',
}
function AboutButton(props) {
  return (
    <IconButton image_src={AboutIcon} iconStyle={aboutStyle} onClick={props.onClick}/>
  );
}

const resumeStyle = {
  top: '28px',
  right: '28px',
}
function ResumeButton(props) {
  return (
    <IconButton image_src={ResumeIcon} iconStyle={resumeStyle} onClick={props.onClick}/>
  );
}

export { HomeButton, AboutButton, ResumeButton };