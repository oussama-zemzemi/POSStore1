import React from 'react'
import About from './About'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/assets/images/home/POS-Banner.png" className="d-block w-100" alt="POS-Banner" height="700px" />
          </div>
          <div className="carousel-item">
            <img src="/assets/images/home/pos-banner_b47a23212993aeff22e36c2a7aec76dc.jpg" className="d-block w-100" alt="pos-banner_b47a23212993aeff22e36c2a7aec76dc" height="700px" />
          </div>
          <div className="carousel-item">
            <img src="/assets/images/home/EDM62INUYAU1h3l.jpg" className="d-block w-100" alt="EDM62INUYAU1h3l" height="700px" />
          </div>
          
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <About/>
      <Contact/>
    </div>
  )
}

export default Home
