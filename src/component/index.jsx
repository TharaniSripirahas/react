import React, { Component } from 'react'
import Header from './header.jsx'
import Footer from './footer.jsx'
import Sidebar from './sidebar.jsx'
import Project from './project.jsx'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import './style.css'
import './header.css'
import defect from './defect.jsx'
import empolyee from './empolyee.jsx'
import editProject from './editproject'

class index extends Component {
    render() {
        return (
            <div>
              
                <Sidebar />
               <Header />
           <BrowserRouter>
           <Switch>
           <Route path='/project' component={Project}/>  
           <Route path='/defect' component={defect}/>
           <Route path='/empolyee' component={empolyee}/>
           <Route path='/editProject/:id' component={editProject}/>
           
                </Switch>
               </BrowserRouter>    
            </div>

            
        )
    }
}
export default index;