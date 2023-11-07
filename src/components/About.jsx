import { aboutData } from "./constant/data"

const About = () => {
  return (
    <div className="overflow-hidden space" id="about-sec">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-6 mb-40 mb-xl-0">
          <div className="img-box5">
            <div className="shape1">
              <img src={aboutData.image2} alt="About" />
            </div>
            <div className="img1">
              <img src={aboutData.image1} alt="About" />
            </div>
          </div>
        </div>
        <div className="col-xl-6 text-center text-xl-start">
          <div className="title-area mb-32">
            <span className="sub-title">
              <img src="Image/theme-img/title_icon.svg" alt="shape" />About Us Company
            </span>
            <h2 className="sec-title">{aboutData.title}</h2>
            <p className="sec-text">
              {aboutData.text}
            </p>
          </div>
          <div className="checklist list-two-column mb-40">
            <ul>
              {aboutData.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <a href={aboutData.link} className="th-btn">
              Discover More<i className="fas fa-chevrons-right ms-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About