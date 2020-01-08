import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {Link} from "react-router-dom"; 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class Navbar2 extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div style={{display: "flex"}} >
       <AppBar position="static" style={{backgroundColor:"white",width:"100%", align:"left"}}>
        <Toolbar>
            <Typography variant="h6"  style={{textAlign:"left", fontFamily:'Roboto'}}>
            <Link to =  '/'>
            <Button style={{color:"black"}}>  Literature Club </Button>
            </Link>
          </Typography>
          <Typography variant="h6"  style={{marginLeft: "auto", color : "black" , fontFamily:'Roboto'}}>
            <b>Hey</b> {user.name.split(" ")[0]}  
          </Typography>
          <Link to =  '/template'>
            <Button style={{color:"black"}}>  AddPost </Button>
            </Link>
            <Link to =  '/posts'>
            <Button style={{color:"black"}}>  Posts </Button>
            </Link>
          <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
                marginBottom : "1rem",
                marginRight: "1rem",
                marginLeft: "1rem"
              }}
              onClick={this.onLogoutClick}
              class="btn btn-outline-danger">
            >
              Logout
            </button>
            </Toolbar>
      </AppBar>
      </div>
    );
  }
}

Navbar2.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar2);
