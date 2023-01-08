import React from "react";
import "./courses.css";
import { online } from "../../dummydata";
import Heading from "../common/heading/Heading";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const OnlineCourses = () => {
  // const useNavigate = Navigate()
  const navigate = useNavigate();
  const handleclick=(e)=>{
    navigate('/courses/subcources')
    //courses/subcources
  // console.log(e.target)
  }

  return (

    <> 
      <section className="online">
        <div onClick={handleclick} className="container">
          <Heading subtitle="COURSES" title="Browse Our Online Courses" />
          <div className="content grid2">
            {online.map((val) => (
              <div className="box">
                <div className="img">
                  <img src={val.cover}  alt="img"/>
                  <img src={val.hoverCover} alt="img" className="show" />
                </div>
                <h1>{val.courseName}</h1>

                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;
