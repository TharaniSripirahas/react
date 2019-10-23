import React, { Component } from 'react';
export default class empolyee extends Component {
    render() {
        return (
        
<div className="wrapper">     
<div className="main_content">
    <div className= "header">
  <form action="/action_page.php">
  <label for="fname">EmpolyeeID </label>
        <input type="text" id="id" name="pid" placeholder="Empolyee ID.."></input>

        <label for="Name"> FirstName</label>
        <input type="text" id="name" name="fname" placeholder="Empolyee FirstName.."></input>

        <label for="Name"> LastName</label>
        <input type="text" id="name" name="lname" placeholder="Empolyee LastName.."></input>

        <label for="Name"> DateOfBirth</label>
        <input type="text" id="name" name="dofbirth" placeholder="DateofBirth.."></input>

        <label for="Name"> Project</label>
        <input type="text" id="name" name="proj" placeholder="Project.."></input>

   

    {/* <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea> */}

    {/* <form action="/action_page.php"> */}
   

    <input type="submit" value="Submit"></input>
    
  </form>
  </div>
</div>
</div>
        )
    }
}
