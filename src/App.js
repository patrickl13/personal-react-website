import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideMenu from './components/SideMenu/SideMenu';
import Backdrop from './components/Backdrop/Backdrop';
import Greeting from './components/Greeting/Greeting';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
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
            <div className='divider'></div>
            <Projects/>
            <div className='divider'></div>
            <Contact/>
            <div className='divider'></div>
            </main>
            <footer>
                <Footer/>
            </footer>
            </div>
        );
    }
}

export default App;