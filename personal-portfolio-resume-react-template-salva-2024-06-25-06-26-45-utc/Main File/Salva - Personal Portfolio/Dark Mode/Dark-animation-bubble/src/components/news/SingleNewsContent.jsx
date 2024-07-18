import React from "react";
import UserTwoImg from "../../assets/images/newsblog/user-two.png";
import BlogImg from "../../assets/images/newsblog/blog-image.png";
import UserOneImg from "../../assets/images/newsblog/user-one.png";
import UserThreeImg from "../../assets/images/newsblog/user-three.png";
import { Link } from "react-router-dom";

const SingleBlogContent = () => {
  return (
    <>
      <div className="salva-blog-title dark-about-content">
        <h4 className="blog-main-title salv-about-title salv-home-title md-font w-text inter-font-900 mb-0">
          Blog Post
        </h4>
      </div>
      <div className="salva-blog-release dark-blog-release">
        <p className="mb-0 blog-category jost-400">
          {" "}
          03 min reading in <span className="mx-2">—</span>
          <Link className="text-link second-color" to="/news">
            Photography
          </Link>
        </p>
      </div>
      <div className="salva-blog-name dark-salv-blog-name">
        <h5 className="mb-0 blog-title">
          Why every photographer should shoot film, even in 2023 ?
        </h5>
      </div>
      <div className="salva-post-author dark-salv-author d-flex">
        <div className="flex-shrink-0">
          <a
            href=""
            className="is-hoverable"
            title="Read all posts of - Robert Britt"
          >
            <img
              loading="lazy"
              className="rounded-circle w-auto"
              src={UserTwoImg}
              alt="this is author image"
              width="60"
              height="60"
            />
          </a>
        </div>
        <div className="blog-author-by flex-grow-1 ms-3 w-text">
          {" "}
          By{" "}
          <a
            className="text-link w-text jost-400"
            href=""
            title="Read all posts by - Rina Mortin"
          >
            Rina Mortin
          </a>
          <p className="mb-0 lh-base jost-400">
            Published at 10th January, 2023
          </p>
        </div>
      </div>
      <div className="salva-blog-image">
        <img src={BlogImg} alt="this is a blog image" />
      </div>
      <div className="salva-blog-content dark-salv-blog-content">
        <p className="mb-0 blog-descri sm-md-font-two inter-font-400">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classNameical Latin literature from 45 BC,
          making it over 2000 years old. Richard McClintock, a Latin professor
          at Hampden-Sydney College in Virginia, looked up one of the more
          obscure Latin words, consectetur, from a Lorem Ipsum passage, and
          going through the cites of the word in classNameical literature,
          discovered the undoubtable source.
        </p>
        <blockquote className="blog-quote">
          And though I still feel like I have a long way to go, my images have
          improved tremendously since the very grainy and out-of-focus photos I
          shared in my first blog posts.
        </blockquote>
        <p className="mb-0 blog-descri-two sm-md-font-two inter-font-400">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classNameical Latin literature from 45 BC,
          making it over 2000 years old. Richard McClintock, a Latin professor
          at Hampden-Sydney College in Virginia, looked up one of the more
          obscure Latin words, consectetur, from a Lorem Ipsum passage, and
          going through the cites of the word in classNameical literature,
          discovered the undoubtable source.
        </p>
      </div>
      <div className="blog-tag">
        <div className="nav-social-item-text">
          <div className="w-text inter-font-600">Tags</div>
        </div>
        <ul className="nav-blog-tag dark-nav-blog-tag">
          <li className="nav-tag-item dark-nav-tag-item jost-400">
            <a href="" className="nav-tag-links">
              Design
            </a>
          </li>
          <li className="nav-tag-item dark-nav-tag-item jost-400">
            <a href="" className="nav-tag-links">
              Development
            </a>
          </li>
          <li className="nav-tag-item dark-nav-tag-item jost-400">
            <a href="" className="nav-tag-links">
              Travel
            </a>
          </li>
          <li className="nav-tag-item dark-nav-tag-item jost-400">
            <a href="" className="nav-tag-links">
              Web Design
            </a>
          </li>
          <li className="nav-tag-item dark-nav-tag-item jost-400 nav-marketing-item">
            <a href="" className="nav-tag-links">
              Marketing
            </a>
          </li>
        </ul>
      </div>
      <div className="blog-comment-section">
        <h6 className="mb-0 blog-comment-title w-text">Comments:</h6>
        <div className="card salv-comm-box dark-sal-comm-box">
          <div className="card-body comment-card-body card-body-one">
            <div className="row">
              <div className="col-2 col-sm-2 col-md-2 p-0 comment-user-img">
                <img
                  src={UserOneImg}
                  className="img img-rounded img-fluid"
                  alt="this is comment image"
                />
              </div>
              <div className="col-10 col-sm-10 col-md-10">
                <div className="mt-0 mb-0 salv-comme-user-name salv-dark-comm-user">
                  <Link
                    className="float-left salv-comm-user-name w-text w-text"
                    to="/news"
                  >
                    <strong>Sammy John</strong>
                  </Link>
                  <p className="slav-comme-time dark-salv-comm-time text-center">
                    5th Jan 2023
                  </p>
                </div>
                <div className="clearfix"></div>
                <p className="salv-comm-desc mt-0 mb-0">
                  Lorem Ipsum is simply dummy text of the pr make but also the
                  leap into electronic typesetting, remaining essentially
                  unchanged.
                </p>
                <p className="salv-comme-button dark-salv-comm mt-0 mb-0">
                  <a className="float-right btn ml-2">Reply</a>
                </p>
              </div>
            </div>
          </div>
          <div className="card-body reply-card-body card-body-two">
            <div className="row">
              <div className="col-2 col-sm-2 col-md-2 p-0 comment-user-img">
                <img
                  src={UserTwoImg}
                  className="img img-rounded img-fluid"
                  alt="this is comment image"
                />
              </div>
              <div className="col-10 col-sm-10 col-md-10">
                <div className="mt-0 mb-0 salv-comme-user-name salv-dark-comm-user">
                  <Link
                    className="float-left salv-comm-user-name w-text"
                    to="/news"
                  >
                    <strong>Zainth Putt</strong>
                  </Link>
                  <p className="dark-salv-comm-time slav-comme-time text-center">
                    8th Jan 2023
                  </p>
                </div>
                <div className="clearfix"></div>
                <p className="salv-comm-desc mt-0 mb-0">
                  Lorem Ipsum is simply dummy text of the pr make but also the
                  leap into electronic typesetting, remaining essentially
                  unchanged.
                </p>
                <p className="salv-comme-button dark-salv-comm mt-0 mb-0">
                  <a className="float-right btn ml-2">Reply</a>
                </p>
              </div>
            </div>
          </div>
          <div className="card-body comment-card-body card-body-three">
            <div className="row">
              <div className="col-2 col-sm-2 col-md-2 p-0 comment-user-img">
                <img
                  src={UserThreeImg}
                  className="img img-rounded img-fluid"
                  alt="this is comment image"
                />
              </div>
              <div className="col-10 col-sm-10 col-md-10">
                <div className="mt-0 mb-0 salv-comme-user-name salv-dark-comm-user">
                  <Link
                    className="float-left salv-comm-user-name w-text"
                    to="/news"
                  >
                    <strong>John Doe</strong>
                  </Link>
                  <p className="dark-salv-comm-time slav-comme-time text-center">
                    12th Jan 2023
                  </p>
                </div>
                <div className="clearfix"></div>
                <p className="salv-comm-desc mt-0 mb-0">
                  Lorem Ipsum is simply dummy text of the pr make but also the
                  leap into electronic typesetting, remaining essentially
                  unchanged.
                </p>
                <p className="salv-comme-button dark-salv-comm mt-0 mb-0">
                  <a className="float-right btn ml-2">Reply</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-leave-comment">
        <h4 className="mb-0 blog-leave-title w-text inter-font-600">
          Leave Your Comments:
        </h4>
        <form
          id="contact-form"
          className="form-border"
          action="php/mail.php"
          method="post"
        >
          <div className="row blog-form dark-blog-form">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="form-group mb-4 dark-form-input">
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault01"
                  placeholder="Your Name"
                  required=""
                />
                <div className="salv-input-bar-line"></div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="form-group mb-4 dark-form-input">
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault02"
                  placeholder="Email"
                  required=""
                />
                <div className="salv-input-bar-line"></div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-12">
              <div className="form-group blog-comment mb-3 dark-form-input">
                <textarea
                  className="form-control jost-400"
                  rows="4"
                  cols="12"
                  id="comment"
                  placeholder="Write Here"
                ></textarea>
                <div className="salv-input-bar-line"></div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-12">
              <div className="salv-comment-form-cookies-consent save-email-label">
                <input
                  id="salv-comment-element"
                  name="salv-comment-element"
                  type="checkbox"
                  value="yes"
                />
                <label for="salv-comment-element" className="w-text">
                  Save my information in this browser for the next time.
                </label>
                <div id="invalidCheck3Feedback" className="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-12">
              <div className="form-group">
                <button
                  className="blog-submit-btn msg-submit-btn btnContact dark-btnContact w-text"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default SingleBlogContent;
