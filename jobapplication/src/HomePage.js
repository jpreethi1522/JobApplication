import React from 'react';
import './App.css'; 
class Findfinity extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
    };
 }

 render() {
    return (
      <div>
        <header>
          <div className="header-container">
              <div className="header-content">
                  <div className="logo-container">
                      <span className="logo">F</span>
                  </div>
                  <div className="job-details">Findfinity</div>
              </div>
          </div>
        </header>
        <br/><br/><br/><br/><br/>
        <div className="container">
          <p className="mt-2">Findfinity innovative products, backed by an industry-leading tech stack, are designed especially for Recruitment Consulting Firms and Staffing Companies to meet their Talent Management via our products. With these solutions, Findfinity enables companies to hire better talent faster. BIGHUB is your one-stop cloud-based AI Powered software for all things related to Recruitment Business! Now you can have: Teams coordinated! Recruitment streamlined! Business automated! Why BIGHUB??? • TAT will reduce by 80% • Conflicts will reduce by 75% • Reduce cost by 50% • Increased requisition handling capacity of recruiter from 3 to 5+ • Increase your own Talent Bank by 50% • Improved Recruitment efficiency by 50%</p>
          <p>Contact info: <a href="https://findfinity.in">findfinity.in</a></p>
          <hr className="line" />
          <div className="d-flex align-items-center justify-content-between mt-4">
            <div>Careers at Findfinity</div>
            <div className="input-group" style={{ width: 200 }}>
              <input type="text" className="form-control" placeholder="Search" />
              <div className="input-group-append">
               <button className="btn btn-outline-secondary" type="button">
                  <i className="fas fa-search"></i>
               </button>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <select className="form-control">
               <option value="">Select Department</option>
              </select>
            </div>
            <div className="col-md-6">
              <select className="form-control">
               <option value="">Select Location</option>
               <option value="">Bangalore, Karnataka, India</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <div className="container container-shadow">
              <div className="font-weight-bold">Dot Net Full Stack Developer <div className="oval">Job ID: 69246</div></div>
              <div className="d-flex align-items-center mt-2">
               <p><i className="fas fa-map-marker-alt"></i> Bengaluru, India &nbsp; &nbsp; &nbsp; <i className="far fa-calendar-alt"></i> 4-6 years</p>
               <a href="/ViewDetails" className="btn btn-success ml-auto">View Details</a>
              </div>
            </div>
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
}

export default Findfinity;
