import React from "react";
import BestDeveloperImg from "../../assets/images/awrds/developer.png";
import BestDesignerImg from "../../assets/images/awrds/website.png";
import DesignerImg from "../../assets/images/awrds/designer.png";

const Awards = () =>
{
    return (
      <>
        <div className="salv-about-award">
          <h6 className="salv-about-personla-title dark-about-personal-title mb-0 w-text sm-md-font inter-font-700">
            awrads
          </h6>
          <div className="row salv-inter-award-list">
            <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xxl-4 award-col award-one">
              <div className="salv-award-card">
                <div className="salv-main-card-wrap dark-salv-award-wrap">
                  <div className="salv-card-display">
                    <div className="awrd-year w-text sm-font">2022</div>
                    <img
                      src={BestDeveloperImg}
                      alt="this is a developer icon"
                    />
                  </div>
                  <div className="salv-awrd-card-hover">
                    <h2 className="mb-0 mt-0 w-text sm-md-font inter-font-500 salv-award-name">
                      Best Developer
                    </h2>
                    <p className="mb-0 sm-font-two dark-sec-color inter-font-400 salv-awrd-desc">
                      Morbi nullam sit dolor diam aenean gravida. Eget commodo
                      blandit volutpat quis tristique risus, sed. Sed et.
                    </p>
                  </div>
                </div>
                <div className="card--border dark-card-border"></div>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xxl-4 award-col award-two">
              <div className="salv-award-card">
                <div className="salv-main-card-wrap dark-salv-award-wrap">
                  <div className="salv-card-display">
                    <div className="awrd-year w-text sm-font">2021</div>
                    <img src={BestDesignerImg} alt="this is a designer icon" />
                  </div>
                  <div className="salv-awrd-card-hover">
                    <h2 className="mb-0 mt-0 w-text sm-md-font inter-font-500 salv-award-name">
                      Best Designer
                    </h2>
                    <p className="mb-0 sm-font-two dark-sec-color inter-font-400 salv-awrd-desc">
                      Morbi nullam sit dolor diam aenean gravida. Eget commodo
                      blandit volutpat quis tristique risus, sed. Sed et.
                    </p>
                  </div>
                </div>
                <div className="card--border dark-card-border"></div>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xxl-4 award-col award-three">
              <div className="salv-award-card">
                <div className="salv-main-card-wrap dark-salv-award-wrap">
                  <div className="salv-card-display">
                    <div className="awrd-year w-text sm-font">2020</div>
                    <img src={DesignerImg} alt="this is a website icon" />
                  </div>
                  <div className="salv-awrd-card-hover">
                    <h2 className="mb-0 mt-0 w-text sm-md-font inter-font-500 salv-award-name">
                      Website of the Month
                    </h2>
                    <p className="mb-0 sm-font-two dark-sec-color inter-font-400 salv-awrd-desc">
                      Morbi nullam sit dolor diam aenean gravida. Eget commodo
                      blandit volutpat quis tristique risus, sed. Sed et.
                    </p>
                  </div>
                </div>
                <div className="card--border dark-card-border"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};
export default Awards;