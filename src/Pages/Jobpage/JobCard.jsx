import React from "react";
import {BsArrowRight} from "react-icons/bs"

const JobCard = ({ job,setTrigger1 }) => {
  const { title, company, location, salary, experience, qualification } = job;

  return (
    <div className="job-card">
      <BsArrowRight className="job-details-arrow"/>
      <div className="job-title">{title}</div>
        <div className="job-salary">{salary}</div>
      <div className="job-details">
        <div className="job-company"><img src="assets/images/companyIcon.svg" alt="" /><span className="company-name">{company}</span></div>
        <div className="job-location"><img src="assets/images/locationIcon.svg" alt="" /> <span className="company-location">{location}</span></div>
        <div className="job-experience">{experience}</div>
        <div className="job-qualification">{qualification}</div>
      </div>
      <button onClick={()=>setTrigger1(true)} style={{marginTop:"10px"}} className="shining-btn">Apply Now</button>
    </div>
  );
};

export default JobCard;
