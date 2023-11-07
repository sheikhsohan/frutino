import { useEffect, useState } from 'react';
import Swiper from 'swiper/bundle';

import {productData} from './constant/data'

const ProductSection = () => {
  const [mySwiper, setMySwiper] = useState(null);

  useEffect(() => {
    const initSwiper = () => {
      const swiper = new Swiper('#productSlider1', {
        slidesPerView: 1,
        breakpoints: {
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        },
      });

      setMySwiper(swiper);
    };

    initSwiper(); // Initialize the Swiper on component mount

    // Reinitialize the Swiper when the window resizes
    window.addEventListener('resize', initSwiper);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('resize', initSwiper);
    };
  }, []);

  const handlePrevSlide = () => {
    if (mySwiper) {
      mySwiper.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (mySwiper) {
      mySwiper.slideNext();
    }
  };


  return (
    <>
      <section className="space">
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center align-items-end">
            <div className="col-lg">
              <div className="title-area text-center text-lg-start">
                <span className="sub-title">
                  <img src="Image/theme-img/title_icon.svg" alt="Icon" />Organic Products
                </span>
                <h2 className="sec-title">Organic & Fresh Products Daily!</h2>
              </div>
            </div>
            <div className="col-lg-auto d-none d-lg-block">
              <div className="sec-btn">
                <div className="icon-box">
                  <button
                    data-slider-prev="#productSlider1"
                    className="slider-arrow default"
                  >
                    <i className="far fa-arrow-left"></i>
                  </button>
                  <button
                    data-slider-next="#productSlider1"
                    className="slider-arrow default"
                  >
                    <i className="far fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="swiper th-slider has-shadow"
            id="productSlider1"
          >
            <div className="swiper-wrapper">
            {productData.map((product, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="th-product product-grid">
                    <div className="product-img">
                      <img src={product.imgSrc} alt="Product Image" />
                      <span className="product-tag">{product.productTag}</span>
                      <div className="actions">
                        <a href="#QuickView" className="icon-btn popup-content">
                          <i className="far fa-eye"></i>
                        </a>
                        <a href="cart.html" className="icon-btn">
                          <i className="far fa-cart-plus"></i>
                        </a>
                        <a href="wishlist.html" className="icon-btn">
                          <i className="far fa-heart"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-content">
                      <a href="shop-details.html" className="product-category">
                        {product.category}
                      </a>
                      <h3 className="product-title">
                        <a href="shop-details.html">{product.title}</a>
                      </h3>
                      <span className="price">{product.price}</span>
                      <div className="woocommerce-product-rating">
                        <span className="count">({product.reviewsCount} Reviews)</span>
                        <div
                          className="star-rating"
                          role="img"
                          aria-label={`Rated ${product.rating} out of 5`}
                        >
                          <span>
                            Rated <strong className="rating">{product.rating}</strong> out of 5 based on{' '}
                            <span className="rating">1</span> customer rating
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="d-block d-lg-none mt-40 text-center">
            <div className="icon-box">
              <button
              onClick={handlePrevSlide}
                className="slider-arrow default"
              >
                <i className="far fa-arrow-left"></i>
              </button>
              <button
              onClick={handleNextSlide}
                className="slider-arrow default"
              >
                <i className="far fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductSection;
