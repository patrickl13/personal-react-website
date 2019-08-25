import React, { Component } from 'react';
import { NavigationBar } from './components/navbar/navbar.component';
import { Info } from './components/aboutme/aboutme.component';
import { Banner } from './components/banner/banner.component';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Banner />
        <Info />
      </React.Fragment>
      
      
    );
  }
}

export default App;