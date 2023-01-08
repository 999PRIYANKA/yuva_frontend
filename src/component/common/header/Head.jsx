import React from "react";
import logo from "../images1/yi 1.png";
const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <figure>
              <img className="logo1" src={logo} alt="logo" />
            </figure>
          </div>

          <div className="social">
            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-linkedin icon"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;