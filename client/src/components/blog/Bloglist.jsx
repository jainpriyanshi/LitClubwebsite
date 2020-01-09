import React, { Component } from 'react'
import PropTypes from "prop-types";
import {Link} from "react-router-dom"; 
import { connect } from "react-redux";
import openSocket from 'socket.io-client';
const socket = openSocket('localhost:4000');

class Bloglist extends Component {
    state = {
         blog_array: []
    };
        get_blog_Data = (e) => {
        this.setState({ blog_array: e });
        console.log(this.blog_array);

       }
        change_blog_Data = () =>{
         socket.emit("initial_blog_data");
         console.log("change_data")
        }
        
        componentDidMount() {
            socket.emit("initial_blog_data");
           socket.on("get_blog_data", this.get_blog_Data);
           socket.on("change_blog_data", this.change_blog_Data);
          }
          componentWillUnmount() {
           socket.off("get_blog_data");
           socket.off("change_blog_data");
         }
         fetch_Post() {
            var badgelist="";
            var badgeItems=[];
             return this.state.blog_array.map(Blog =>{

                badgelist = Blog.postBadge.split(",");
                badgeItems = badgelist.map((badge) =>
                  <p class="badge badge-success badge-pill mt-0 mb-0 mr-1 ml-1" style={{color:"black"}}> {badge}</p>
                  );
              return (
                <div key= {Blog._id}className="col-lg-6 mx-auto">
                    
                <div className="card ">
           
                <img src={process.env.PUBLIC_URL + '/avatar.png'} class="avatar text-center rounded float-left float-bottom" alt="..." />
               
                <div class = "profiletext text-center"> 
                <b><span > {Blog.author}
                </span> </b>
                </div>
                <br/>
                <h3 class="center"> {Blog.postTitle}</h3>
                <i class="center" style={{ color: "grey"}}> {Blog.postSummary} </i>
                <div className="mt-1 ml-2">
                    {badgeItems}
                </div>
                    <Link to={{
                    pathname: '/readblog',
                    state: {
                        Blog: Blog
                    }
                    }}>read more</Link>
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
Bloglist.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps
  )(Bloglist);
  