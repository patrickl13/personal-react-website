import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideMenu from './components/SideMenu/SideMenu';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {

  state = {
    sideMenuOpen: false
  }

  //takes in previous state and reverses its bool value
  sideMenuToggleClickHandler = () => {
    this.setState((prevState)=>{
      return {sideMenuOpen: !prevState.sideMenuOpen};
    })
  };
  
  backdropClickHandler = () => {
    this.setState({sideMenuOpen: false});
  };

  render() {
    let sideMenu;
    let backdrop;

    if(this.state.sideMenuOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }
    return (
      <div style={{height: '100%'}}>
        <Toolbar menuClickHandler={this.sideMenuToggleClickHandler}/>
        <SideMenu show={this.state.sideMenuOpen}/>
        {backdrop}
        </div>
    );
  }
}

export default App;