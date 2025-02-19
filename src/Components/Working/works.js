import React, { Component } from "react";
import AOS from "aos";
import "./works.css";

class Working extends Component {
  state = {};
  componentDidMount() {
    AOS.init();

    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom" // defines which position of the element regarding to window should trigger the animation
    });
  }
  render() {
    return (
      <React.Fragment>
        <div style={{ overflow: "hidden" }}>
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-2 col-sm-1 col-xs-2" />
            <div
              className="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-xs-8"
              style={{ padding: "0% 6% 0% 6%" }}

              // data-aos-easing="ease-in-out"
              // data-aos-mirror="true"
              // data-aos-once="false"
              // data-aos-anchor-placement="top-center"
            >
              <span
                className="mt-4 mb-5 btn workSpan"
                data-aos="zoom-in"
                data-aos-offset="200"
                // data-aos-delay="50"
                data-aos-duration="1000"
              >
                How does it work?
              </span>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-2 col-sm-1 col-xs-2" />
          </div>
          <div className="row" style={{ textAlign: "center" }}>
            <div
              className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 mt-4 workContentAnimation"
              data-aos="zoom-in-right"
              data-aos-offset="200"
              // data-aos-delay="50"
              data-aos-duration="1000"
            >
              <img
                className="workIcon"
                src={require("../../Assets/Logo/print.png")}
                alt="Fingerprint"
              />
              <div style={{ marginTop: "10px" }}>
                <span className="workHeading">Record</span>
              </div>
              <div style={{ marginTop: "10px" }}>
                <span className="workDesc">
                  We calculate a fingerprint (hash) of your document. This
                  fingerprint will be added to our processing queue. Optionally
                  we will store your document as well as its meta data on a
                  cloud storage.
                </span>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 mt-4 workContentAnimation"
              data-aos="zoom-in"
              data-aos-offset="200"
              // data-aos-delay="50"
              data-aos-duration="1000"
            >
              <img
                className="workIcon"
                src={require("../../Assets/Logo/device_hub.png")}
                alt="Device Hub"
              />
              <div style={{ marginTop: "10px" }}>
                <span className="workHeading">Write</span>
              </div>
              <div style={{ marginTop: "10px" }}>
                <span className="workDesc">
                  We group multiple fingerprints into a merkle tree on a regular
                  basis. The root hash of that tree will then be written to the
                  Metaverse blockchain.
                </span>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 mt-4 workContentAnimation"
              data-aos="zoom-in-left"
              data-aos-offset="200"
              // data-aos-delay="50"
              data-aos-duration="1000"
            >
              <img
                className="workIcon"
                src={require("../../Assets/Logo/key.png")}
                alt="Key"
              />
              <div style={{ marginTop: "10px" }}>
                <span className="workHeading">Prove</span>
              </div>
              <div style={{ marginTop: "10px" }}>
                <span className="workDesc">
                  In order to prove the timestamp of your document independently
                  we will provide you with the path through a merkle tree as
                  well as the Blockchain transaction as a proof of record.
                </span>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Working;
