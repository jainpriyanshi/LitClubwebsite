import React, { Component } from 'react'
import "./display.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:4000');

class postdisplay extends Component {
    state = {
         post_array: []
    };
        getData = (e) => {
        this.setState({post_array: e });
        console.log(this.state.post_array);
       }
        changeData = () =>{
         console.log("changeddata");
         socket.emit("initial_data");
        
        }
        updateLikes = (e,id) =>
        {   
            e.preventDefault();
            console.log("post liked");
            const data= { id: id , user: this.props.auth.user.email.split("@")[0]};
            console.log(data);
            socket.emit("update_likes" , data);
        } 
        componentDidMount() {
            socket.emit("initial_data");
           socket.on("get_data", this.getData);
           socket.on("change_data", this.changeData);
           console.log("hii")
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
                  <p class="badge badge-success badge-pill mt-0 mb-0 mr-1 ml-1" style={{color:"black"}}> {badge}</p>
                  );
              return (
                <div key= {Post._id}className="col-lg-4 mx-auto">
                    
                <div className="card ">
           
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
                <button type="button" class="btn btn-light button "
                onClick={(event)=> {this.updateLikes(event, Post._id)}} >
                <img src={process.env.PUBLIC_URL + '/heart.png'} class="heart rounded float-left float-bottom" alt="..." />
                </button>
                
                
                <span className = "liketext"> {Post.likes} likes </span>
                <div className="mt-1 ml-2">
                    {badgeItems}
                </div>
                <div className = "mt-1 ml-2">
                   <b> <p> {Post.postCaption }</p> </b>
                </div>
                </div>
          </div>
               
              )});
           }
    render() {
        return (
            <div>
                {this.fetch_Post()}
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
  