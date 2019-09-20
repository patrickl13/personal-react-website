import React, { Component } from 'react';
import { AboutMe } from './components/aboutme/aboutme.component';
import {Education} from './components/classwork-list/classwork-list.component';
import {Project} from './components/projects-list/projects-list.component';
import { Experience } from './components/experience-list/experience-list.component';
import { Contact } from './components/contact/contact.component';
import { Blog } from './components/blog-list/blog-list.component';
import {NavigationBar} from './components/navbar/navbar.component';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();


    this.state = {
      classlist: [],
      education: [],
      projects: [],
      experience: [],
      posts: []
    };
  }

//when mounted, calls this block of code
  componentDidMount(){
    // const blogger_api = 'https://www.googleapis.com/blogger/v3/blogs/3736151271245725908/posts?key=AIzaSyD3C4Yz1PDo9F8GrlUvMhYFPxLdh8LVjm0';
    // fetch(blogger_api)
    // .then(response => "[" + response.json() + "]")
    // .then(post => this.setState({posts: post}));

    const connectClass = {host:'backend/classes', port:8080};
    const connectEducation = {host:'backend/education', port:8080};
    const connectProjects = {host:'backend/projects', port:8080};
    const connectExperience = {host:'backend/experience', port:8080};

    fetch(connectClass)
    .then(response => response.json())
    .then(classes => this.setState({classlist:classes}));

     fetch(connectEducation)
    .then(response => response.json())
    .then(schools => this.setState({education:schools}));

    fetch(connectProjects)
    .then(response => response.json())
    .then(item => this.setState({projects:item}));

    fetch(connectExperience)
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
           <Route exact path='/contact' component={Contact}/>

           <Route exact path='/blog' 
                 render={ () => 
                  (
                    <Blog posts = {this.state.posts} />
                  )}    
           />

        </React.Fragment>
      );
    }
  }

  


export default App;