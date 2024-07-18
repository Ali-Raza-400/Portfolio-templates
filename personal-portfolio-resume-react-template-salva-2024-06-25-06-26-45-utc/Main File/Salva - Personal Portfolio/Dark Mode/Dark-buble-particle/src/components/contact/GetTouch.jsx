import React from "react";
import { Link } from "react-router-dom";

const GetTouch = () =>
{
    return (
      <>
        <div className="salv-cont-get-in">
          <h3 className="salv-about-personla-title dark-about-personal-title mb-0 w-text sm-md-font inter-font-700">
            get in touch
          </h3>
          <div className="salv-get-row row">
            <div className="col-12 col-sm-4 col-md-4 col-lg-4 mail-cont-col">
              <div className="sal-get-in-wrap dark-sal-get-wrap">
                <div className="salv-get-icon">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M39.625 12C41.4531 12 43 13.5469 43 15.375C43 16.5 42.4375 17.4844 41.5938 18.1172L26.3359 29.5781C25.4922 30.2109 24.4375 30.2109 23.5938 29.5781L8.33594 18.1172C7.49219 17.4844 7 16.5 7 15.375C7 13.5469 8.47656 12 10.375 12H39.625ZM22.2578 31.4062C23.875 32.6016 26.0547 32.6016 27.6719 31.4062L43 19.875V34.5C43 37.0312 40.9609 39 38.5 39H11.5C8.96875 39 7 37.0312 7 34.5V19.875L22.2578 31.4062Z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
                <div className="salv-get-in-title">
                  <Link
                    to="mailto:hello@salva.com"
                    className="sal-get-mail inter-font-500 sm-md-font"
                  >
                    hello@salva.com
                  </Link>
                </div>
                <div className="go-corner">
                  <div className="go-arrow"></div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-4 mail-phone-col">
              <div className="sal-get-in-wrap dark-sal-get-wrap">
                <div className="salv-get-icon">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M34.5 7.5H16.5C14.6016 7.5 13.125 9.04688 13.125 10.875V40.125C13.125 42.0234 14.6016 43.5 16.5 43.5H34.5C36.3281 43.5 37.875 42.0234 37.875 40.125V10.875C37.875 9.04688 36.3281 7.5 34.5 7.5ZM25.5 40.125C24.2344 40.125 23.25 39.1406 23.25 37.875C23.25 36.6797 24.2344 35.625 25.5 35.625C26.6953 35.625 27.75 36.6797 27.75 37.875C27.75 39.1406 26.6953 40.125 25.5 40.125Z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
                <div className="salv-get-in-title">
                  <Link
                    to="tel:+202345678899"
                    className="sal-get-mail inter-font-500 sm-md-font"
                  >
                    +20 234 567 8899
                  </Link>
                </div>
                <div className="go-corner">
                  <div className="go-arrow"></div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-4 mail-addr-col">
              <div className="sal-get-in-wrap dark-sal-get-wrap">
                <div className="salv-get-icon">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.8125 42.6562C20.1562 38.0859 12 27.1875 12 21C12 13.5469 17.9766 7.5 25.5 7.5C32.9531 7.5 39 13.5469 39 21C39 27.1875 30.7734 38.0859 27.1172 42.6562C26.2734 43.7109 24.6562 43.7109 23.8125 42.6562ZM25.5 25.5C27.9609 25.5 30 23.5312 30 21C30 18.5391 27.9609 16.5 25.5 16.5C22.9688 16.5 21 18.5391 21 21C21 23.5312 22.9688 25.5 25.5 25.5Z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
                <div className="salv-get-in-title">
                  <span className="sal-get-mail inter-font-500 sm-md-font">
                    121 Victoria St. London
                  </span>
                </div>
                <div className="go-corner">
                  <div className="go-arrow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};
export default GetTouch;