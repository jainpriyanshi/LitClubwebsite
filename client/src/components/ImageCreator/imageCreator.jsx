import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SetText from "./setText";
import Displayimg from "./displayimg";

class imageCreator extends Component {
    state = {
        text: "Enter text",
        textsize: 30,
        user : this.props.auth,
        badge: "badge",
        caption: "caption",
    }
    

    onChangetext = (e) => {
        this.setState({ text: e.target.value });
        console.log(this.state);
    }
    onChangebadge = (e) => {
        this.setState({ badge: e.target.value });
    }
    onChangecaption = (e) => {
        this.setState({ caption: e.target.value });
        console.log(this.state);
    }
    onChangesize = (e) => {
        this.setState({ textsize: e.target.value });
        return " " + this.state.textsize;
    }
    render() {
        this.state.user=this.props.auth;
        return (
            <div className = 'container py-5'>
                <div className = "row">
                    <div className = "col-lg-4">
                       <Displayimg display = {this.state} textformat={this.onChangesize}/>
                    </div>
                    <div className = "col-lg-2" style={{ position : "relative"}}>
                       
                    </div>
                     <div className = "col-lg-4" style={{ position : "relative"}}>
                       < SetText changetext = {this.onChangetext} changesize={this.onChangesize} changebadge={this.onChangebadge} changecaption={ this.onChangecaption}/>
                    </div>
                </div>
               
              
            </div>
        )
    }
}

imageCreator.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
  )(imageCreator);