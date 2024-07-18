import React, { useState } from "react";
import PersonalInfo from "./about/PersonalInfo";
import Programming from "./about/Programming";
import ServiceSection from "./about/ServiceSection";
import EduAndExp from "./about/EduAndExp";
import Interest from "./about/Interest";
import Awards from "./about/Awards";
import ClientSection from "./about/ClientSection";
import TestimonialSection from "./about/TestimonialSection";
import Footer from "./Footer";
import WeekendModeContent from "./common/WeekendModeContent";
import SocialIcon from "./common/SocialIcon";
import SalvaLogo from "../assets/images/logo/logo.png";
import ProfileImg from "../assets/images/homepage/profile-image.png";
import { Link } from "react-router-dom";

const About = () => {
  const [isBurgerClicked, setIsBurgerClicked] = useState(false);

  const handleBurgerClick = () => {
    setIsBurgerClicked((prevClicked) => !prevClicked);
  };
  return (
    <>
      <div className="salva-page-wrap">
        <section className="salva-fixed-content" id="about_us">
          <div className="container-fluid">
            <div className="row home-content-row">
              {/* <!--Left side salva fixed image start here--> */}
              <div class="col-12 col-md-5 col-lg-4 col-xxl-5 salva-left-fixed-image salva-home-vimeo p-0">
                <h1 class="d-none">this is a image of salva fixed</h1>
                <div class="salva-home-image"></div>
                <iframe
                  src="https://player.vimeo.com/video/81400335?autoplay=1&muted=1"
                  allowfullscreen
                  allow="autoplay"
                ></iframe>
                <div class="salva-weekend-image"></div>
              </div>
              {/* <!--Left side salva fixed image end here --> */}
              {/* <!--right side salva content start here--> */}
              <div className="col-12 col-md-12 col-lg-8 col-xxl-7 salva-home-content p-0">
                <div
                  className={`salva-about-wrap ${
                    isBurgerClicked ? "border-none" : ""
                  }`}
                >
                  {/* <!--header content start here --> */}
                  <header className="salva-header">
                    <div className="container-fluid p-0">
                      <div className="row">
                        <div className="col-6 col-sm-6 col-md-4 col-lg-4">
                          <a className="salva-logo" href="/">
                            <img
                              src={SalvaLogo}
                              alt="this is a logo of slava"
                            />
                          </a>
                        </div>
                        <div className="col-6 col-sm-6 col-md-8 col-lg-8">
                          <nav className="navbar salva-header-nav">
                            <div className="d-flex">
                              <input
                                type="checkbox"
                                id="navcheck"
                                className="navcheck"
                                role="button"
                                title="menu"
                                aria-pressed="true"
                              />
                              <label
                                htmlFor="navcheck"
                                aria-hidden="true"
                                title="menu"
                              >
                                <span
                                  className={`salv-burger ${
                                    isBurgerClicked ? "click" : ""
                                  }`}
                                  onClick={handleBurgerClick}
                                >
                                  <span className="bar">
                                    <span className="visuallyhidden">Menu</span>
                                  </span>
                                </span>
                              </label>
                              {/* <!--desktop screen menu design --> */}
                              <ul id="menu" className="sal-menu-list">
                                <li className="salv-menu-item">
                                  <Link
                                    to="/"
                                    target="_self"
                                    className="salv-menu-link"
                                  >
                                    Home
                                  </Link>
                                </li>
                                <li className="salv-menu-item">
                                  <Link
                                    to="/about"
                                    target="_self"
                                    className="salv-menu-link active second-color"
                                  >
                                    About
                                  </Link>
                                </li>
                                <li className="salv-menu-item">
                                  <Link
                                    to="/portfolio"
                                    target="_self"
                                    className="salv-menu-link second-color"
                                  >
                                    Portfolio
                                  </Link>
                                </li>
                                <li className="salv-menu-item">
                                  <Link
                                    to="/news"
                                    target="_self"
                                    className="salv-menu-link  second-color"
                                  >
                                    News
                                  </Link>
                                </li>
                                <li className="salv-menu-item">
                                  <Link
                                    to="/contact"
                                    target="_self"
                                    className="salv-menu-link second-color"
                                  >
                                    Contact
                                  </Link>
                                </li>
                              </ul>
                              {/* <!--tablet screen menu design --> */}
                              <div className="salv-menu-design-two">
                                <div className="menu-design-wrap">
                                  <div className="salv-menu-profile">
                                    <img
                                      src={ProfileImg}
                                      alt="this is profile image"
                                    />
                                  </div>
                                  <div className="sakv-new-menu-social">
                                    <ul className="salv-menu-social-list">
                                      <li className="salv-menu-social-icon">
                                        <a href="">
                                          <svg
                                            width="10"
                                            height="18"
                                            viewBox="0 0 10 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M6.66683 10.2498H8.75016L9.5835 6.9165H6.66683V5.24984C6.66683 4.3915 6.66683 3.58317 8.3335 3.58317H9.5835V0.783171C9.31183 0.747337 8.286 0.666504 7.20266 0.666504C4.94016 0.666504 3.3335 2.04734 3.3335 4.58317V6.9165H0.833496V10.2498H3.3335V17.3332H6.66683V10.2498Z"
                                              fill="black"
                                            />
                                          </svg>
                                        </a>
                                      </li>
                                      <li className="salv-menu-social-icon">
                                        <a href="">
                                          <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <mask
                                              id="mask0_501_150"
                                              style={{ maskType: "alpha" }}
                                              maskUnits="userSpaceOnUse"
                                              x="0"
                                              y="0"
                                              width="20"
                                              height="20"
                                            >
                                              <path
                                                d="M0 0H20V20H0V0Z"
                                                fill="white"
                                              />
                                            </mask>
                                            <g mask="url(#mask0_501_150)">
                                              <path
                                                d="M18.4683 4.71327C17.8321 4.99468 17.1574 5.1795 16.4666 5.26161C17.1947 4.82613 17.7397 4.14078 17.9999 3.33327C17.3166 3.73994 16.5674 4.02494 15.7866 4.17911C15.2621 3.61792 14.5669 3.24574 13.8091 3.12043C13.0512 2.99511 12.2732 3.12368 11.596 3.48615C10.9187 3.84862 10.3802 4.42468 10.0642 5.12477C9.74812 5.82486 9.67221 6.60976 9.84826 7.35744C8.46251 7.28798 7.10687 6.92788 5.86933 6.30049C4.63179 5.67311 3.54003 4.79248 2.66492 3.71577C2.35516 4.24781 2.19238 4.85263 2.19326 5.46827C2.19326 6.67661 2.80826 7.74411 3.74326 8.36911C3.18993 8.35169 2.64878 8.20226 2.16492 7.93327V7.9766C2.16509 8.78136 2.44356 9.56129 2.95313 10.1842C3.46269 10.807 4.17199 11.2345 4.96076 11.3941C4.4471 11.5333 3.90851 11.5538 3.38576 11.4541C3.60814 12.1468 4.04159 12.7526 4.62542 13.1867C5.20924 13.6208 5.9142 13.8614 6.64159 13.8749C5.91866 14.4427 5.0909 14.8624 4.20566 15.1101C3.32041 15.3577 2.39503 15.4285 1.48242 15.3183C3.0755 16.3428 4.93 16.8867 6.82409 16.8849C13.2349 16.8849 16.7408 11.5741 16.7408 6.96827C16.7408 6.81827 16.7366 6.66661 16.7299 6.51827C17.4123 6.02508 18.0013 5.41412 18.4691 4.71411L18.4683 4.71327Z"
                                                fill="black"
                                              />
                                            </g>
                                          </svg>
                                        </a>
                                      </li>
                                      <li className="salv-menu-social-icon">
                                        <a href="">
                                          <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <mask
                                              id="mask0_502_153"
                                              style={{ maskType: "alpha" }}
                                              maskUnits="userSpaceOnUse"
                                              x="0"
                                              y="0"
                                              width="20"
                                              height="20"
                                            >
                                              <path
                                                d="M0 0H20V20H0V0Z"
                                                fill="white"
                                              />
                                            </mask>
                                            <g mask="url(#mask0_502_153)">
                                              <path
                                                d="M9.99984 7.49984C9.3368 7.49984 8.70091 7.76323 8.23207 8.23207C7.76323 8.70091 7.49984 9.3368 7.49984 9.99984C7.49984 10.6629 7.76323 11.2988 8.23207 11.7676C8.70091 12.2364 9.3368 12.4998 9.99984 12.4998C10.6629 12.4998 11.2988 12.2364 11.7676 11.7676C12.2364 11.2988 12.4998 10.6629 12.4998 9.99984C12.4998 9.3368 12.2364 8.70091 11.7676 8.23207C11.2988 7.76323 10.6629 7.49984 9.99984 7.49984ZM9.99984 5.83317C11.1049 5.83317 12.1647 6.27216 12.9461 7.05356C13.7275 7.83496 14.1665 8.89477 14.1665 9.99984C14.1665 11.1049 13.7275 12.1647 12.9461 12.9461C12.1647 13.7275 11.1049 14.1665 9.99984 14.1665C8.89477 14.1665 7.83496 13.7275 7.05356 12.9461C6.27216 12.1647 5.83317 11.1049 5.83317 9.99984C5.83317 8.89477 6.27216 7.83496 7.05356 7.05356C7.83496 6.27216 8.89477 5.83317 9.99984 5.83317ZM15.4165 5.62484C15.4165 5.9011 15.3068 6.16606 15.1114 6.36141C14.9161 6.55676 14.6511 6.6665 14.3748 6.6665C14.0986 6.6665 13.8336 6.55676 13.6383 6.36141C13.4429 6.16606 13.3332 5.9011 13.3332 5.62484C13.3332 5.34857 13.4429 5.08362 13.6383 4.88827C13.8336 4.69292 14.0986 4.58317 14.3748 4.58317C14.6511 4.58317 14.9161 4.69292 15.1114 4.88827C15.3068 5.08362 15.4165 5.34857 15.4165 5.62484ZM9.99984 3.33317C7.93817 3.33317 7.6015 3.339 6.64234 3.3815C5.989 3.41234 5.55067 3.49984 5.144 3.65817C4.78234 3.79817 4.5215 3.96567 4.244 4.244C3.98318 4.496 3.78263 4.80366 3.65734 5.144C3.499 5.55234 3.4115 5.98984 3.3815 6.64234C3.33817 7.56234 3.33317 7.884 3.33317 9.99984C3.33317 12.0615 3.339 12.3982 3.3815 13.3573C3.41234 14.0098 3.49984 14.449 3.65734 14.8548C3.799 15.2173 3.96567 15.4782 4.24234 15.7548C4.52317 16.0348 4.784 16.2023 5.14234 16.3407C5.554 16.4998 5.99234 16.5882 6.64234 16.6182C7.56234 16.6615 7.884 16.6665 9.99984 16.6665C12.0615 16.6665 12.3982 16.6607 13.3573 16.6182C14.009 16.5873 14.4482 16.4998 14.8548 16.3423C15.2157 16.2015 15.4782 16.034 15.7548 15.7573C16.0357 15.4765 16.2032 15.2157 16.3415 14.8573C16.4998 14.4465 16.5882 14.0073 16.6182 13.3573C16.6615 12.4373 16.6665 12.1157 16.6665 9.99984C16.6665 7.93817 16.6607 7.6015 16.6182 6.64234C16.5873 5.99067 16.4998 5.55067 16.3415 5.144C16.2159 4.80401 16.0157 4.49647 15.7557 4.244C15.5038 3.98304 15.1961 3.78248 14.8557 3.65734C14.4473 3.499 14.009 3.4115 13.3573 3.3815C12.4373 3.33817 12.1157 3.33317 9.99984 3.33317ZM9.99984 1.6665C12.264 1.6665 12.5465 1.67484 13.4348 1.7165C14.3223 1.75817 14.9265 1.89734 15.4582 2.104C16.0082 2.31567 16.4715 2.60234 16.9348 3.06484C17.3586 3.48142 17.6865 3.98533 17.8957 4.5415C18.1015 5.07234 18.2415 5.67734 18.2832 6.56484C18.3223 7.45317 18.3332 7.73567 18.3332 9.99984C18.3332 12.264 18.3248 12.5465 18.2832 13.4348C18.2415 14.3223 18.1015 14.9265 17.8957 15.4582C17.6871 16.0147 17.3591 16.5187 16.9348 16.9348C16.5181 17.3584 16.0143 17.6863 15.4582 17.8957C14.9273 18.1015 14.3223 18.2415 13.4348 18.2832C12.5465 18.3223 12.264 18.3332 9.99984 18.3332C7.73567 18.3332 7.45317 18.3248 6.56484 18.2832C5.67734 18.2415 5.07317 18.1015 4.5415 17.8957C3.98511 17.6869 3.48111 17.359 3.06484 16.9348C2.64101 16.5183 2.31311 16.0144 2.104 15.4582C1.89734 14.9273 1.75817 14.3223 1.7165 13.4348C1.67734 12.5465 1.6665 12.264 1.6665 9.99984C1.6665 7.73567 1.67484 7.45317 1.7165 6.56484C1.75817 5.6765 1.89734 5.07317 2.104 4.5415C2.31253 3.98499 2.64051 3.48094 3.06484 3.06484C3.48123 2.64086 3.98519 2.31295 4.5415 2.104C5.07317 1.89734 5.6765 1.75817 6.56484 1.7165C7.45317 1.67734 7.73567 1.6665 9.99984 1.6665Z"
                                                fill="black"
                                              />
                                            </g>
                                          </svg>
                                        </a>
                                      </li>
                                      <li className="salv-menu-social-icon">
                                        <a href="">
                                          <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <mask
                                              id="mask0_503_156"
                                              style={{ maskType: "alpha" }}
                                              maskUnits="userSpaceOnUse"
                                              x="0"
                                              y="0"
                                              width="20"
                                              height="20"
                                            >
                                              <path
                                                d="M0 0H20V20H0V0Z"
                                                fill="white"
                                              />
                                            </mask>
                                            <g mask="url(#mask0_503_156)">
                                              <path
                                                d="M5.78353 4.16652C5.78331 4.60855 5.6075 5.03239 5.29478 5.34479C4.98207 5.6572 4.55806 5.83258 4.11603 5.83236C3.674 5.83214 3.25017 5.65633 2.93776 5.34361C2.62536 5.0309 2.44997 4.60688 2.4502 4.16486C2.45042 3.72283 2.62622 3.29899 2.93894 2.98659C3.25166 2.67419 3.67567 2.4988 4.1177 2.49902C4.55972 2.49924 4.98356 2.67505 5.29596 2.98777C5.60837 3.30049 5.78375 3.7245 5.78353 4.16652ZM5.83353 7.06652H2.5002V17.4999H5.83353V7.06652ZM11.1002 7.06652H7.78353V17.4999H11.0669V12.0249C11.0669 8.97486 15.0419 8.69152 15.0419 12.0249V17.4999H18.3335V10.8915C18.3335 5.74986 12.4502 5.94152 11.0669 8.46652L11.1002 7.06652Z"
                                                fill="black"
                                              />
                                            </g>
                                          </svg>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="salv-menu-list">
                                    <ul className="salv-sec-menu-item">
                                      <li className="salv-sec-menu-link">
                                        <Link
                                          to="/"
                                          className="slav-tb-menu-name"
                                          target="_self"
                                        >
                                          home
                                        </Link>
                                      </li>
                                      <li className="salv-sec-menu-link">
                                        <Link
                                          to="/about"
                                          target="_self"
                                          className="slav-tb-menu-name active"
                                        >
                                          about
                                        </Link>
                                      </li>
                                      <li className="salv-sec-menu-link">
                                        <Link
                                          to="/portfolio"
                                          target="_self"
                                          className="slav-tb-menu-name"
                                        >
                                          portfolio
                                        </Link>
                                      </li>
                                      <li className="salv-sec-menu-link">
                                        <Link
                                          to="/news"
                                          target="_self"
                                          className="slav-tb-menu-name"
                                        >
                                          news
                                        </Link>
                                      </li>
                                      <li className="salv-sec-menu-link">
                                        <Link
                                          to="/contact"
                                          target="_self"
                                          className="slav-tb-menu-name"
                                        >
                                          contact
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="salv-mob-copyright">
                                    <p className="salv-copyright-content mb-0 sm-font inter-font-400 b-text light-copyright">
                                      Copyright © 2023 Salva ❤{" "}
                                      <Link
                                        to="https://1.envato.market/website-portfolio"
                                        className="b-text"
                                        target="_blank"
                                      >
                                        the_krishna
                                      </Link>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </header>

                  {/* <!--Salva About Content start --> */}
                  <div className="salva-about-content weekend-mode-hide">
                    <div className="salv-inrto-content">
                      <h2
                        className="salv-about-title salv-home-title md-font b-text inter-font-900 mb-0"
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        About
                      </h2>
                      <div className="sec-text text-anim">
                        <p
                          className="salv-about-desc mb-0 second-color inter-font-400"
                          data-aos="fade-right"
                          data-aos-offset="300"
                          data-aos-easing="ease-in-sine"
                        >
                          I am a freelancer based in the United Kingdom and i
                          have been building noteworthy UX/UI designs and
                          websites for years, which comply with the latest
                          design trends. I help convert a vision and an idea
                          into meaningful and useful products. Having a sharp
                          eye for product evolution helps me prioritize tasks,
                          iterate fast.
                        </p>
                      </div>
                    </div>
                    {/* <!--About personal info --> */}
                    <PersonalInfo />

                    {/* <!--About programming and language --> */}
                    <Programming />

                    {/* <!--About Service section here --> */}
                    <ServiceSection />

                    {/* <!--About eduction and experienced --> */}
                    <EduAndExp />

                    {/* <!--About interest section --> */}
                    <Interest />

                    {/* <!--About award section --> */}
                    <Awards />

                    {/* <!--About client section --> */}
                    <ClientSection />

                    {/* <!--About Testimonial section --> */}
                    <TestimonialSection />
                  </div>
                  {/* <!--weekend-mode start here--> */}
                  <WeekendModeContent />
                  {/* <!--social icon start here --> */}
                  <SocialIcon />
                  {/* <!--footer content start here --> */}
                  <Footer />
                </div>
              </div>
              {/* <!--right side salva content end here --> */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default About;
