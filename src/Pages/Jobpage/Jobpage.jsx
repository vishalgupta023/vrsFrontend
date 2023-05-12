import React, { useState } from "react";
import JobCard from "./JobCard";
import jobdata from "./jobdata";
import "./job.css"

const JobsPage = ({setTrigger1}) => {
  const [data, setData] = useState(jobdata)

  function filterData(exp) {
    let expData;
    if (exp == "1-2") {
      expData = jobdata.filter((item) => {
        return (parseInt(item.experience[0]) == 1 || parseInt(item.experience[0]) == 2);
      })
      setData(expData);
    }
    if (exp == "3-4") {
      expData = jobdata.filter((item) => {
        return (parseInt(item.experience[0]) <= 4 && parseInt(item.experience[0]) >= 3);
      })
      setData(expData);
    }

    if (exp == "default") {
      setData(jobdata);
    }
  }
  return (
    <>
      <div className="jobs-page">
        <div className="job-filters">
          <div className="filter---types">
            <div className="major-filters">
              <h2 className="filter-heading">Filters</h2>
              <button className="filter-btn" >location</button>
              <button className="filter-btn">Work from Home</button>
              <button className="filter-btn">Part Time</button>
              <button className="filter-btn">Fresher</button>
            </div>

            <div className="jobrole-filters">
              <h4 className="filter-heading">Job Roles</h4>

              <button className="filter-btn">Delivery<img src="assets/images/addFilter.svg" alt="" /></button>
              <button className="filter-btn">Driver <img src="assets/images/addFilter.svg" alt="" /></button>
              <button className="filter-btn">Manufacturing <img src="assets/images/addFilter.svg" alt="" /></button>
              <button className="filter-btn">Warehouse/Logistics<img src="assets/images/addFilter.svg" alt="" /></button>
              <button className="filter-btn">HouseKeeping/peon<img src="assets/images/addFilter.svg" alt="" /></button>
              <button className="filter-btn">Security Guard<img src="assets/images/addFilter.svg" alt="" /></button>
              <button className="filter-btn"><img src="assets/images/addFilter.svg" alt="" /> More</button>
            </div>

            <div className="salary-filter">
              <h4 className="filter-heading">Monthly Salary </h4>
              <div className="salary-container">
                <div className="sal-flt">
                  <input type="radio" />
                  <span>More Than &#8377; 10000</span>
                </div>
                <div className="sal-flt">
                  <input type="radio" />
                  <span>More Than &#8377; 15000</span>
                </div>
                <div className="sal-flt">
                  <input type="radio" />
                  <span>More Than &#8377; 25000</span>
                </div>
                <div className="sal-flt">
                  <input type="radio" />
                  <span>More Than &#8377; 40000</span>
                </div>
                <div className="sal-flt">
                  <input type="radio" />
                  <span>More Than &#8377; 50000</span>
                </div>
              </div>
            </div>

            <div className="experience-filter">
              <h4 className="filter-heading">Experience </h4>
              <div className="salary-container">
                <div className="sal-flt">
                  <input type="radio" />
                  <span>Fresher</span>
                </div>
                <div className="sal-flt">
                  <input type="radio" />
                  <span>less than 1 year</span>
                </div>
                <div className="sal-flt">
                  <input type="radio" />
                  <span>less than 2 year</span>
                </div>
                <div className="sal-flt">
                  <input type="radio" />
                  <span>less than 3 year</span>
                </div>
                <div className="sal-flt">
                  <input type="radio" />
                  <span>less than 4 year</span>
                </div>
                <div className="sal-flt">
                  <input type="radio" />
                  <span>More than 4 years</span>
                </div>
              </div>
            </div>

            <div className="gender-filter">
              <h4 className="filter-heading">Gender </h4>
              <div className="salary-container">
                <div className="sal-flt">
                  <input type="radio" />
                  <span>Jobs for Male</span>
                </div>
                <div className="sal-flt">
                  <input type="radio" />
                  <span>Jobs for Female</span>
                </div>
              </div>
            </div>

            <div className="qualifications-filter">
              <h4 className="filter-heading">Qualifications</h4>
              <div className="salary-container">
                <div className="sal-flt">
                  <input type="radio" />
                  <span>All Education levels</span>
                </div>
                <div className="sal-flt">
                  <input type="radio" />
                  <span>10th Pass and above</span>
                </div>
                <div className="sal-flt">
                  <input type="radio" />
                  <span>12th Pass and above</span>
                </div>
                <div className="sal-flt">
                  <input type="radio" />
                  <span>Diploma and above</span>
                </div>
                <div className="sal-flt">
                  <input type="radio" />
                  <span>Graduate and above</span>
                </div>
                <div className="sal-flt">
                  <input type="radio" />
                  <span>Graduate and above</span>
                </div>
              </div>
            </div>
            <button className="shining-btn-big">Clear All</button>
          </div>

        </div>

        <div className="jobs-card-container">
          <h2 className="job-count">{data.length} Total Openings </h2>
          <div className="job-list">
            {data.map((job, index) => (
              <JobCard setTrigger1={setTrigger1} key={index} job={job} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsPage;
















{/* <label htmlFor="">Experience:</label>
          <select name="" onChange={(e) => filterData(e.target.value)} id="">
            <option value="default">select</option>
            <option value="1-2">1-2</option>
            <option value="3-4">3-4</option>
            <option value="5-6">5-6</option>
            <option value="7-8">7-8</option>
          </select> */}