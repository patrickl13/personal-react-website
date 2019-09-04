import React, { Component } from 'react';
import { AboutMe } from './components/aboutme/aboutme.component';
import {CardList} from './components/classwork-list/classwork-list.component';
import {NavigationBar} from './components/navbar/navbar.component';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      classlist: []
    };
  }

//when mounted, calls this block of code
  componentDidMount(){
    fetch('http://localhost:8080/classes')
    .then(response => response.json())
    .then(classes => this.setState({classlist:classes}));
  }


  

    render() {
      return (
        <React.Fragment>
          <NavigationBar />
          <Route exact path='/' component={AboutMe}/>
          <Route exact path='/education' component= {CardList} render={classlist = this.state.classlist}/>
          
        </React.Fragment>
      );
    }
  }

  


export default App;