import React, { Component } from 'react'
import "./readblog.css"
import {Paper} from "@material-ui/core"
import openSocket from 'socket.io-client';
const socket = openSocket('localhost:4000');

export default class Readblog extends Component {
    updateBlogLikes = (e,id) =>
        {   
            e.preventDefault();
            this.props.history.push("/posts");
            const data= { id: id , user: this.props.auth.user.email.split("@")[0]};
            console.log(data);
            socket.emit("update_blog_likes" , data);
        } 
    componentDidMount() {
        console.log(this.props);
      }
    render() {
        var badgelist = this.props.location.state.Blog.postBadge.split(",");
        var badgeItems = badgelist.map((badge) =>
                  <p class="badge badge-info badge-pill  mt-0 mb-0 mr-1 ml-1" style={{color:"black"}}> {badge}</p>
                  );
        return (
               <div >
                   <div>
                    <img src={process.env.PUBLIC_URL + 'blog.png'} class="img" alt="..."  />
                    < br/> < br/>< br/> <br/> 
                    
                    <div className= 'card cardTitle container'  style={{ marginTop: "45px"}}>
                    
                    <h1  class="title" style={{marginTop: "50px"}} > {this.props.location.state.Blog.postTitle} </h1> 
                        <br/>
                        <div class ="center" style={{marginBottom : "50px"}}> <div class="summary"style= {{  fontSize:"18px"}}> 
                        {this.props.location.state.Blog.postSummary}
                        </div>
                        <div  style={{ marginLeft : "60px" , marginRight: "60px" , marginTop: "20px" }}>
                      {badgeItems}
                      </div>
                        </div>
                    </div>
                    </div>
            <div className ="row" style={{ position : "absolute"}} >
                <div className = "col-lg-3" style={{ position : "relative", marginLeft: "10px"}} >
                      <b> 
                          <p style = {{marginTop : "210px" , marginLeft : "60px", marginRight: "60px", fontSize:"20px", fontFamily:"Times New Roman" }}> {this.props.location.state.Blog.author} </p> 
                      </b> 
                      <div style = {{ marginLeft : "10px" , color :"grey "  , marginLeft : "60px" , marginRight: "60px"}} class="sidesummary">
                      <i > {this.props.location.state.Blog.postSummary}</i>
                      </div >
                      <div  style={{ marginLeft : "60px" , marginRight: "60px" , marginTop: "20px" }}>
                      {badgeItems}
                      </div>
                      
                      <br/>
                </div>
                
            <div className=" col-lg-6" style={{ position : "relative"}}>
                
                <br/>
               
                
                <br/>
                <br/>
                <div style={{whiteSpace: "pre-wrap"}} class="root p"> {this.props.location.state.Blog.postText} </div>
                
            </div>
            </div>
            </div>
        )
    }
}
