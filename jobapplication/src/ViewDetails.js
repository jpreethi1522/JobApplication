import React from 'react';
import { Link } from 'react-router-dom';

import './ViewDetails.css';

function ViewDetails() {
  return (
    <div>
      <header>
        <div className="header-container">
          <div className="header-content">
            <div className="logo-container">
              <span className="logo">F</span>
            </div>
            <div className="job-details">Dot Net Full Stack Developer  <div className="oval">Job ID: 69246</div></div>
            <div className="d-flex align-items-center mt-2">
              <div className="turn-grey">
                <p><i className="fas fa-map-marker-alt"></i> Bengaluru, India &nbsp; &nbsp; &nbsp; <i className="far fa-calendar-alt"></i> 4-6 years</p>
              </div>
            </div>
            <div className="button-container">
        <button className="button save-button">
          <b>See all jobs</b>
        </button>
        <Link to="/Apply">
          <button className="button apply-button">Apply</button>
        </Link>
      </div>
          </div>
        </div>
      </header>
      <br /><br /><br /><br />
      <div className="job-details-container">
        <div className="job-details-left">
          <p>
            <b>Designation:</b> Dotnet Developer<br></br>
            <b>Department:</b> Software<br></br>
            <b>Work Location:</b> Bangalore<br></br>
            <b>Experience:</b> 3 to 7 years<br></br>
            <b>Roles & Responsibilities:</b><br></br>
Translate application storyboards and use cases into functional applications by<br></br>
understanding the project requirements.<br></br>
Design, build and maintain efficient, reusable, and reliable code.<br></br>
Ensure the best possible performance, quality, and responsiveness of applications.<br></br>
Identify bottlenecks and bugs, and devise solutions to mitigate and address these issues.<br></br>
Help maintain code quality, organization, and automatization.<br></br>
Work as a part of agile team by collaborating with the software team.<br></br>
<b>Eligibility:</b><br></br>
3 to 7 years of total experience required.<br></br>
Excellent written and verbal communication skill<br></br>
Proficient in C#<br></br>
Proficient in OOPS concepts<br></br>
Proficient in MVC.<br></br>
Proficient in ASP.NET Core 3.1, .Net 5.0<br></br>
Proficient in LINQ<br></br>
Proficient in <b>Angular Or react JS</b><br></br>
Entity Framework 6 and EF Core<br></br>
Microsoft SQL Server<br></br>
Modern web development with HTML5 and CSS<br></br>
Experience in WebAPI<br></br>
Unit and integration testing with MS Unit or NUnit<br></br>
Familiar with various design and architectural patterns<br></br>
Knack for writing clean, readable, and easily maintainable code.<br></br>
Understanding of fundamental design principles for building a scalable application<br></br>
Experience with Agile development using SCRUM methodology.<br></br>
Individual contributor and ability to perform with minimum guidance.<br></br>
Sound knowledge and experience in SOLID principles and industry best practices using<br></br>
Microsoft Technologies is must.<br></br>
Experience in RESTful services<br></br>
Experience in Azure<br></br>
          </p>
        </div>
        <div className="job-details-right">
          <h5>Workplace Type</h5>
          <p style={{ color: '#7c7c7c' }}>Hybrid</p>
          <h5>Employment Type</h5>
          <p style={{ color: '#7c7c7c' }}>Full-Time</p>
          <h5>Experience Level</h5>
          <p style={{ color: '#7c7c7c' }}>Associate</p>
          <h5>Annual Compensation</h5>
          <p style={{ color: '#7c7c7c' }}>INR 1,000,000 - 1,200,000</p>
          <h5>Work Experience (years)</h5>
          <p style={{ color: '#7c7c7c' }}>4 - 6 years</p>
          <h5>Skills</h5>
          <p>Solid Principles    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Angular<br></br>
            Ef Core       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     Nunit<br></br>
            ScrumMethodology   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      html5<br></br>
            Azure   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     MicrosoftSqlServer<br></br>
            Mvc     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     AgileDevelopment     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    Linuq
            <br></br>   C#    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      MsUnit   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    RestfulServices
            <br></br> Css &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     .Net 5.0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br></br> Entity   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Framework 6         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; .Net
            <br></br> Oops Concept   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      ReactJs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br></br> Asp.Net Core 3.1    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       Webapi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
          <br /><br />
        </div>
      </div>
      <footer>
        <div>Hiring Powered By</div>
        <div>
          <a href="https://pyjamahr.com/?utm_source=careerpage&utm_medium=poweredby&utm_campaign=Findfinity&referrer=careerpage" style={{ color: '#87CEEB', textDecoration: 'none' }}>PyjamaHR</a>
        </div>
      </footer>
    </div>
  );
}

export default ViewDetails;
