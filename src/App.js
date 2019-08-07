import React from 'react';
import './App.css';
import FoggyBackground from './Components/FoggyBackground';
import Homepage from './Components/Homepage';
import About from './Components/About';
import Resume from './Components/Resume';

import { HomeButton, ResumeButton, AboutButton } from './Components/Buttons';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.handleAboutClick = this.handleAboutClick.bind(this);
    this.handleResumeClick = this.handleResumeClick.bind(this);
    this.state = {currentPage: 'H'};
  }

  handleHomeClick() {
    this.setState({currentPage: 'H'});
  }

  handleAboutClick() {
    this.setState({currentPage: 'A'});
  }

  handleResumeClick() {
    this.setState({currentPage: 'R'});
  }

  render() {
    let foreground;
    switch (this.state.currentPage) {
      case 'H':
        foreground = <Homepage/>;
        break;
      case 'A':
        foreground = <About/>;
        break;
      case 'R':
        foreground = <Resume/>;
        break;
      default:
        foreground = <Homepage/>;
    }
    return (
      <div className="App">
        <HomeButton onClick={this.handleHomeClick}/>
        <ResumeButton onClick={this.handleResumeClick}/>
        <AboutButton onClick={this.handleAboutClick}/>
        <FoggyBackground />
        {foreground}
      </div>
    );
  }
}
