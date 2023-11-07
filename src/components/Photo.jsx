import React from 'react'

const Photo = () => {
  return (
    <>
    <div
      className="bg-top-center space-top"
      data-bg-src="Image/bg/gallery_bg_1.jpg"
    >
      <div className="container">
        <div
          className="row justify-content-lg-between justify-content-center align-items-end"
        >
          <div className="col-lg">
            <div className="title-area text-center text-lg-start">
              <span className="sub-title"
                ><img src="Image/theme-img/title_icon.svg" alt="Icon" />Our
                Photo Gallery</span
              >
              <h2 className="sec-title text-white">Insite Our Farming Gallery</h2>
            </div>
          </div>
          <div className="col-lg-auto d-none d-lg-block">
            <div className="sec-btn">
              <div className="icon-box">
                <button
                  data-slider-prev="#gallerySlider1"
                  className="slider-arrow default"
                >
                  <i className="far fa-arrow-left"></i>
                </button>
                <button
                  data-slider-next="#gallerySlider1"
                  className="slider-arrow default"
                >
                  <i className="far fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container container-gallery">
        <div
          className="swiper th-slider has-shadow"
          id="gallerySlider1"
          data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"},"1400":{"slidesPerView":"4"}}}'
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="gallery-card">
                <div className="box-img">
                  <img
                    src="Image/gallery/gallery_1_1.jpg"
                    alt="gallery image"
                  />
                  <a
                    href="Image/gallery/gallery_1_1.jpg"
                    className="icon-btn style2 popup-image"
                    ><i className="far fa-plus"></i
                  ></a>
                </div>
                <div className="box-content">
                  <p className="box-subtitle">Fresh Food & Vegetables</p>
                  <h3 className="box-title">
                    <a href="project-details.html">Fresh Vegetables</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="gallery-card">
                <div className="box-img">
                  <img
                    src="Image/gallery/gallery_1_2.jpg"
                    alt="gallery image"
                  />
                  <a
                    href="Image/gallery/gallery_1_2.jpg"
                    className="icon-btn style2 popup-image"
                    ><i className="far fa-plus"></i
                  ></a>
                </div>
                <div className="box-content">
                  <p className="box-subtitle">Fresh Food & Vegetables</p>
                  <h3 className="box-title">
                    <a href="project-details.html">Organic Vegetables</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="gallery-card">
                <div className="box-img">
                  <img
                    src="Image/gallery/gallery_1_3.jpg"
                    alt="gallery image"
                  />
                  <a
                    href="Image/gallery/gallery_1_3.jpg"
                    className="icon-btn style2 popup-image"
                    ><i className="far fa-plus"></i
                  ></a>
                </div>
                <div className="box-content">
                  <p className="box-subtitle">Fresh Food & Vegetables</p>
                  <h3 className="box-title">
                    <a href="project-details.html">Organic Fruits</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="gallery-card">
                <div className="box-img">
                  <img
                    src="Image/gallery/gallery_1_4.jpg"
                    alt="gallery image"
                  />
                  <a
                    href="Image/gallery/gallery_1_4.jpg"
                    className="icon-btn style2 popup-image"
                    ><i className="far fa-plus"></i
                  ></a>
                </div>
                <div className="box-content">
                  <p className="box-subtitle">Fresh Food & Vegetables</p>
                  <h3 className="box-title">
                    <a href="project-details.html">Organic Farming</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="gallery-card">
                <div className="box-img">
                  <img
                    src="Image/gallery/gallery_1_1.jpg"
                    alt="gallery image"
                  />
                  <a
                    href="Image/gallery/gallery_1_1.jpg"
                    className="icon-btn style2 popup-image"
                    ><i className="far fa-plus"></i
                  ></a>
                </div>
                <div className="box-content">
                  <p className="box-subtitle">Fresh Food & Vegetables</p>
                  <h3 className="box-title">
                    <a href="project-details.html">Fresh Vegetables</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="gallery-card">
                <div className="box-img">
                  <img
                    src="Image/gallery/gallery_1_2.jpg"
                    alt="gallery image"
                  />
                  <a
                    href="Image/gallery/gallery_1_2.jpg"
                    className="icon-btn style2 popup-image"
                    ><i className="far fa-plus"></i
                  ></a>
                </div>
                <div className="box-content">
                  <p className="box-subtitle">Fresh Food & Vegetables</p>
                  <h3 className="box-title">
                    <a href="project-details.html">Organic Vegetables</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="gallery-card">
                <div className="box-img">
                  <img
                    src="Image/gallery/gallery_1_3.jpg"
                    alt="gallery image"
                  />
                  <a
                    href="Image/gallery/gallery_1_3.jpg"
                    className="icon-btn style2 popup-image"
                    ><i className="far fa-plus"></i
                  ></a>
                </div>
                <div className="box-content">
                  <p className="box-subtitle">Fresh Food & Vegetables</p>
                  <h3 className="box-title">
                    <a href="project-details.html">Organic Fruits</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="gallery-card">
                <div className="box-img">
                  <img
                    src="Image/gallery/gallery_1_4.jpg"
                    alt="gallery image"
                  />
                  <a
                    href="Image/gallery/gallery_1_4.jpg"
                    className="icon-btn style2 popup-image"
                    ><i className="far fa-plus"></i
                  ></a>
                </div>
                <div className="box-content">
                  <p className="box-subtitle">Fresh Food & Vegetables</p>
                  <h3 className="box-title">
                    <a href="project-details.html">Organic Farming</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-block d-lg-none mt-40 text-center">
          <div className="icon-box">
            <button
              data-slider-prev="#gallerySlider1"
              className="slider-arrow default"
            >
              <i className="far fa-arrow-left"></i>
            </button>
            <button
              data-slider-next="#gallerySlider1"
              className="slider-arrow default"
            >
              <i className="far fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Photo