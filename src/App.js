import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideMenu from './components/SideMenu/SideMenu';
import Backdrop from './components/Backdrop/Backdrop';
import Greeting from './components/Greeting/Greeting';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import './App.scss';

class App extends Component {

    state = {
        sideMenuOpen: false
    }

    //takes in previous state and reverses its bool value
    sideMenuToggleClickHandler = () => {
        this.setState((prevState) => {
            return { sideMenuOpen: !prevState.sideMenuOpen };
        })
    };

    backdropClickHandler = () => {
        this.setState({ sideMenuOpen: false });
    };

    render() {
        let backdrop;

        if (this.state.sideMenuOpen) {
            backdrop = < Backdrop click = { this.backdropClickHandler }
            />;
        }
        return ( 
            
            <div className = "App" >
            <Toolbar menuClickHandler = { this.sideMenuToggleClickHandler }/> 
            < SideMenu show = { this.state.sideMenuOpen }/> 
            { backdrop } 
            <main className = "main" >
            <Greeting/>
            <About/>
            <Projects/>
            </main>
            </div>
        );
    }
}

export default App;