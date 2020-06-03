import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Toolbar from './components/Toolbar/Toolbar';
import SideMenu from './components/SideMenu/SideMenu';
import Backdrop from './components/Backdrop/Backdrop';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import Blog from './pages/Blog';
import BlogPage from './components/Blog/BlogPage';

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
            backdrop = <Backdrop click={this.backdropClickHandler}/>;
        }

        return (

            <div className="App" >
            <Toolbar menuClickHandler={this.sideMenuToggleClickHandler} />
                <SideMenu show={this.state.sideMenuOpen} />
                {backdrop}
                <main className="main" >
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route exact path='/blog' component={Blog}/>
                        <Route exact path='/blog/:id' component={BlogPage}/>
                    </Switch>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </div>
        );
    }
}

export default App;