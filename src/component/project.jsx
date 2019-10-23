import React, { Component } from 'react';
import axios from 'axios';
import '../App.css'

export default class project extends Component {
  //datava store panni vaikkira idam than state
  state = { 
    Data:[], //backend la erunthu edutha datava store pani vaikiraku data enda state ka use panram
    projectName:'',
    projectDescription:'',
  }

x=()=>{

}

  handleChange=(e)=>{
    //input lairuntha value va eduthu projectName ikku set pannuram
    this.setState({ projectName:e.target.value  });
  }

  handleChange2=(a)=>{
    // console.log(a.target.value);
    this.setState({ projectDescription: a.target.value });
  }
  handleDelete = id => {
    //idya eduththu antha idla irukkira datava delete pannuthu
    axios.delete('http://localhost:8080/defectTracker/api/p1/project/' + id)
    //backend la irunthu reponse sa edukkuthu (postman)
        .then(res => {
            if (res.status === 200) {
                this.componentDidMount()
            }
        })
}

  handleAdd=(e)=>{
    //stop reloading (eg: submit button ah kudukeka vara reload or refresh ah nippaduraku  )
    e.preventDefault() 
    axios.post('http://localhost:8080/defectTracker/api/p1/project',{projectName:this.state.projectName, projectDescription:this.state.projectDescription})

    this.setState({projectName : '', projectDescription:'' });
  }
//cdm use pannuathu datava startlaya edukirathukku (componentDidMount la vara function ellam arampathulaye nadanthudum eg. niraya function eruku antha function la muthal componentDidMount than nadakum athuku pirakuthan matta function nadakum )
componentDidMount() {
  axios.get('http://localhost:8080/defectTracker/api/p1/project')
  .then(result => {
                     // ----> api la eruntha data va 8line la erukira data ku set pannuthu //edutha datava state la erukira dataku set pannuthu      
    this.setState({ Data:result.data  });
                    // mela erukira data

  })
  
}



    render() {
      // console la print pani pakkirakku
      console.log(this.state)
        return (

<div className="wrapper">     
<div className="main_content">
    <div className= "header">
  <form>
        <label htmlFor="Name">Project Name</label>
        <input type="text" id="name" name="pname" placeholder="Project Name.." onChange={this.handleChange} value={this.state.projectName}></input>

   

    {/* <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea> */}

    {/* <form action="/action_page.php"> */}
    <label htmlFor="Name"> Project Description</label>
    <input type="text" name="message" rows="10" cols="80" placeholder="Project Description.." onChange={this.handleChange2} value={this.state.projectDescription}/>

    <input type="submit" value="Submit" onClick={this.handleAdd}/> &nbsp;&nbsp; &nbsp;&nbsp;
    <input type="submit" value="Reset" />
    
  </form>

       
  <div className="table-wrapper">
    <table className="fl-table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>

      </thead>
      <tbody>
      {
        //id ,name, dec entha 3 ijum line 8 ka podurakku map use panram
        //project kka naanka kudukira detailas ah data base la erunthu eduthu tharuthu so project page la show akum
        this.state.Data.map(p=>{ 
          return(
            <tr key={p.id}>
              <td>{p.projectName}</td>
              <td>{p.projectDescription}</td>
              <td>  <a href={`/editProject/${p.id}`} > <input type="submit" value="Edit" /></a></td>
              <td><input type="submit" value="Delete" onClick={() => this.handleDelete(p.id)} /></td>

              
            </tr>)
        })}
        
      
      

      </tbody>

      


    </table>
    </div>
    

  </div>
</div>



</div>
        )
    }
}

