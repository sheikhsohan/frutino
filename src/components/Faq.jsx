

const Faq = () => {
    const faqBG = {
        backgroundImage: `url("/Image/bg/faq_bg_1.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
  return (
    <>
    <div
      className="bg-smoke2 space overflow-hidden"
      id="faq-sec"
      style={faqBG}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5">
            <div className="faq-img1">
              <div className="img1">
                <img src="Image/normal/faq_1_1.jpg" alt="faq" />
              </div>
              <div className="shape1">
                <img src="Image/bg/vector_shape_1.png" alt="shape" />
              </div>
            </div>
          </div>
          <div className="col-xl-7 text-center text-xl-start align-self-center">
            <div className="ps-xl-4">
              <div className="title-area text-center text-xl-start">
                <span className="sub-title"
                  ><img
                    src="Image/theme-img/title_icon.svg"
                    alt="Icon"
                  />Looking For Answers?</span
                >
                <h2 className="sec-title">
                  Frequently Asked If You Have any Questions?
                </h2>
              </div>
              <div className="accordion" id="faqAccordion">
                <div className="accordion-card">
                  <div className="accordion-header" id="collapse-item-1">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-1"
                      aria-expanded="true"
                      aria-controls="collapse-1"
                    >
                      Do I need to be in when you deliver?
                    </button>
                  </div>
                  <div
                    id="collapse-1"
                    className="accordion-collapse collapse show"
                    aria-labelledby="collapse-item-1"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Our organic farm, we begin with the foundation of
                        healthy, nutrient-rich soil. We employ sustainable
                        practice such as crop rotation cover cropping and
                        composting. This helps maintain soil fertility,
                        structure, and microbial diversity. By avoiding
                        synthetic fertilizers and pesticides, we allow natural
                        processes to flourish.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card">
                  <div className="accordion-header" id="collapse-item-2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-2"
                      aria-expanded="false"
                      aria-controls="collapse-2"
                    >
                      Do I have to order every week?
                    </button>
                  </div>
                  <div
                    id="collapse-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-2"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Our organic farm, we begin with the foundation of
                        healthy, nutrient-rich soil. We employ sustainable
                        practice such as crop rotation cover cropping and
                        composting. This helps maintain soil fertility,
                        structure, and microbial diversity. By avoiding
                        synthetic fertilizers and pesticides, we allow natural
                        processes to flourish.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card">
                  <div className="accordion-header" id="collapse-item-3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-3"
                      aria-expanded="false"
                      aria-controls="collapse-3"
                    >
                      From its medieval origins the digital?
                    </button>
                  </div>
                  <div
                    id="collapse-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-3"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Our organic farm, we begin with the foundation of
                        healthy, nutrient-rich soil. We employ sustainable
                        practice such as crop rotation cover cropping and
                        composting. This helps maintain soil fertility,
                        structure, and microbial diversity. By avoiding
                        synthetic fertilizers and pesticides, we allow natural
                        processes to flourish.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card">
                  <div className="accordion-header" id="collapse-item-4">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-4"
                      aria-expanded="false"
                      aria-controls="collapse-4"
                    >
                      What is Your Pricing Structure?
                    </button>
                  </div>
                  <div
                    id="collapse-4"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-4"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Our organic farm, we begin with the foundation of
                        healthy, nutrient-rich soil. We employ sustainable
                        practice such as crop rotation cover cropping and
                        composting. This helps maintain soil fertility,
                        structure, and microbial diversity. By avoiding
                        synthetic fertilizers and pesticides, we allow natural
                        processes to flourish.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Faq