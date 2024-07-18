import React, { useState } from "react";
import { Link } from "react-router-dom";

const WeekendModeContent = () => {
  const [isWeekendMode, setIsWeekendMode] = useState(false);

  const handleWeekendModeClick = () => {
    setIsWeekendMode((prevMode) => !prevMode);

    if (!isWeekendMode) {
      // If weekend mode is enabled
      // Add hidepage className and remove showpage className from various elements
      const elementsToHide = document.querySelectorAll(
        ".salva-project-detail, .salva-portfolio-content, .salva-image-page, .salva-soundcloud-page, .salva-vimeo-content, .salva-youtube-video-page, .salva-home-main-content, .weekend-mode-hide, .salva-slider-page"
      );
      elementsToHide.forEach((element) => {
        element.classNameList.add("hidepage");
        element.classNameList.remove("showpage");
      });
    } else {
      // If weekend mode is disabled
      // Remove showpage className from .salva-project-detail and .salva-single-news-content
      const elementsToShow = document.querySelectorAll(
        ".salva-project-detail, .salva-single-news-content"
      );
      elementsToShow.forEach((element) =>
        element.classNameList.remove("showpage")
      );

      // Remove hidepage className from .salva-portfolio-content, .salva-home-main-content, and .weekend-mode-hide
      const elementsToUnhide = document.querySelectorAll(
        ".salva-portfolio-content, .salva-home-main-content, .weekend-mode-hide"
      );
      elementsToUnhide.forEach((element) =>
        element.classNameList.remove("hidepage")
      );
    }

    // Toggle classNamees for .salva-weekend-mode, .salva-home-image, and .salva-weekend-image
    document
      .querySelector(".salva-weekend-mode")
      .classNameList.toggle("showpage");
    document
      .querySelector(".salva-home-image")
      .classNameList.toggle("showpage");
    document
      .querySelector(".salva-weekend-image")
      .classNameList.toggle("visible-img");
  };

  return (
    <>
      <div
        className={`salva-weekend-mode ${isWeekendMode ? "checked" : ""}`}
        id="weekend_mode"
      >
        <div className="salv-inrto-content">
          <h5 className="salv-about-title salv-home-title md-font b-text inter-font-900 mb-0">
            Me on Weekends 😎
          </h5>
        </div>
        <div className="salv-week-desc">
          <p className="mt-0 mb-0 sal-week-desc-one inter-font-400 sm-md-font-two">
            Sagittis sed quam platea dignissim et tincidunt vitae tortor
            viverra. Bibendum et, elementum senectus quam venenatis sapien.
            Tincidunt erat faucibus risus et libero, semper ultrices imperdiet.
            Iaculis est ultrices egestas sem tempor aliquet quis. Quis in dui
            urna sapien, egestas non eu.
          </p>
          <p className="mb-0 mt-0 sal-week-desc-two inter-font-400 sm-md-font-two">
            Velit commodo orci feugiat tellus purus. Aliquet nam proin vitae
            amet sit tristique sollicitudin massa vulputate. Non augue nunc
            nulla augue fringilla. Tempus pellentesque venenatis elit porttitor.
            Viverra massa augue varius vitae sapien, non nibh. In donec aliquet
            vulputate massa at massa, congue feugiat leo. Magna massa sit
            pellentesque morbi turpis aliquam a quis massa. Sodales donec diam
            velit duis tristique. Purus eu fermentum, mi dignissim morbi. Ornare
            consectetur eget at id in. Erat facilisis id sed donec iaculis. Sed
            eget mattis purus facilisis quis viverra arcu. Amet lorem sed leo
            vulputate sit ultricies urna. Sagittis ullamcorper pharetra diam
            scelerisque arcu. At lacinia quam turpis purus purus, nunc semper
            tortor sed.
          </p>
          <p className="mt-0 mb-0 sal-week-desc-three inter-font-400 sm-md-font-two">
            Arcu lectus porttitor vel, et. Etiam nulla est tortor adipiscing.
            Fermentum pretium massa pharetra, id aliquam. Morbi dignissim et ut
            odio volutpat porttitor ac. Consectetur dictum cursus ultrices sed
            scelerisque. Ut pharetra, aliquam aliquet feugiat duis semper
            interdum sed quam. Elementum egestas lacus, a vitae orci rutrum.
            Neque lorem orci dui, fermentum. Risus aliquam nibh habitasse justo
            amet.
          </p>
        </div>
        <div className="salv-drop-mail">
          <div className="salv-drop-mail-wrap">
            <h6 className="mb-0 drop-mail-title inter-font-400">
              Drop Your Mail:
            </h6>
            <Link
              style={{ color: "black" }}
              to="mailto:hello@salva.com"
              className="salv-mail-text inter-font-900"
            >
              &nbsp;hello@salva.com
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default WeekendModeContent;
