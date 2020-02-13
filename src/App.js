import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideMenu from './components/SideMenu/SideMenu';
import Backdrop from './components/Backdrop/Backdrop';
import Greeting from './components/Greeting/Greeting';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab} from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './App.scss';

library.add(fab);
library.add(fas);

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
            backdrop = < Backdrop click={this.backdropClickHandler}
            />;
        }
        return (

            <div className="App" >
                    <Toolbar menuClickHandler={this.sideMenuToggleClickHandler} />
                    < SideMenu show={this.state.sideMenuOpen} />
                    {backdrop}
                

                <main className="main" >
                    <div className="main-center">
                        <div className='section'>
                            <Greeting />
                        </div>
                        <div className='section'>
                            <About />
                        </div>
                        <div className='divider'></div>
                        <div className='section'>
                            <Projects />
                        </div>

                        <div className='divider'></div>
                        <div className='section'>
                            <Contact />
                        </div>
                        <div className='divider'></div>
                    </div>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        );
    }
}

export default App;