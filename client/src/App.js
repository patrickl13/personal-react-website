import React, { Component } from 'react';
import { AboutMe } from './components/aboutme/aboutme.component';
import {Education} from './components/classwork-list/classwork-list.component';
import {Project} from './components/projects-list/projects-list.component';
import { Experience } from './components/experience-list/experience-list.component';
import { Contact } from './components/contact/contact.component';
import {NavigationBar} from './components/navbar/navbar.component';
import { Route } from 'react-router-dom';
import classes from './data/classes.json';
import education from './data/education.json';
import experience from './data/experience.json';
import projects from './data/projects.json';

class App extends Component {
  constructor() {
    super();


    this.state = {
      classlist: classes,
      education: education,
      projects: projects,
      experience: experience,
    };
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
           <Route exact path='/contact' component={Contact}/>

        </React.Fragment>
      );
    }
  }

export default App;