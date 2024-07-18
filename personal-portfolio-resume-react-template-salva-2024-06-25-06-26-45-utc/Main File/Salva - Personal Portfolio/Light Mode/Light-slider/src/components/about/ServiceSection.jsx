import React from "react";

const ServiceSection = () =>
{
    return (
      <>
        <div className="salv-about-service">
          <h5 className="salv-about-personla-title mb-0 b-text sm-md-font inter-font-700">
            services
          </h5>
          <div className="row salv-service-card">
            <div className="col-12 col-dm-6 col-md-4 col-lg-4 service-card-col">
              <div className="card1 service-card-wrap">
                <div className="service-icon">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 14.25H39V32.25H43.5V13.125C43.5 11.2969 41.9531 9.75 40.125 9.75H10.875C8.97656 9.75 7.5 11.2969 7.5 13.125V32.25H12V14.25ZM46.875 34.5H4.125C3.49219 34.5 3 35.0625 3 35.625V36.75C3 39.2812 4.96875 41.25 7.5 41.25H43.5C45.9609 41.25 48 39.2812 48 36.75V35.625C48 35.0625 47.4375 34.5 46.875 34.5ZM28.6641 27.6797C28.9453 27.9609 29.2969 28.0312 29.7188 28.0312C30.0703 28.0312 30.4219 27.9609 30.7031 27.6797L34.0781 24.3047C34.5703 23.7422 34.5703 22.8281 34.0781 22.2656L30.7031 18.8906C30.1406 18.3984 29.2266 18.3984 28.6641 18.8906C28.1719 19.4531 28.1719 20.3672 28.6641 20.9297L31.0547 23.25L28.6641 25.6406C28.1719 26.2031 28.1719 27.1172 28.6641 27.6797ZM22.2656 18.8906C21.7031 18.3984 20.7891 18.3984 20.2266 18.8906L16.8516 22.2656C16.3594 22.8281 16.3594 23.7422 16.8516 24.3047L20.2266 27.6797C20.5078 27.9609 20.8594 28.0312 21.2812 28.0312C21.6328 28.0312 21.9844 27.9609 22.2656 27.6797C22.7578 27.1172 22.7578 26.2031 22.2656 25.6406L19.875 23.25L22.2656 20.9297C22.7578 20.3672 22.7578 19.4531 22.2656 18.8906Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <h6 className="service-title sm-md-font b-text inter-font-500 mb-0">
                  Web Development
                </h6>
                <p className="small service-desc second-color inter-font-400 mb-0">
                  Morbi nullam sit dolor diam aenean gravida. Eget commodo
                  blandit volutpat quis tristique risus, sed. Sed et.
                </p>
                <div className="go-corner">
                  <div className="go-arrow"></div>
                </div>
              </div>
            </div>
            <div className="col-12 col-dm-6 col-md-4 col-lg-4 service-card-col service-card-two">
              <div className="card1 service-card-wrap">
                <div className="service-icon">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33.375 7.5H17.625C15.0938 7.5 13.125 9.53906 13.125 12V39C13.125 41.5312 15.0938 43.5 17.625 43.5H33.375C35.8359 43.5 37.875 41.5312 37.875 39V12C37.875 9.53906 35.8359 7.5 33.375 7.5ZM25.5 41.25C24.2344 41.25 23.25 40.2656 23.25 39C23.25 37.8047 24.2344 36.75 25.5 36.75C26.6953 36.75 27.75 37.8047 27.75 39C27.75 40.2656 26.6953 41.25 25.5 41.25ZM33.375 12V34.5H17.625V12H33.375Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <h6 className="service-title sm-md-font b-text inter-font-500 mb-0">
                  App Development
                </h6>
                <p className="small service-desc second-color inter-font-400 mb-0">
                  Morbi nullam sit dolor diam aenean gravida. Eget commodo
                  blandit volutpat quis tristique risus, sed. Sed et.
                </p>
                <div className="go-corner">
                  <div className="go-arrow"></div>
                </div>
              </div>
            </div>
            <div className="col-12 col-dm-6 col-md-4 col-lg-4 service-card-col marketing-col-top">
              <div className="card1 service-card-wrap">
                <div className="service-icon">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9688 28.5703L9.78906 26.3906C9.22656 25.8281 9.01562 24.9844 9.22656 24.1406C9.4375 23.5078 9.71875 22.7344 10.0703 21.75H2.6875C2.05469 21.75 1.49219 21.4688 1.21094 20.9062C0.859375 20.4141 0.859375 19.7812 1.21094 19.2188L4.86719 13.0312C5.78125 11.4844 7.46875 10.5 9.22656 10.5H15.0625C15.2031 10.2188 15.3438 10.0078 15.5547 9.72656C21.3203 1.21875 29.8984 0.9375 34.9609 1.92188C35.8047 2.0625 36.4375 2.69531 36.5781 3.53906C37.5625 8.60156 37.2812 17.1797 28.7734 22.9453C28.4922 23.1562 28.2109 23.2969 28 23.4375V29.2734C28 31.0312 27.0156 32.7188 25.4688 33.6328L19.2812 37.2891C18.7188 37.5703 18.0859 37.6406 17.5938 37.2891C17.0312 37.0078 16.75 36.4453 16.75 35.8125V28.2891C15.6953 28.6406 14.8516 28.9219 14.2188 29.1328C13.4453 29.4141 12.5312 29.2031 11.9688 28.5703ZM28 13.3125C29.5469 13.3125 30.8125 12.1172 30.8125 10.5C30.8125 8.95312 29.5469 7.6875 28 7.6875C26.3828 7.6875 25.1875 8.95312 25.1875 10.5C25.1875 12.1172 26.3828 13.3125 28 13.3125Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <h6 className="service-title sm-md-font b-text inter-font-500 mb-0">
                  Digital Marketing
                </h6>
                <p className="small service-desc second-color inter-font-400 mb-0">
                  Morbi nullam sit dolor diam aenean gravida. Eget commodo
                  blandit volutpat quis tristique risus, sed. Sed et.
                </p>
                <div className="go-corner">
                  <div className="go-arrow"></div>
                </div>
              </div>
            </div>
            <div className="col-12 col-dm-6 col-md-4 col-lg-4 service-card-col service-top-col">
              <div className="card1 service-card-wrap">
                <div className="service-icon">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.75 9.75C29.5781 9.75 31.125 11.2969 31.125 13.125V13.4062H39.4219C40.125 11.9297 41.6719 10.875 43.5 10.875C45.9609 10.875 48 12.9141 48 15.375C48 17.9062 45.9609 19.875 43.5 19.875C41.6719 19.875 40.125 18.8906 39.4219 17.3438H34.7109C38.8594 20.1562 41.6719 24.7266 42.0234 30H42.375C44.2031 30 45.75 31.5469 45.75 33.375V37.875C45.75 39.7734 44.2031 41.25 42.375 41.25H37.875C35.9766 41.25 34.5 39.7734 34.5 37.875V33.375C34.5 31.5469 35.9766 30 37.875 30H38.0859C37.6641 25.2891 34.6406 21.3516 30.4922 19.5234C29.9297 20.4375 28.875 21 27.75 21H23.25C22.0547 21 21 20.4375 20.4375 19.5234C16.2891 21.3516 13.2656 25.2891 12.8438 30H13.125C14.9531 30 16.5 31.5469 16.5 33.375V37.875C16.5 39.7734 14.9531 41.25 13.125 41.25H8.625C6.72656 41.25 5.25 39.7734 5.25 37.875V33.375C5.25 31.5469 6.72656 30 8.625 30H8.90625C9.25781 24.7266 12.0703 20.1562 16.2188 17.3438H11.5078C10.8047 18.8906 9.25781 19.875 7.5 19.875C4.96875 19.875 3 17.9062 3 15.375C3 12.9141 4.96875 10.875 7.5 10.875C9.25781 10.875 10.8047 11.9297 11.5078 13.4062H19.875V13.125C19.875 11.2969 21.3516 9.75 23.25 9.75H27.75ZM23.8125 17.0625H27.1875V13.6875H23.8125V17.0625ZM9.1875 33.9375V37.3125H12.5625V33.9375H9.1875ZM41.8125 37.3125V33.9375H38.4375V37.3125H41.8125Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <h6 className="service-title sm-md-font b-text inter-font-500 mb-0">
                  UI/UX Design
                </h6>
                <p className="small service-desc second-color inter-font-400 mb-0">
                  Morbi nullam sit dolor diam aenean gravida. Eget commodo
                  blandit volutpat quis tristique risus, sed. Sed et.
                </p>
                <div className="go-corner">
                  <div className="go-arrow"></div>
                </div>
              </div>
            </div>
            <div className="col-12 col-dm-6 col-md-4 col-lg-4 service-card-col service-top-col">
              <div className="card1 service-card-wrap">
                <div className="service-icon">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.4531 7.92188C24.4375 7.57031 25.4922 7.57031 26.4766 7.92188L39.9766 12.7734C41.7344 13.4062 43 15.0938 43 16.9922V34.0781C43 35.9766 41.7344 37.6641 39.9766 38.2969L26.4766 43.1484C25.4922 43.5 24.4375 43.5 23.4531 43.1484L9.95312 38.2969C8.19531 37.6641 7 35.9766 7 34.0781V16.9922C7 15.0938 8.19531 13.4062 9.95312 12.7734L23.4531 7.92188ZM25 12.1406L12.7656 16.5L25 20.8594L37.1641 16.5L25 12.1406ZM27.25 38.0859L38.5 34.0781V20.8594L27.25 24.8672V38.0859Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <h6 className="service-title sm-md-font b-text inter-font-500 mb-0">
                  Animation
                </h6>
                <p className="small service-desc second-color inter-font-400 mb-0">
                  Morbi nullam sit dolor diam aenean gravida. Eget commodo
                  blandit volutpat quis tristique risus, sed. Sed et.
                </p>
                <div className="go-corner">
                  <div className="go-arrow"></div>
                </div>
              </div>
            </div>
            <div className="col-12 col-dm-6 col-md-4 col-lg-4 service-card-col service-top-col">
              <div className="card1 service-card-wrap">
                <div className="service-icon">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M41.5938 11.6484C43.3516 13.4062 43.3516 16.2891 41.5938 18.0469L37.9375 21.7031L28.7969 12.5625L32.4531 8.90625C34.2109 7.14844 37.0938 7.14844 38.8516 8.90625L41.5938 11.6484ZM23.875 15.5859C23.2422 14.9531 22.1875 14.9531 21.5547 15.5859L14.3125 22.7578C13.6797 23.4609 12.625 23.4609 11.9922 22.7578C11.2891 22.125 11.2891 21.0703 11.9922 20.3672L19.1641 13.1953C21.1328 11.2266 24.2969 11.2266 26.2656 13.1953L36.3203 23.25L23.1016 36.5391C19.7266 39.9141 15.4375 42.2344 10.7266 43.1484L8.96875 43.5C8.40625 43.6406 7.84375 43.4297 7.49219 43.0078C7.07031 42.6562 6.85938 42.0938 7 41.5312L7.35156 39.7734C8.26562 35.0625 10.5859 30.7734 13.9609 27.3984L24.8594 16.5L23.875 15.5859Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <h6 className="service-title sm-md-font b-text inter-font-500 mb-0">
                  Content Writing
                </h6>
                <p className="small service-desc second-color inter-font-400 mb-0">
                  Morbi nullam sit dolor diam aenean gravida. Eget commodo
                  blandit volutpat quis tristique risus, sed. Sed et.
                </p>
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
export default ServiceSection;