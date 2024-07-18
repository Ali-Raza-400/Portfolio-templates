import React from "react";
import ProjectTwoimg from "../../assets/images/project-detail/project-two.png";

const SingleImgPage = () => {
  return (
    <>
      <div className="salva-single-image">
        <div className="image-wrapper">
          <img
            className="image-1"
            src={ProjectTwoimg}
            alt="this is a single image"
          />
        </div>
      </div>
    </>
  );
};
export default SingleImgPage;
