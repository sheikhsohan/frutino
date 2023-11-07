import {Swiper, SwiperSlide} from "swiper/react"

const Feedback = () => {
  return (
    <section className="overflow-hidden space" id="testi-sec">
  <div className="container">
    <div className="title-area text-center">
      <span className="sub-title">
        <img src="Image/theme-img/title_icon.svg" alt="Icon" />
        Testimonials
      </span>
      <h2 className="sec-title">Our Customer Feedback</h2>
    </div>
    <div className="testi-box-area" data-bg-src="assets/img/bg/testi_bg_2.png">
      <div className="testi-box-img">
        <img src="Image/testimonial/testi_2_1.jpg" alt="Image" />
      </div>
      <div className="testi-box-shape">
        <img src="Image/bg/testi_box_shape.png" alt="image" />
      </div>
      <div className="testi-box-slide">
        <div
          className="swiper th-slider"
          id="testiSlide2"
          data-slider-options='{"effect":"slide"}'
        >
          <Swiper
            cssMode={true}
            spaceBetween={50}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{ 
              delay: 2500,
              disableOnInteraction: false,
             }}
            navigation={{ 
                prevEl: '.prev',
                nextEl: '.next'
             }}
          >
            <SwiperSlide>
              <div className="testi-box">
                <p className="testi-box_text">
                  “Diversity is a cornerstone of our farming philosophy. We
                  carefully select a wide range of crops, ensuring a varied and
                  balanced ecosystem. This not only helps to naturally deter
                  pests and diseases but also promotes soil health by varying
                  the nutrient demands of different plants.”
                </p>
                <h3 className="testi-box_name">Angelina Margret</h3>
                <span className="testi-box_desig">Customer of Our Shop</span>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testi-box">
                <p className="testi-box_text">
                  “Diversity is a cornerstone of our farming philosophy. We
                  carefully select a wide range of crops, ensuring a varied and
                  balanced ecosystem. This not only helps to naturally deter
                  pests and diseases but also promotes soil health by varying
                  the nutrient demands of different plants.”
                </p>
                <h3 className="testi-box_name">Alexan Micelito</h3>
                <span className="testi-box_desig">Customer of Our Shop</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="testi-box_quote">
          <img src="Image/testimonial/quote_1.png" alt="Image" />
        </div>
        <div className="icon-box">
          <button
            data-slider-prev="#testiSlide2"
            className="slider-arrow default prev"
          >
            <i className="far fa-arrow-left" />
          </button>
          <button
            data-slider-next="#testiSlide2"
            className="slider-arrow default next"
          >
            <i className="far fa-arrow-right" />
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Feedback