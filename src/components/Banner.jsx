const Banner = () => {
    const bannerOne = {
        backgroundImage: `url("/Image/bg/cta_bg_2_1.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    const bannerTwo = {
        backgroundImage: `url("/Image/bg/cta_bg_2_2.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
  return (
    <section className="space-bottom">
      <div className="container z-index-common">
        <div className="row gy-30">
          <div className="col-xxl-4 col-lg-5">
            <div className="offer-card mega-hover" style={bannerOne}>
              <span className="h6 box-subtitle">
                Get Extra <span className="text-theme">50% Off</span>
              </span>
              <h3 className="box-title">Fresh Vegetable &<br />Organic Fruits</h3>
              <a href="shop-details.html" className="th-btn">
                Shop Now<i className="fas fa-chevrons-right ms-2"></i>
              </a>
            </div>
          </div>
          <div className="col-xxl-8 col-lg-7">
            <div className="offer-card mega-hover" style={bannerTwo}>
              <span className="h6 box-subtitle">
                Get Extra <span className="text-theme">60% Off</span>
              </span>
              <h3 className="box-title">Organic Vegetable &<br />Fresh Fruits</h3>
              <a href="shop-details.html" className="th-btn">
                Shop Now<i className="fas fa-chevrons-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner