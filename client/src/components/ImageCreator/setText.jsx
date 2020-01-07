import React, { Component } from 'react'

export default class setText extends Component {
    render() {
        return (
            <div className= 'card bg-info container'>
                <br />
                <h3 className = "text-center" style={{ marginTop: "20px" }} > Enter Text </h3>
                <hr />
                <br />
                
                <textarea 
                className ="md-textarea form-control" rows="5"
                placeholder= "Enter Text"
                onChange={this.props.changetext} />
                <br />
                <br />
                <input type= "text" 
                placeholder= "Enter Caption"
                onChange={this.props.changecaption} />
                <br />
                <br />
                <input type= "text" 
                placeholder= "Enter Badges separated By comma"
                onChange={this.props.changebadge} />
                
                <button 
                style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    marginBottom : "1rem",
                    marginRight: "1rem",  
                }}
                onClick = {this.props.buttonclick}
                className=" text-center btn btn-large waves-effect waves-light" 
                >
                Submit 
                </button>
            </div>
        )
    }
}
