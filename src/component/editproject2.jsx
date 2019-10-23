import React, { Component } from 'react';
import axios from 'axios';
import '../App.css'
import '../component/editproject.css'

export default class editproject2 extends Component {
  state = {Data:[],
    projectName:'',
    projectDescription:'',
  }

    render() {
      console.log(this.state)
        return (

<div className="editpro">     
<div className="editpro">
    <div className= "editpro">
  <form>
        <label htmlFor="Name">Projecttt Name</label>
        <input type="text" id="name" name="pname" placeholder="Project Name.." onChange={this.handleChange} value={this.state.projectName}></input>

    <label htmlFor="Name"> Project Description</label>
    <input type="text" name="message" rows="10" cols="80" onChange={this.handleChange2} value={this.state.projectDescription}/>

    <input type="submit" value="Submit" onClick={this.handleAdd}/>
    
  </form>
</div>
</div>
</div>
        )
    }

}