import React from 'react'
import '../index.css';
export default function Carousal() {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:'contain !important'}}>
      <div className="carousel-inner" id='carousel'>

        <div class="carousel-caption d-none d-md-block text-white " style={{zIndex:'50'}}>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success text-white" type="submit">Search</button>
          </form>
        </div>



        <div class="carousel-item active">
          <img src="https://source.unsplash.com/random/300×300/?Burger" class="d-block w-100" style={{filter:'brightness(30%'}}   alt="..." />
        </div>
        <div class="carousel-item">
          <img src="https://source.unsplash.com/random/300×300/?Pizza" class="d-block w-100" style={{filter:'brightness(30%'}} alt="..." />
        </div>
        <div class="carousel-item">
          <img src="https://source.unsplash.com/random/300×300/?pasta" class="d-block w-100" style={{filter:'brightness(30%'}} alt="..." />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  )
}
