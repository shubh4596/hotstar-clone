import React, { Component, Fragment } from "react";
import './Slider.css'

class SliderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <section id="sliderBlock">
          <article>
            <div className="CSSgal">
              <s id="s1"></s>
              <s id="s2"></s>
              <s id="s3"></s>
              <s id="s4"></s>
              <s id="s5"></s>


              <div className="slider">
                <div>
                  <img src="645463-h.webp" alt="slider1" />
                </div>

                <div>
                  <img src="734302-h.webp" alt="slider2" />
                </div>

                <div>
                  <img src="806773-h.webp" alt="slider3" />
                </div>

                <div>
                  <img src="819160-h.webp" alt="slider4" />
                </div>

                <div>
                  <img src="820938-h.webp" alt="slider5" />
                </div>
              </div>

              <div className="prevNext">
                <div>
                  <a href="#s4">
                    <svg
                      width="14.6"
                      height="27"
                      viewBox="0 0 16 27"
                      xmlns="http://www.w3.org/2000/svg"
                      className=""
                    >
                      <path
                        d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                        fill="#fff"
                        className="_3Zc0XY"
                      ></path>
                    </svg>
                  </a>
                  <a href="#s2">
                    <svg
                      width="14.6"
                      height="27"
                      viewBox="0 0 16 27"
                      xmlns="http://www.w3.org/2000/svg"
                      className="_2gp_O1"
                    >
                      <path
                        d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                        fill="#fff"
                        className="_3Zc0XY"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div>
                  <a href="#s1">
                    <svg
                      width="14.6"
                      height="27"
                      viewBox="0 0 16 27"
                      xmlns="http://www.w3.org/2000/svg"
                      className=""
                    >
                      <path
                        d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                        fill="#fff"
                        className="_3Zc0XY"
                      ></path>
                    </svg>
                  </a>
                  <a href="#s3">
                    <svg
                      width="14.6"
                      height="27"
                      viewBox="0 0 16 27"
                      xmlns="http://www.w3.org/2000/svg"
                      className="_2gp_O1"
                    >
                      <path
                        d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                        fill="#fff"
                        className="_3Zc0XY"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div>
                  <a href="#s2">
                    <svg
                      width="14.6"
                      height="27"
                      viewBox="0 0 16 27"
                      xmlns="http://www.w3.org/2000/svg"
                      className=""
                    >
                      <path
                        d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                        fill="#fff"
                        className="_3Zc0XY"
                      ></path>
                    </svg>
                  </a>
                  <a href="#s4">
                    <svg
                      width="14.6"
                      height="27"
                      viewBox="0 0 16 27"
                      xmlns="http://www.w3.org/2000/svg"
                      className="_2gp_O1"
                    >
                      <path
                        d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                        fill="#fff"
                        className="_3Zc0XY"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div>
                  <a href="#s3">
                    <svg
                      width="14.6"
                      height="27"
                      viewBox="0 0 16 27"
                      xmlns="http://www.w3.org/2000/svg"
                      className=""
                    >
                      <path
                        d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                        fill="#fff"
                        name="_3Zc0XY"
                      ></path>
                    </svg>
                  </a>
                  <a href="#s1">
                    <svg
                      width="14.6"
                      height="27"
                      viewBox="0 0 16 27"
                      xmlns="http://www.w3.org/2000/svg"
                      className="_2gp_O1"
                    >
                      <path
                        d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                        fill="#fff"
                        className="_3Zc0XY"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/* <div class="bullets">
                  <a href="#s1">1</a>
                  <a href="#s2">2</a>
                  <a href="#s3">3</a>
                  <a href="#s4">4</a>
                </div>  */}
            </div>
          </article>
        </section>
      </Fragment>
    );
  }
}

export default SliderComponent;
