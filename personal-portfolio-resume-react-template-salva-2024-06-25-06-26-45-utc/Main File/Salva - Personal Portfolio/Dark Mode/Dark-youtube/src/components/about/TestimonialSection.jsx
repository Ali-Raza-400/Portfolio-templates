import React from "react";
import clientTwoImg from "../../assets/images/testimonial/client-two.png";
import clientThreeImg from "../../assets/images/testimonial/client-three.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const TestimonialSection = () =>
{
    return (
      <>
        <div className="salv-about-testimonial">
          <h4 className="salv-about-personla-title dark-about-personal-title mb-0 w-text sm-md-font inter-font-700">
            testimonial
          </h4>
          <div className="salv-testi-testimonial-wrap testimonial position-relative">
            <OwlCarousel
              className="sal-testimonial-carousel dark-salv-testi-carousel owl-carousel owl-theme"
              items={2}
              margin={8}
              loop
              slideSpeed={1000}
              autoplay={true}
              dots={false}
              responsive={{
                768: {
                  items: 2, // Display one item on screens less than 394px wide
                },
                394: {
                  items: 1, // Display two items on screens 394px wide and above
                },
                324: {
                  items: 1, // Display two items on screens 394px wide and above
                },
              }}
            >
              {/* <!-- Testimonial Block --> */}
              <div className="salv-testimonial-block dark-testimonial-block">
                <div className="salv-inner-box dark-salv-inner-box">
                  <div className="salv-desc-text">
                    They really nailed it. This is one of the best themes I have
                    seen in a long time. Very nice design with lots of
                    customization available. Many of my clients have chosen this
                    theme for their portfolio sites your back-office team.
                  </div>
                  <div className="salv-info-box">
                    <div className="salv-user-thumb">
                      <img
                        src={clientThreeImg}
                        alt="this is a testimonial image"
                      />
                    </div>
                    <div className="salv-user-details">
                      <h4 className="name w-text">Jeniffer Lopez</h4>
                      <span className="designation dark-sec-color">
                        CEO, Molina
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Testimonial Block --> */}
              <div className="salv-testimonial-block dark-testimonial-block">
                <div className="salv-inner-box dark-salv-inner-box">
                  <div className="salv-desc-text">
                    They really nailed it. This is one of the best themes I have
                    seen in a long time. Very nice design with lots of
                    customization available. Many of my clients have chosen this
                    theme for their portfolio sites your back-office team.
                  </div>
                  <div className="salv-info-box">
                    <div className="salv-user-thumb">
                      <img src={clientTwoImg} alt="this is testimonial image" />
                    </div>
                    <div className="salv-user-details">
                      <h4 className="name w-text">Benny Dayal</h4>
                      <span className="designation">Manager, US</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Testimonial Block --> */}
              <div className="salv-testimonial-block dark-testimonial-block">
                <div className="salv-inner-box dark-salv-inner-box">
                  <div className="salv-desc-text">
                    They really nailed it. This is one of the best themes I have
                    seen in a long time. Very nice design with lots of
                    customization available. Many of my clients have chosen this
                    theme for their portfolio sites your back-office team.
                  </div>
                  <div className="salv-info-box">
                    <div className="salv-user-thumb">
                      <img
                        src={clientThreeImg}
                        alt="this is a testimonial image"
                      />
                    </div>
                    <div className="salv-user-details">
                      <h4 className="name w-text">Park Jay</h4>
                      <span className="designation">CEO, US</span>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </>
    );
};
export default TestimonialSection;