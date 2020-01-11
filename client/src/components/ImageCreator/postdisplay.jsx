import React, { Component } from 'react'
import "./display.css";
import {Link} from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import openSocket from 'socket.io-client';
import { Typography } from '@material-ui/core';
const socket = openSocket('localhost:4000');

class postdisplay extends Component {
    state = {
         post_array: []
    };
        getData = (e) => {
        this.setState({post_array: e });

       }
        changeData = () =>{
         console.log("changeddata");
         socket.emit("initial_data");
        
        }
        updateLikes = (e,id) =>
        {   
            e.preventDefault();
            
            const data= { id: id , user: this.props.auth.user.email.split("@")[0]};
            
            socket.emit("update_likes" , data);
        } 
        componentDidMount() {
            socket.emit("initial_data");
           socket.on("get_data", this.getData);
           socket.on("change_data", this.changeData);
          }
          componentWillUnmount() {
           socket.off("get_data");
           socket.off("change_data");
         }
         fetch_Post() {
            var badgelist="";
            var badgeItems=[];
             return this.state.post_array.map(Post =>{

                badgelist = Post.postBadge.split(",");
                badgeItems = badgelist.map((badge) =>
                  <p class="badge badge-info badge-pill mt-0 mb-0 mr-1 ml-1" style={{color:"black"}}> {badge}</p>
                  );
              return (
                  
                <div key= {Post._id}className="col-lg-12">
                 <div style = {{ flexDirection:"column", paddingBottom: "30px", paddingTop:"0px"}} > 
                <div className="card " >
                <img src={process.env.PUBLIC_URL + '/avatar.png'} class="avatar text-center rounded float-left float-bottom" alt="..." />
                <div class = "profiletext text-center"> 
                <b><span > {Post.author}
                </span> </b>
                </div>
                
                 
                <div className="card ">
                <div className="imgbg text-center">
                    <img className ="imgsz"
                    src={process.env.PUBLIC_URL + '/black.png'} 
                    alt="black background" />
                </div>
                
                <div className = "imgtext">
                    
                    <div className="content text-center" >
                        <b><pre style ={{fontSize : this.props.textformat , color: "white"}} > {Post.posttext} </pre>
                        </b>
                    </div> 
                
                    <div >
                    <img className ="imglogo"
                    src={process.env.PUBLIC_URL + '/iitjlogo.png'} 
                    alt="logo" />
                    </div>
                  

                </div>
                </div>
               
                <div class="ml-3">
               <FavoriteBorderIcon onClick={(event)=> {this.updateLikes(event, Post._id)}}></FavoriteBorderIcon>
                </div>
                
                <b  class="ml-3 mt -1"> {Post.likes} likes </b>
                <div className="mt-1" style={{fontFamily:"inherit",marginLeft:"8px"}}>
                    {badgeItems}
                </div>
                <div className = "mt-1" style={{fontFamily:"inherit",marginLeft:"12px"}} >
                   <p> {Post.postCaption }</p> 
                </div>
                </div>
                </div>
            </div>
            
               
              )});
           }
    render() {
        return (
            <div class="background">
            <div class ="row ">
                <div className="col-lg-2"></div>
            <div className=" col-lg-5">
                {this.fetch_Post()}
                
            </div>
            <div className="col-lg-3" > 
            <div className ="card conatiner">
            <Link to =  '/template'>
            <Typography variant="h6"  style={{textAlign:"left", color: "black" , fontFamily:'Roboto'}}>
               Add Post 
          </Typography>
           
          </Link>
             </div>
             </div>
            </div>
            </div>
        )
    };
}

postdisplay.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps
  )(postdisplay);
  