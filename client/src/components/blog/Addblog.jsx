import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";

import openSocket from 'socket.io-client';
const socket = openSocket('localhost:4000');

class Addblog extends Component {
    state = {
        text: "",
        title: "",
        name : this.props.auth.user.name,
        ldap: this.props.auth.user.email.split("@")[0],
        badge: "",
        summary: "",
    }
    
    onClick= () => {
        this.setState({ name: this.props.auth.user.name });
        this.setState({ email: this.props.auth.user.email});
        socket.emit('post_blog', this.state);
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
        console.log(this.state);
    }; 
    render() {
        return (
            <div className= 'card container bg-light'>
                <br/> 
                <h3> <b> Add Blog </b></h3>
                <br />
               
                <input type= "text" 
                placeholder = "Enter Blog Title"
                value={this.state.title}
                id="title"
                onChange={this.onChange} />
                <br/> 
                <input type= "text" 
                 placeholder = "Enter Summary"
                value={this.state.summary}
                id="summary"
                onChange={this.onChange} />
                <br/> 
                <textarea 
                 placeholder = "Enter Blog Text"
                className ="md-textarea form-control" rows="7"
                value={this.state.text}
                id="text"
                onChange={this.onChange} />
                <br />    
                <input type= "text" 
                placeholder = "Enter Badges separated by comma"
                value={this.state.badge}
                id="badge"
                onChange={this.onChange} />
                <button 
                style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    marginBottom : "1rem",
                    marginRight: "1rem",  
                }}
                onClick = {this.onClick}
                className=" text-center btn btn-large waves-effect waves-light" 
                >
                Submit 
                </button>
            </div>
        )
    }
}

Addblog.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
  )(Addblog);