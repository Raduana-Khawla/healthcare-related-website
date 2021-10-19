import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';
import banner3 from '../../images/banner3.jpg';
import About from "../About/About";
import News from "../News/News";
import NotFound from "../NotFound/Notfound";
import Service from "../Service/Service";
import Services from "../Services/Services";

const Home=()=>{
    return(
   <>
       <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 h-75"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-75"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-75"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
   <About></About>
   <Services></Services>
   <News></News>
   <NotFound></NotFound>

   </>
    )
}

export default Home;