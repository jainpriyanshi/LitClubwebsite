import React, { Component } from 'react'
import "./display.css";
export default class displayimg extends Component {
   
    render() {
        const badgelist = this.props.display.badge.split(",");
        const badgeItems = badgelist.map((badge) =>
            <p class="badge badge-success badge-pill mt-0 mb-0 mr-1 ml-1" style={{color:"black"}}> {badge}</p>
            );
        return (
            <div>
                <h1 class=" text-center "> Preview</h1>
            <div className="card ">
           
                <img src={process.env.PUBLIC_URL + '/avatar.png'} class="avatar text-center rounded float-left float-bottom" alt="..." />
               
                <div class = "profiletext text-center"> 
                <b><span > {this.props.display.name}
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
                        <b><pre style ={{fontSize : this.props.textformat , color: "white"}} > {this.props.display.text} </pre>
                        </b>
                    </div> 

                    <div >
                    <img className ="imglogo"
                    src={process.env.PUBLIC_URL + '/iitjlogo.png'} 
                    alt="logo" />
                    </div>

                </div>
                </div>
                <button type="button" class="btn btn-light button ">
                <img src={process.env.PUBLIC_URL + '/heart.png'} class="heart text-center rounded float-left float-bottom" alt="..." />
                </button>
                <div className="mt-1 ml-2">
                    {badgeItems}
                </div>
                <div className = "mt-1 ml-2">
                   <b> <p> {this.props.display.caption }</p> </b>
                </div>
                </div>
          </div>
        )
    }
}
