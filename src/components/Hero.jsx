import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
    });
  }, []);
  return (
    <div
      className="vw-100 vh-100 d-flex justify-content-center align-items-center text-center"
      style={{
        background:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/banner.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div>
        <h1 className="display-1 text-light fw-bolder" data-aos="fade-up">Musa_Musa_K</h1>
        <p className="lead text-light fw-normal" data-aos="fade-up">
          A passionate Frontend Web Developer
        </p>
        <button className="btn btn-purple px-5 py-2 text-light h4" data-aos="fade-up">
          Hire me
        </button>
      </div>
    </div>
  );
};

export default Hero;
