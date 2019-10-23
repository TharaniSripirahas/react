import React, { Component } from 'react';
import Axios from 'axios';
import '../App.css'

export default class defect extends Component {
  state = {Data:[],
    projectName:'',
    projectDescription:'',
  }
  handleChange=(e)=>{
    // console.log(e.target.value)
    this.setState({ projectName:e.target.value  });
  }

  handleChange2=(a)=>{
    // console.log(a.target.value);
    this.setState({ projectDescription: a.target.value });
  }


  handleAdd=(e)=>{
    //stop reloading
    e.preventDefault()
    Axios.post('http://localhost:8080/defectTracker/api/p1/project',{projectName:this.state.projectName, projectDescription:this.state.projectDescription})

    this.setState({projectName : '', projectDescription:'' });
  }

componentDidMount() {
  Axios.get('http://localhost:8080/defectTracker/api/p1/project')
  .then(result => {
    // console.log(result)
    this.setState({ Data:result.data  });

  })
  // console.log(this.state.projectName)
}



    render() {
      console.log(this.state)
        return (

<div className="wrapper">     
<div className="main_content">
    <div className= "header">
  <form>
        <label htmlFor="Name">Defect</label>
        <input type="text" id="name" name="pname" placeholder="Defect Name.." onChange={this.handleChange} value={this.state.projectName}></input>

   

    {/* <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea> */}

    {/* <form action="/action_page.php"> */}

    <label htmlFor="Name">  Defect Discription</label>
    <input type="text" name="message" rows="10" cols="80" onChange={this.handleChange2} value={this.state.projectDescription}/>
   
    <label htmlFor="Name"> Priority</label>
    <input type="text" name="message" rows="10" cols="80" onChange={this.handleChange2} value={this.state.projectDescription}/>

    

   
    <label htmlFor="Name"> Severity</label>
    <input type="text" name="message" rows="10" cols="80" onChange={this.handleChange2} value={this.state.projectDescription}/>
   

    
    <label htmlFor="Name"> Project</label>
    <input type="text" name="message" rows="10" cols="80" onChange={this.handleChange2} value={this.state.projectDescription}/>
  
    <input type="submit" value="Submit" onClick={this.handleAdd}/>
    
  </form>
  <div classNam="table-wrapper">
    <table className="fl-table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>

      </thead>
      <tbody>
      {
        this.state.Data.map(d=>{
          return(
            <tr key={d.id}>
              <td>{d.projectName}</td>
              <td>{d.projectDescription}</td>
              <td><input type="button" value="Delete"/></td>
            </tr>
          )
        })
      
      }

      </tbody>


    </table>
    </div>


  </div>
</div>



</div>
        )
    }
}

