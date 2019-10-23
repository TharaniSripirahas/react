import React, { Component } from 'react';
import axios from 'axios';
import '../component/editproject.css'

class editproject extends Component {
    state = {
        projectName: '',
        projectDescription: '',
        id: ''
    }
    componentDidMount() {
        const editId = this.props.match.params.id
        axios.get("http://localhost:8080/defectTracker/api/p1/project/")
            .then(result => {
                result.data.map(res => {
                    if (res.id == editId) {
                        this.setState({
                            id: res.id,
                            projectName: res.projectName,
                            projectDescription: res.projectDescription
                        });
                    }
                })
            });

            console.log(this.state)

    }

    handleChangepname1 = (event) => {
        this.setState({
            projectName: event.target.value
        });
    }

    handleChangepdes1 = (event) => {
        this.setState({
            projectDescription: event.target.value
        });
    }


    

    getToUpdate= (id) =>{
        this.props.history.push(`/update/${id}`);
        console.log(this.props.match.params.id);
    }
        
        
        render() {
        return (
            <div className="editpros">
                <form onSubmit={this.onSubmithanlde} >
                    <br/>
                    <br/>

                                <input type="text" name="pojectname" placeholder="Project Name*" value={this.state.projectName} onChange={this.handleChangepname1} />

                                <input type="text" name="projectdescription" placeholder="Project Description" value={this.state.projectDescription} onChange={this.handleChangepdes1} />

                                <th><input type="submit" value="Update" /></th>


                </form>
            </div>

);
}
}

export default editproject;