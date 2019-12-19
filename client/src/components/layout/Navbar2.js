import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {Link} from "react-router-dom"; 
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div style={{display: "flex"}} >
       <AppBar position="static" style={{backgroundColor:"black",width:"100%", align:"left"}}>
        <Toolbar>
            <Typography variant="h6"  style={{textAlign:"left", fontFamily:'Roboto'}}>
            <Link to =  '/'>
            <Button style={{color:"white"}}>  Literature Club </Button>
            </Link>
          </Typography>
          <Typography variant="h6"  style={{marginLeft: "auto", fontFamily:'Roboto'}}>
            <b>Hey</b> {user.name.split(" ")[0]}
          </Typography>
          <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
                marginBottom : "1rem",
                marginRight: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light"
            >
              Logout
            </button>
            </Toolbar>
      </AppBar>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
