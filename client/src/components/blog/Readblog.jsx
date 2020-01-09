import React, { Component } from 'react'
import "./readblog.css"
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
                  <p class="badge badge-success badge-pill  mt-0 mb-0 mr-1 ml-1" style={{color:"black"}}> {badge}</p>
                  );
        return (
                
            <div className ="row">
                <img src={process.env.PUBLIC_URL + 'blog.jpg'} class="img" alt="..." />
                <div className = "col-lg-2" style= {{position: "fixed"}}>
                      <b> 
                          <p style = {{marginTop : "210px" , marginLeft : "10px"}}> {this.props.location.state.Blog.author} </p> 
                      </b> 
                      <div style = {{ marginLeft : "10px" , color :"grey "}}>
                      <i > {this.props.location.state.Blog.postSummary}</i>
                      </div>
                      {badgeItems}
                      <br/>
                      <button type="button"
                        onClick={(event)=> {this.updateBlogLikes(event, this.props.location.state.Blog._id)}} >
                        Like
                    </button>
                </div>
                <div className = "col-lg-2" style= {{position: "relative"}}>
                      
                </div>
            <div className=" col-lg-8" style={{ position : "relative"}}>
                
                <br/>
                <h1 class ="center" > {this.props.location.state.Blog.postTitle} </h1> 
                <br/>
                <h4 class ="center"> <i style= {{ color :"grey "}}> {this.props.location.state.Blog.postSummary}</i></h4>
                <br/>
                <br/>
                <div style={{whiteSpace: "pre-wrap"}}> {this.props.location.state.Blog.postText} </div>
            </div>
            </div>
        )
    }
}
