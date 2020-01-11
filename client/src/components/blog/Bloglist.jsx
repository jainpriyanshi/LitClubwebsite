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


                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-lg-12 mx-auto" key= {Blog._id}>
                            <div class="jumbotron">
                            <h1 class="display-4">{Blog.postTitle}</h1>
                                <p class="lead">{Blog.postSummary}</p>
                                <div className="mt-1 ml-2">
                                {badgeItems}
                                </div>
                                <hr class="my-4"/>
                                <b><span > {Blog.author}</span> </b>
                                
                                <p class="lead">
                                <a class="btn btn-primary btn-lg" href="#" role="button">
                                <Link to={{
                                    pathname: '/readblog',
                                    state: {
                                            Blog: Blog
                                            }
                                }}>Read more</Link>
                                    </a>
                                </p>
                            </div>
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
Bloglist.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps
  )(Bloglist);
  