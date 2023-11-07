
import { featuresData } from "./constant/data";

const Choose = () => {

    const chooseBG = {
        backgroundImage: `url("/Image/bg/why_bg_2_2.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };


  return (
    <section className="why-sec3 space" style={chooseBG}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="title-area text-center">
              <span className="sub-title">
                <img src="Image/theme-img/title_icon.svg" alt="Icon" />Why Choose Us
              </span>
              <h2 className="sec-title text-white">
                Savor the Purity, Taste The Difference!
              </h2>
            </div>
          </div>
        </div>
        <div className="row gx-0 justify-content-between">
          <div className="col-sm-auto">
            <div className="why-feature-left">
              {featuresData.slice(0, 3).map((feature, index) => (
                <div className="why-feature" key={index}>
                  <div className="box-icon">
                    <img src={feature.icon} alt="" />
                  </div>
                  <div className="media-body">
                    <div className="box-title">{feature.title}</div>
                    <p className="box-text">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-auto d-none d-lg-block">
            <div className="img-box4 mt-0">
              <img src="Image/normal/why_3_1.png" alt="Why" />
            </div>
          </div>
          <div className="col-sm-auto">
            <div className="why-feature-right">
              {featuresData.slice(3).map((feature, index) => (
                <div className="why-feature" key={index}>
                  <div className="box-icon">
                    <img src={feature.icon} alt="" />
                  </div>
                  <div className="media-body">
                    <div className="box-title">{feature.title}</div>
                    <p className="box-text">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Choose