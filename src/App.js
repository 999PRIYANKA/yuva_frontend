import React from "react";
import "./App.css";
import Header from "./component/common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import OnlineCourses from "./component/allcourses/OnlineCourses";
import Sub_Cources from "./component/allcourses/subcourses/Sub_Cources";
import Header2 from "./component/common/header/Header2";

function App() {
  return (
    <>
      <Router>
       <Header /> 
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/courses" element={<OnlineCourses />} />
         <Route exact path="/courses/subcources" element={<Sub_Cources />} />
         {/* //http://localhost:3000/allcources/subcources/Sub_Cources.jsx */}
        </Routes>
      </Router>
    </>
  );
}

export default App;