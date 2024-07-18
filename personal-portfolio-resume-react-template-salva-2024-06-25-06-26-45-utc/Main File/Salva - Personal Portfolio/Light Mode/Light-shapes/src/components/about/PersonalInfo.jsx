import React from "react";
import { Link } from "react-router-dom";

const PersonalInfo = () =>
{
    return (
      <>
        <div className="salv-about-personal">
          <h3 className="salv-about-personla-title mb-0 b-text sm-md-font inter-font-700">
            Personal Informations
          </h3>
          <div className="row personal-info-row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 personal-first-col">
              <div className="pers-info-wrap">
                <span className="pers-info-title b-text sm-md-font inter-font-400">
                  First Name:
                </span>
                <span className="pers-info-title second-color sm-md-font inter-font-400 m-1">
                  Sergio
                </span>
              </div>
              <div className="pers-info-wrap">
                <span className="pers-info-title b-text sm-md-font inter-font-400">
                  Last Name:
                </span>
                <span className="pers-info-title second-color sm-md-font inter-font-400 m-1">
                  Marquina
                </span>
              </div>
              <div className="pers-info-wrap">
                <span className="pers-info-title b-text sm-md-font inter-font-400">
                  Address:
                </span>
                <span className="pers-info-title second-color sm-md-font inter-font-400 m-1">
                  121 Victoria St. London
                </span>
              </div>
              <div className="pers-info-wrap">
                <span className="pers-info-title b-text sm-md-font inter-font-400">
                  Age:
                </span>
                <span className="pers-info-title second-color sm-md-font inter-font-400 m-1">
                  26 Years
                </span>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 personal-second-col">
              <div className="pers-info-wrap">
                <span className="pers-info-title b-text sm-md-font inter-font-400">
                  Study:
                </span>
                <span className="pers-info-title second-color sm-md-font inter-font-400 m-1">
                  Univercity of Oxford
                </span>
              </div>
              <div className="pers-info-wrap">
                <span className="pers-info-title b-text sm-md-font inter-font-400">
                  Degree:
                </span>
                <span className="pers-info-title second-color sm-md-font inter-font-400 m-1">
                  {" "}
                  Master of Science
                </span>
              </div>
              <div className="pers-info-wrap">
                <span className="pers-info-title b-text sm-md-font inter-font-400">
                  E-Mail:
                </span>
                <span className="pers-info-title">
                  <Link
                    to="mailto:hello@salva.com"
                    className="second-color sm-md-font inter-font-400 links m-1"
                  >
                    hello@salva.com
                  </Link>
                </span>
              </div>
              <div className="pers-info-wrap">
                <span className="pers-info-title b-text sm-md-font inter-font-400">
                  Phone:
                </span>
                <span className="pers-info-title ">
                  <Link
                    to="tel:+202345678899"
                    className="second-color sm-md-font inter-font-400 links m-1"
                  >
                    +20 234 567 8899
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};
export default PersonalInfo;
