import { Helmet } from 'react-helmet';
import 'swiper/css'

import { Swiper, SwiperSlide } from 'swiper/react';

import '../../public/js/main'


const Header = () => {


    const backgroundStyle = {
        backgroundImage: `url("/Image/Hero/hero_bg_2_1.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
  return (
    <>
    <div className="th-hero-wrapper hero-2" id="hero" style={backgroundStyle}>
      <div className="swiper th-slider" id="heroSlider2" data-slider-options='{"effect":"fade"}'>
        <Swiper
          cssMode='true'
          spaceBetween={30}
          slidesPerView={1}
          navigation={{ 
            prevEl: '.prev',
            nextEl: '.next'
           }}
        >
          {/* Repeat this block for each swiper slide */}
          <SwiperSlide>
            <div className="swiper-slide">
            <div className="hero-inner">
              <div className="container">
                <div className="hero-style2">
                  <span className="sub-title" data-ani="slideinup" data-ani-delay="0.2s">
                    <img src="Image/theme-img/title_icon.svg" alt="shape" />
                    100% Quality Foods
                  </span>
                  <h1 className="hero-title">
                    <span className="title1" data-ani="slideinup" data-ani-delay="0.4s">
                      Our Organic
                    </span>
                    <span className="title2" data-ani="slideinup" data-ani-delay="0.5s">
                      Collection.
                    </span>
                  </h1>
                  <div className="btn-group" data-ani="slideinup" data-ani-delay="0.7s">
                    <a href="shop.html" className="th-btn">
                      Shop Now
                      <i className="fas fa-chevrons-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="hero-img" data-ani="slidebottomright" data-ani-delay="0.1s">
                <img src="Image/Hero/hero_2_1.png" alt="Image" />
              </div>
              <div className="hero-shape1" data-ani="slideinup" data-ani-delay="0.7s">
                <img src="Image/Hero/hero_shape_1_1.png" alt="shape" />
              </div>
              <div className="hero-shape3" data-ani="slideinup" data-ani-delay="0.9s">
                <img src="Image/Hero/hero_shape_1_3.png" alt="shape" />
              </div>
              <div className="hero-shape4" data-ani="slidebottomright" data-ani-delay="0.5s">
                <img src="Image/Hero/hero_shape_2_1.png" alt="shape" />
              </div>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
            <div className="hero-inner">
              <div className="container">
                <div className="hero-style2">
                  <span
                    className="sub-title"
                    data-ani="slideinup"
                    data-ani-delay="0.2s"
                    ><img
                      src="Image/theme-img/title_icon.svg"
                      alt="shape"
                    />100% Quality Foods</span
                  >
                  <h1 className="hero-title">
                    <span
                      className="title1"
                      data-ani="slideinup"
                      data-ani-delay="0.4s"
                      >Our Organic</span
                    >
                    <span
                      className="title2"
                      data-ani="slideinup"
                      data-ani-delay="0.5s"
                      >Vegetable</span
                    >
                  </h1>
                  <div
                    className="btn-group"
                    data-ani="slideinup"
                    data-ani-delay="0.7s"
                  >
                    <a href="shop.html" className="th-btn"
                      >Shop Now<i className="fas fa-chevrons-right ms-2"></i
                    ></a>
                  </div>
                </div>
              </div>
              <div
                className="hero-img"
                data-ani="slidebottomright"
                data-ani-delay="0.1s"
              >
                <img src="Image/Hero/hero_2_2.png" alt="Image" />
              </div>
              <div
                className="hero-shape1"
                data-ani="slideinup"
                data-ani-delay="0.7s"
              >
                <img src="Image/Hero/hero_shape_1_1.png" alt="shape" />
              </div>
              <div
                className="hero-shape3"
                data-ani="slideinup"
                data-ani-delay="0.9s"
              >
                <img src="Image/Hero/hero_shape_1_3.png" alt="shape" />
              </div>
              <div
                className="hero-shape4"
                data-ani="slidebottomright"
                data-ani-delay="0.5s"
              >
                <img src="Image/Hero/hero_shape_2_1.png" alt="shape" />
              </div>
            </div>
            </div>
          </SwiperSlide> 
          <SwiperSlide>
            <div className="swiper-slide">
            <div className="hero-inner">
              <div className="container">
                <div className="hero-style2">
                  <span
                    className="sub-title"
                    data-ani="slideinup"
                    data-ani-delay="0.2s"
                    ><img
                      src="Image/theme-img/title_icon.svg"
                      alt="shape"
                    />100% Quality Foods</span
                  >
                  <h1 className="hero-title">
                    <span
                      className="title1"
                      data-ani="slideinup"
                      data-ani-delay="0.4s"
                      >Our Organic</span
                    >
                    <span
                      className="title2"
                      data-ani="slideinup"
                      data-ani-delay="0.5s"
                      >Vegetable</span
                    >
                  </h1>
                  <div
                    className="btn-group"
                    data-ani="slideinup"
                    data-ani-delay="0.7s"
                  >
                    <a href="shop.html" className="th-btn"
                      >Shop Now<i className="fas fa-chevrons-right ms-2"></i
                    ></a>
                  </div>
                </div>
              </div>
              <div
                className="hero-img"
                data-ani="slidebottomright"
                data-ani-delay="0.1s"
              >
                <img src="Image/Hero/hero_2_3.png" alt="Image" />
              </div>
              <div
                className="hero-shape1"
                data-ani="slideinup"
                data-ani-delay="0.7s"
              >
                <img src="Image/Hero/hero_shape_1_1.png" alt="shape" />
              </div>
              <div
                className="hero-shape3"
                data-ani="slideinup"
                data-ani-delay="0.9s"
              >
                <img src="Image/Hero/hero_shape_1_3.png" alt="shape" />
              </div>
              <div
                className="hero-shape4"
                data-ani="slidebottomright"
                data-ani-delay="0.5s"
              >
                <img src="Image/Hero/hero_shape_2_1.png" alt="shape" />
              </div>
            </div>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
      <div className="icon-box">
        <button data-slider-prev="#heroSlider2" className="slider-arrow default prev">
          <i className="far fa-arrow-left"></i>
        </button>
        <button data-slider-next="#heroSlider2" className="slider-arrow default next">
          <i className="far fa-arrow-right"></i>
        </button>
      </div>
    </div>

    <Helmet>
      <script src="/public/js/main.js" type='text/javascript'></script>
    </Helmet>
    </>
  )
}

export default Header