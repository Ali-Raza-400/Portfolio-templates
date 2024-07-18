import React from "react";
import ProjectOneImg from "../../assets/images/project-detail/project-one.png";
import ProjectThreeImg from "../../assets/images/project-detail/project-three.png";
import ProjectSixImg from "../../assets/images/project-detail/project-six.png";
import ProjectFourImg from "../../assets/images/project-detail/project-four.png";

const DetailPage = () => {
  return (
    <>
      <div className="salv-inrto-content dark-about-content">
        <h4 className="salv-about-title salv-home-title md-font w-text inter-font-900 mb-0">
          Zorro
        </h4>
        <p className="salv-about-desc mb-0 dark-sec-color inter-font-400">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </p>
      </div>
      <div className="salv-project-details">
        <div className="row salv-project-detat-row">
          <div className="col-12 col-md-6 col-sm-6 col-lg-6">
            <div className="salv-proje-image">
              <img src={ProjectOneImg} alt="this is a image of project" />
            </div>
          </div>
          <div className="col-12 col-md-6 col-sm-6 col-lg-6">
            <div className="salv-project-detail-col">
              <div className="salv-proje-field dark-salv-proje-field">
                <span className="salv-project-hold md-font-one inter-font-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="25"
                    width="25"
                    viewBox="0 0 32 32"
                    fill="#ffffff"
                  >
                    <title>Investor</title>
                    <g id="Investor">
                      <path d="M22.67,8.878a1.989,1.989,0,0,1-.3-.022A11.017,11.017,0,0,1,18,7.208,10.954,10.954,0,0,1,12,9a10.925,10.925,0,0,1-2.978-.427C9.013,8.715,9,8.856,9,9A7,7,0,0,0,23,9c0-.053-.007-.1-.008-.157A2.033,2.033,0,0,1,22.67,8.878Z"></path>
                      <path d="M12,7a8.955,8.955,0,0,0,6-2.3,8.971,8.971,0,0,0,4.67,2.183A6.994,6.994,0,0,0,9.427,6.613,8.925,8.925,0,0,0,12,7Z"></path>
                      <path d="M26,25a7.236,7.236,0,0,1-4-1.126V27.5c0,1.381,1.791,2.5,4,2.5s4-1.119,4-2.5V23.874A7.236,7.236,0,0,1,26,25Z"></path>
                      <ellipse cx="26" cy="20.5" rx="4" ry="2.5"></ellipse>
                      <path d="M20,27.5v-7a3.873,3.873,0,0,1,1.331-2.856A8.972,8.972,0,0,0,18,17l-1,2,1.677,5.868a2,2,0,0,1-.509,1.964l-1.461,1.461a1,1,0,0,1-1.414,0l-1.461-1.461a2,2,0,0,1-.509-1.964L15,19l-1-2a9,9,0,0,0-9,9v1a3,3,0,0,0,3,3H20.985A3.767,3.767,0,0,1,20,27.5Z"></path>
                    </g>
                  </svg>
                  Client: Client:
                </span>
                <span className="salv-clinet-name md-font-one inter-font-400">
                  Andrie Devier
                </span>
              </div>
              <div className="salv-proje-field dark-salv-proje-field md-font-one inter-font-600">
                <span className="salv-project-hold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height="25"
                    width="25"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-file-text"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  Type:
                </span>
                <span className="salv-clinet-name md-font-one inter-font-400">
                  Detail Page
                </span>
              </div>
              <div className="salv-proje-field dark-salv-proje-field">
                <span className="salv-project-hold md-font-one inter-font-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ffffff"
                    height="25"
                    width="25"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z" />
                  </svg>
                  Date: Date:
                </span>
                <span className="salv-clinet-name md-font-one inter-font-400">
                  24-10-2021
                </span>
              </div>
              <div className="salv-proje-field dark-salv-proje-field md-font-one inter-font-600">
                <span className="salv-project-hold">
                  <svg
                    version="1.1"
                    id="Icons"
                    width="25"
                    height="25"
                    fill="#ffffff"
                    x="0px"
                    y="0px"
                    viewBox="0 0 32 32"
                    style={{ enableBackground: "new 0 0 32 32" }}
                  >
                    <path
                      d="M29.9,17.5C29.7,17.2,29.4,17,29,17c-2.2,0-4.3,1-5.6,2.8L22.5,21c-1.1,1.3-2.8,2-4.5,2h-3c-0.6,0-1-0.4-1-1s0.4-1,1-1h1.9
															c1.6,0,3.1-1.3,3.1-2.9c0,0,0-0.1,0-0.1c0-0.5-0.5-1-1-1l-6.1,0c-3.6,0-6.5,1.6-8.1,4.2l-2.7,4.2c-0.2,0.3-0.2,0.7,0,1l3,5
															c0.1,0.2,0.4,0.4,0.6,0.5c0.1,0,0.1,0,0.2,0c0.2,0,0.4-0.1,0.6-0.2c3.8-2.5,8.2-3.8,12.7-3.8c3.3,0,6.3-1.8,7.9-4.7l2.7-4.8
															C30,18.2,30,17.8,29.9,17.5z"
                    />
                    <path
                      d="M4.5,18c0.1,0,0.3,0,0.4,0c1.2-1.1,2.7-1.9,4.3-2.4C9.1,15.1,9,14.5,9,14c0-4.4,3.6-8,8-8s8,3.6,8,8c0,0.7-0.1,1.4-0.3,2.1
															C26,15.4,27.5,15,29,15c0.7,0,1.4,0.3,1.9,0.7C31,15.1,31,14.6,31,14c0-1.1-0.1-2.2-0.4-3.3c-0.1-0.5-0.6-0.8-1.1-0.8
															c-1.2,0.2-2.4-0.4-3-1.5c-0.6-1-0.5-2.4,0.2-3.3c0.3-0.4,0.3-1-0.1-1.3C25,2.3,23.1,1.2,21,0.6c-0.5-0.1-1,0.1-1.2,0.6
															C19.3,2.3,18.2,3,17,3s-2.3-0.7-2.8-1.8C14,0.7,13.5,0.4,13,0.6C10.9,1.2,9,2.3,7.4,3.9C7,4.2,7,4.8,7.3,5.2c0.7,1,0.8,2.3,0.2,3.3
															c-0.6,1-1.8,1.6-3,1.5c-0.5-0.1-1,0.3-1.1,0.8C3.1,11.8,3,12.9,3,14s0.1,2.2,0.4,3.3C3.5,17.8,4,18.1,4.5,18z"
                    />
                  </svg>
                  Technology:
                </span>
                <span className="salv-clinet-name md-font-one inter-font-400">
                  Laravel
                </span>
              </div>
              <div className="salv-live-preview dark-salv-live-previw">
                <a href="">Live preview</a>
              </div>
            </div>
          </div>
        </div>
        <div className="salv-proj-desc">
          <div className="row">
            <h3 className="mb-0 salv-about-proje w-text inter-font-600">
              About Project
            </h3>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <p className="mb-0 project-desc dark-sec-color inter-font-400">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <p className="mb-0 project-desc-two project-desc dark-sec-color inter-font-400">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text
              </p>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <p className="mb-0 project-desc projec-desc-three dark-sec-color inter-font-400">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <p className="mb-0 project-desc-two project-desc dark-sec-color inter-font-400">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text
              </p>
            </div>
          </div>
        </div>
        <div className="salv-detail-gallary">
          <div className="photos">
            <img
              src={ProjectFourImg}
              alt="this is a project grid image"
              className="salv-img-one"
            />
            <img
              src={ProjectSixImg}
              alt="this is a project grid image"
              className="salv-img-two"
            />
            <img
              src={ProjectThreeImg}
              alt="this is a project grid image"
              className="salv-img-three"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailPage;
