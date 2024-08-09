import React from "react";

const Hero = () => {
  return (<div>
    <div className="d-none d-md-flex vw-100 vh-100 justify-content-center align-items-center text-light container">
      <div className="row justify-content-space-between">
        <div className="col-md-6 d-flex align-items-center position-relative">
          <div className="animate__animated animate__slideInUp d-flex justify-content-center align-items-center hero-left">
            <div>
              <h5 className="h4">Hello, I'm</h5>
              <h1 className="display-1 fw-bolder">Musa_Musa_K</h1>
              <p className="lead">
                A passionate{" "}
                <span className="text-info">Frontend Web Developer</span>
              </p>
              <button className="button btn-purple px-5 py-2">Hire me</button>
            </div>
          </div>
          <img
            src="images/rubber.png"
            className="position-absolute bottom-0 end-0 animate__animated animate__bounce animate__infinite animate__slow"
            style={{ width: "80px" }}
            alt=""
          />
        </div>
        <div className="col-md-6">
          <div className="animate__animated animate__slideInRight">
            <img src="images/pfp.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div className="d-md-none container col-xxl-8 px-4 py-5 text-light">
    <div className="row flex-lg-row-reverse align-items-center justify-content-center g-5 py-5">
      <div className="col-lg-6">
        <h4>Hello, I'm</h4>
        <h1 className="display-5 fw-bold lh-1 mb-3">Musa_Musa_K</h1>
        <p className="lead">A passionate <span className="text-info">Frontend Web Developer</span></p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <button className="button btn-purple px-5 py-2">Hire me</button>
        </div>
      </div>
      <div className="col-10 col-sm-8 col-lg-6 text-center">
        <img src="images/pfp.png" className="d-block mx-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
      </div>
    </div>
  </div></div>
  );
};

export default Hero;
