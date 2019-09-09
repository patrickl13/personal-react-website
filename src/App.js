import React, { Component } from 'react';
import { AboutMe } from './components/aboutme/aboutme.component';
import {Education} from './components/classwork-list/classwork-list.component';
import {Project} from './components/projects-list/projects-list.component';
import { Experience } from './components/experience-list/experience-list.component';
import {NavigationBar} from './components/navbar/navbar.component';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();


    this.state = {
      classlist: [],
      education: [],
      projects: [],
      experience: []
    };
  }

//when mounted, calls this block of code
  componentDidMount(){

    fetch('http://localhost:8080/classes')
    .then(response => response.json())
    .then(classes => this.setState({classlist:classes}));

     fetch('http://localhost:8080/education')
    .then(response => response.json())
    .then(schools => this.setState({education:schools}));

    fetch('http://localhost:8080/projects')
    .then(response => response.json())
    .then(item => this.setState({projects:item}));

    fetch('http://localhost:8080/experience')
    .then(response => response.json())
    .then(item => this.setState({experience:item}));
  }

    render() {
      return (
        <React.Fragment>
          <NavigationBar />
          <Route exact path='/' component={AboutMe}/>
          <Route exact path='/education' 
                 render={ () => 
                  (
                    <Education classlist = {this.state.classlist} education = {this.state.education} />
                  )}    
           />
           <Route exact path='/projects' 
                 render={ () => 
                  (
                    <Project projects = {this.state.projects} />
                  )}    
           />
            <Route exact path='/experience' 
                 render={ () => 
                  (
                    <Experience experience = {this.state.experience} />
                  )}    
           />
          
        </React.Fragment>
      );
    }
  }

  


export default App;