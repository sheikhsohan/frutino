import { serviceData } from "./constant/data"

const Service = () => {
    
  return (
    <section className="overflow-hidden bg-smoke2 space" id="service-sec" style={{ backgroundImage: "url(../../public/Image/bg/service_bg_1.png)" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-8">
            <div className="title-area text-center">
              <span className="sub-title">
                <img src="Image/theme-img/title_icon.svg" alt="Icon" />Our Services
              </span>
              <h2 className="sec-title">Our Organic Farming Service For You!</h2>
            </div>
          </div>
        </div>
        <div className="row gy-40 justify-content-center">
          {serviceData.map((service, index) => (
            <div className="col-xl-4 col-md-6" key={index}>
              <div className="service-card">
                <div className="box-img">
                  <img src={service.image} alt="Service" />
                </div>
                <div className="box-icon">
                  <img src={service.icon} alt="Icon" />
                </div>
                <div className="box-content" style={{ backgroundImage: "url(Image/bg/service_card_shape.png)" }}>
                  <h3 className="box-title">
                    <a href={service.link}>{service.title}</a>
                  </h3>
                  <p className="box-text">
                    {service.text}
                  </p>
                </div>
                <a href={service.link} className="icon-btn">
                  <i className="far fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Service