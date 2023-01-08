import React from 'react'
import "./subcourses.css";
import Heading from "../../common/heading/Heading";
import imgw from "../images3/watermanagement.jpg"
import imgwm from "../images3/wastemanagement.jpg"
import imgs from "../images3/soilmanagement.jpg"



const Sub_Cources = () => {
  return (
    <> 
      
      <div className="main">
        <div className="left">
          <div className="course1">
            <div className="img1" >
              <img src={imgw} alt="img" style={{height:"100%", width:"110%"}}/>
            </div>
            <div className="content">
              <h2>
                WATER MANAGEMENT
              </h2>
              
              
            </div>
           
          </div>
          <div className="course2">
          <div className="img2">
          <img src={imgwm} alt="img" style={{height:"100%", width:"110%"}}/>
              </div>
              <div className="content">
              <h2>
                WASTE MANAGEMENT
              </h2>
            </div>
            
          </div>
          <div className="course3">
          <div className="img3">
          <img src={imgs} alt="img" style={{height:"95%", width:"95%", borderRadius:"50%"}}/>
              </div>
              <div className="content">
              <h2>
                SOIL MANAGEMENT
              </h2>
            </div>
            
          </div>
           
             
            
          
        </div>
        <div  className="right">
        {/* <div className="img"> */}
        <div className="overlay">
          <Heading
              subtitle="CLIMATE CHANGE"
            />
        <p className="description">
              Climate variability includes all the variations in the climeate
              that last longer than individual weather events, whereas the term climate 
              change only refers to those variations that persist for a longer period of time,
              typically decades or more. In addition to the general meaning in which climate 
              change may refer to any time in Earth's history, the term is commonly used to 
              describe the climate change that is now underway.

            </p>
          </div>
                  
                  
                {/* </div> */}
        </div>
      </div>

      
    </>
  )
}

export default Sub_Cources;

