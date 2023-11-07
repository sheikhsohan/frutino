import { footerData } from "./constant/data"

const Footer = () => {
  return (
    <footer className="footer-wrapper footer-layout2">
      <div className="shape-mockup" data-top="0" data-left="0">
        <img src="Image/shape/footer_shape_1.png" alt="shape" />
      </div>
      <div className="shape-mockup" data-bottom="0" data-right="0">
        <img src="Image/shape/footer_shape_2.png" alt="shape" />
      </div>
      <div className="container z-index-common">
        <div className="newsletter-wrap">
          <div className="newsletter-content">
            <div className="email-icon">
              <img src="Image/icon/email_1.svg" alt="Icon" />
            </div>
            <h4 className="newsletter-title">
              {footerData.newsletterTitle}
            </h4>
          </div>
          <form className="newsletter-form">
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Email Address"
                required=""
              />
            </div>
            <button type="submit" className="th-btn style3">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="copyright-wrap" data-bg-src="assets/img/bg/copyright_bg_1.png">
        <div className="container">
          <div className="row gy-2 align-items-center">
            <div className="col-md-6">
              <p className="copyright-text">
                Copyright <i className="fal fa-copyright"></i> {footerData.copyrightYear}
                <a href="https://facebook.com/s.s0han"> {footerData.copyrightAuthor}</a>. All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="payment-img">
                <img src={footerData.paymentMethodsImageSrc} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer