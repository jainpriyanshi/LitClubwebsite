import React, { Component } from 'react'

export default class carousel extends Component {
  render() {
    return (
      <div class= "mt-4 col-lg-8 mx-auto ">
         <div className = "col-lg-2 position-relative " style={{ position : "relative"}}>
                       
                       </div>
      <div class = " mt-1 text-center position-relative" style={{ position : "relative"}} >
          <div  class="slide center " data-ride="carousel">
  <div class="carousel-inner center">
    <div class="carousel-item active center" data-interval="1000">
    <img src={process.env.PUBLIC_URL + '/images/img1.jpg'} class="d-block display-flex w-100" alt="..." />
    </div>
    <div class="carousel-item" data-interval="1000">
    <img src={process.env.PUBLIC_URL + '/images/img2.jpg'} class="d-block  display-flex w-100" alt="..." />
    </div>
    <div class="carousel-item" data-interval="1000">
    <img src={process.env.PUBLIC_URL + '/images/img3.jpg'} class="d-block display-flex w-100" alt="..." />
    </div>
  </div>

</div>
      </div>
      </div>
    )
  }
}
