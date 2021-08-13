import React from "react"
import Slider from "react-slick"
import './Carousel.scss'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Capa from '../../static/assets/Trip-capa.jpg'
import Pag1 from '../../static/assets/Trip1.jpg'
import Pag2 from '../../static/assets/Trip2.jpg'
import Pag3 from '../../static/assets/Trip3.jpg'
import Pag4 from '../../static/assets/Trip4.jpg'
import Pag5 from '../../static/assets/Trip5.jpg'
import Pag6 from '../../static/assets/Trip6.jpg'
import Pag7 from '../../static/assets/Trip7.jpg'
import Pag8 from '../../static/assets/Trip8.jpg'

const Carousel = () => {
  const settings = {
    className: "slider variable-width",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    speed: 500,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 440,
        settings: {
          variableWidth: false,
          centerMode: false,
        }
      }
    ]
  };

  return (
    <section className="carousel-wrapper">
        <Slider {...settings}>
          <div>
            <div
              className="car-items-wrapper"
              style={{
                backgroundImage: `url(${Capa})`
              }}
              alt="pages from zine"
            >
            </div>
          </div>
          <div>
            <div
              className="car-items-wrapper"
              style={{
                backgroundImage: `url(${Pag1})`
              }}
              alt="pages from zine"
            >
            </div>
          </div>
          <div>
            <div
              className="car-items-wrapper"
              style={{
                backgroundImage: `url(${Pag2})`
              }}
              alt="pages from zine"
            >
            </div>
          </div>
          <div>
            <div
              className="car-items-wrapper"
              style={{
                backgroundImage: `url(${Pag3})`
              }}
              alt="pages from zine"
            >
            </div>
          </div>
          <div>
            <div
              className="car-items-wrapper"
              style={{
                backgroundImage: `url(${Pag4})`
              }}
              alt="pages from zine"
            >
            </div>
          </div>
          <div>
            <div
              className="car-items-wrapper"
              style={{
                backgroundImage: `url(${Pag5})`
              }}
              alt="pages from zine"
            >
            </div>
          </div>
          <div>
            <div
              className="car-items-wrapper"
              style={{
                backgroundImage: `url(${Pag6})`
              }}
              alt="pages from zine"
            >
            </div>
          </div>
          <div>
            <div
              className="car-items-wrapper"
              style={{
                backgroundImage: `url(${Pag7})`
              }}
              alt="pages from zine"
            >
            </div>
          </div>
          <div>
            <div
              className="car-items-wrapper"
              style={{
                backgroundImage: `url(${Pag8})`
              }}
              alt="pages from zine"
            >
            </div>
          </div>
        </Slider>
    </section>
  )
}

export default Carousel
