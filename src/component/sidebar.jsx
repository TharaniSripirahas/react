import React, { Component } from 'react'

export default class sidebar extends Component {
    render() {
        return (
            <div>
                <div className="wrapper">
    <div className="sidebar">
        <h2>DEFECT TRACKER</h2>
        <ul>
            <li><a href="#"><i className="fas fa-home"></i>Home</a></li>
            <li><a href="/project"><i className="fas fa-user"></i>Project</a></li>
            <li><a href="/defect"><i className="fas fa-address-card"></i>Defect</a></li>
            <li><a href="/empolyee"><i className="fas fa-project-diagram"></i>Employee</a></li>
          
        </ul> 
    </div>
</div>
            </div>
        )
    }
}
