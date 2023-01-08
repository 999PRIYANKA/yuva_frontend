import React from "react";
import Heading from "../../common/heading/Heading";
import img from "../images2/yi 2.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO YUVA"
              title="We Are The Voice Of Young Indians Globally"
            />
            <p>
              YUVA is one of te most active focus areas within Young Indians by
              which Yi members engage studnets from across the country in
              various initiatives that thhe students conceptualize, plan and
              execute.
            </p>
            <div className="button">
              <button>
                MORE ABOUT YUVA <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button>
                EXPLORE VERTICALS <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div
        className="rightimg"
        style={{
          width: "40%",
          marginLeft: "60%",
          marginTop: "10%",
          display: "flex"
        }}
      >
        <figure>
          <img
            className="img"
            src={img}
            alt="img"
            style={{ height: "250px" }}
          />
        </figure>
      </div>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
