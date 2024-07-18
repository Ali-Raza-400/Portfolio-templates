import React from "react";

const MsgForm = () =>
{
    return (
      <>
        <div className="salv-message-me">
          <h4 className="salv-about-personla-title mb-0 b-text sm-md-font inter-font-700">
            message me
          </h4>
          <div className="salv-message-me row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 map-contact-form-col">
              <div className="formbold-main-wrapper">
                <div className="formbold-form-wrapper">
                  <form method="POST" className="salv-conatct-us">
                    <div className="formbold-mb-5 salv-contact-field">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        className="formbold-form-input inter-font-500"
                        required
                      />
                      <span className="salv-field-icon">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_101_727)">
                            <path
                              d="M2 18C2 16.1814 2.72245 14.4372 4.00841 13.1513C5.29437 11.8653 7.03852 11.1429 8.85714 11.1429C10.6758 11.1429 12.4199 11.8653 13.7059 13.1513C14.9918 14.4372 15.7143 16.1814 15.7143 18H14C14 16.636 13.4582 15.3279 12.4937 14.3635C11.5292 13.399 10.2211 12.8571 8.85714 12.8571C7.49317 12.8571 6.18507 13.399 5.22059 14.3635C4.25612 15.3279 3.71429 16.636 3.71429 18H2ZM8.85714 10.2857C6.01571 10.2857 3.71429 7.98429 3.71429 5.14286C3.71429 2.30143 6.01571 0 8.85714 0C11.6986 0 14 2.30143 14 5.14286C14 7.98429 11.6986 10.2857 8.85714 10.2857ZM8.85714 8.57143C10.7514 8.57143 12.2857 7.03714 12.2857 5.14286C12.2857 3.24857 10.7514 1.71429 8.85714 1.71429C6.96286 1.71429 5.42857 3.24857 5.42857 5.14286C5.42857 7.03714 6.96286 8.57143 8.85714 8.57143Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_101_727">
                              <rect width="18" height="18" fill="#ffffff" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <div className="salv-input-bar-line"></div>
                    </div>
                    <div className="formbold-mb-5 salv-contact-field">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="formbold-form-input inter-font-500"
                        required
                      />
                      <div className="salv-input-bar-line"></div>
                      <span className="salv-field-icon">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_101_734)">
                            <path
                              d="M0.9 1H17.1C17.3387 1 17.5676 1.09482 17.7364 1.2636C17.9052 1.43239 18 1.66131 18 1.9V16.3C18 16.5387 17.9052 16.7676 17.7364 16.9364C17.5676 17.1052 17.3387 17.2 17.1 17.2H0.9C0.661305 17.2 0.432387 17.1052 0.263604 16.9364C0.0948211 16.7676 0 16.5387 0 16.3V1.9C0 1.66131 0.0948211 1.43239 0.263604 1.2636C0.432387 1.09482 0.661305 1 0.9 1ZM16.2 4.8142L9.0648 11.2042L1.8 4.7944V15.4H16.2V4.8142ZM2.2599 2.8L9.0549 8.7958L15.7518 2.8H2.2599Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_101_734">
                              <rect width="18" height="18" fill="#ffffff" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </div>
                    <div className="formbold-mb-5 salv-contact-field">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        className="formbold-form-input inter-font-500"
                        required
                      />
                      <div className="salv-input-bar-line"></div>
                      <span className="salv-field-icon">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_101_741)">
                            <path
                              d="M12.7487 6.66761L11.3324 5.25131L2.00325 14.5805V15.9967H3.41955L12.7487 6.66761ZM14.165 5.25131L15.5813 3.83501L14.165 2.41871L12.7487 3.83501L14.165 5.25131ZM4.2489 18H0V13.7501L13.4568 0.293263C13.6447 0.105487 13.8994 0 14.165 0C14.4306 0 14.6853 0.105487 14.8731 0.293263L17.7067 3.12686C17.8945 3.31469 18 3.56942 18 3.83501C18 4.10061 17.8945 4.35533 17.7067 4.54316L4.2499 18H4.2489Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_101_741">
                              <rect width="18" height="18" fill="#ffffff" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </div>
                    <div className="formbold-mb-5 salv-contact-field">
                      <textarea
                        rows="4"
                        cols="12"
                        name="message"
                        id="message"
                        placeholder="Message"
                        className="formbold-form-input inter-font-500"
                      ></textarea>
                      <div className="salv-input-bar-line textarea-line"></div>
                      <span className="salv-field-icon">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_101_748)">
                            <path
                              d="M14.3102 9.1406L13.6288 8.45926L4.08807 18H0V13.911L10.9025 3.00754L16.3542 8.45926C16.5349 8.63998 16.6363 8.88506 16.6363 9.1406C16.6363 9.39614 16.5349 9.64122 16.3542 9.82194L9.54074 16.6363L8.17709 15.2737L14.3102 9.1406ZM12.2661 7.09657L10.9025 5.73388L1.92742 14.7089V16.0726H3.29011L12.2661 7.09657ZM14.9915 0.282162L17.7178 3.00754C17.8985 3.18826 18 3.43334 18 3.68888C18 3.94442 17.8985 4.1895 17.7178 4.37023L16.3542 5.73388L12.2661 1.64485L13.6288 0.282162C13.8095 0.101494 14.0546 0 14.3102 0C14.5657 0 14.8108 0.101494 14.9915 0.282162Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_101_748">
                              <rect width="18" height="18" fill="#ffffff" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </div>
                    <div>
                      {/* <!-- <button className="formbold-btn salv-send-btn w-text inter-font-600 sm-font">salv-send-btn</button> --> */}
                      <button className="salv-home-get-touch salv-send-btn">
                        <span className="salv-get-text salv-get-text-btn">
                          send message
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 map-img-col">
              <div className="salv-contat-us-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3152.332975548547!2d144.9601134!3d-37.805669!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642ccdc6aaaab%3A0x2173400951f0012c!2sLevel%203%2F551%20Swanston%20St%2C%20Carlton%20VIC%203053%2C%20Australia!5e0!3m2!1sen!2sin!4v1673948052812!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};
export default MsgForm;