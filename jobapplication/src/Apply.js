import React, { useState } from 'react';
import './Apply.css'; 
import PhoneInput from 'react-phone-input-2';
import { Link } from 'react-router-dom';


import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

import 'react-phone-input-2/lib/style.css';
import { MDBInputGroup } from 'mdb-react-ui-kit';
import { Form, Row, Col, Button } from 'react-bootstrap';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { v4 as uuidv4 } from 'uuid'; 

const AddButton = ({ onClick }) => (
    <Button
        variant="outline-primary"
        className="add-button"
        onClick={onClick}
    >
        +
    </Button>
);

const RemoveButton = ({ onClick }) => (
    <Button
        variant="danger"
        className="remove-button"
        onClick={onClick}
    >
         <i className="fas fa-trash" style={{ borderRadius: '20px',size:'2px' }}></i>
    </Button>
);

function Apply() {
    
    const [phoneNumbers, setPhoneNumbers] = useState(['']); 
    const [phoneValidations, setPhoneValidations] = useState([true]); 

    const [valid, setValid] = useState([true]); 
    const [emails, setEmails] = useState(['']); 
    const [emailValidations, setEmailValidations] = useState([true]); 

    const [isRecentGraduate, setIsRecentGraduate] = useState(false); 
    const [isCurrentlyWorking, setIsCurrentlyWorking] = useState(false);
    const [workExperiences, setWorkExperiences] = useState([
        {
            id: uuidv4(), 
            companyName: '',
            jobTitle: '',
            isCurrentlyWorking: false,
        }
    ]);
    const [selectedSkills, setSelectedSkills] = useState([]); 
   
    const [uploadedFile, setUploadedFile] = useState(null); 
    const [formValid, setFormValid] = useState(false);
    const [firstName, setFirstName] = useState(''); 
    const [lastName, setLastName] = useState(''); 
    const[expectedSalary,setExpectedSalary]=useState('');
    const[currentCTC,setCurrentCTC]=useState('');
const[noticePeriod,setNoticePeriod]=useState('');

const notify = () => toast.error('Please fill in all details.');


    const checkFormValidity = () => {
        const isPhoneValid = phoneValidations.every(valid => valid);
        const isEmailValid = emailValidations.every(valid => valid);
        const isWorkExperienceValid = workExperiences.every(exp => exp.contactName && exp.jobTitle);
        const isSkillsValid = selectedSkills.length > 0;
        const isFileUploaded = uploadedFile !== null;

        setFormValid(isPhoneValid && isEmailValid && isWorkExperienceValid && isSkillsValid && isFileUploaded);
    };
    const handleSkillSelect = (e) => {
        const skill = e.target.value;
        if (!selectedSkills.includes(skill)) {
          setSelectedSkills([...selectedSkills, skill]); 
        }
      };
    
      const handleSkillRemove = (skillToRemove) => {
        setSelectedSkills(selectedSkills.filter((skill) => skill !== skillToRemove)); 
      };
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            console.log('Uploaded file:', file);
            setUploadedFile(file.name); 
            checkFormValidity(); 

        }

    };
    const handleSubmit = (e) => {
        e.preventDefault(); 
        
        const firstNameValue = document.getElementById('firstName') ? document.getElementById('firstName').value : '';
        const lastNameValue = document.getElementById('lastName') ? document.getElementById('lastName').value : '';
        const currentCTCValue = document.getElementById('currentCTC') ? document.getElementById('currentCTC').value : '';
        const expectedSalaryValue = document.getElementById('expectedSalary') ? document.getElementById('expectedSalary').value : '';
        const noticePeriodValue = document.getElementById('noticePeriod') ? document.getElementById('noticePeriod').value : '';
    
        console.log("First Name:", firstNameValue);
        console.log("Last Name:", lastNameValue);
        console.log("Phone Numbers:", phoneNumbers);
        console.log("Emails:", emails);
        console.log("Work Experiences:", workExperiences);
        console.log("Selected Skills:", selectedSkills);
        console.log("Current CTC:", currentCTCValue);
        console.log("Expected Salary:", expectedSalaryValue);
        console.log("Notice Period:", noticePeriodValue);
        console.log("Uploaded File:", uploadedFile);
        
        const isFormFilled = (
            firstNameValue &&
            lastNameValue &&
            phoneNumbers.every(phone => phone) &&
            workExperiences.every(exp => exp.jobTitle && exp.companyName) &&
            selectedSkills.length > 0 &&
            currentCTCValue &&
            expectedSalaryValue &&
            noticePeriodValue &&
            uploadedFile
        );
    
        if (isFormFilled) {
            window.location.href = '/ThankYouPage';
        } else {
            notify();
        }
    };
    const handleChange = (value, index) => {
        const updatedPhoneNumbers = [...phoneNumbers];
        updatedPhoneNumbers[index] = value;
        setPhoneNumbers(updatedPhoneNumbers);
        setPhoneValidations((prevValidations) => {
            const updatedValidations = [...prevValidations];
            updatedValidations[index] = validatePhoneNumber(value);
            return updatedValidations;
        });
        checkFormValidity(); 
    };
    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };
    const handleEmailChange = (value, index) => {
        const updatedEmails = [...emails];
        updatedEmails[index] = value;
        setEmails(updatedEmails);
        setEmailValidations((prevValidations) => {
            const updatedValidations = [...prevValidations];
            updatedValidations[index] = validateEmail(value);
            return updatedValidations;
        });
        checkFormValidity(); 
    };


    const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPattern = /^\d{10}$/; 
        return phoneNumberPattern.test(phoneNumber);
    };

    const addPhoneNumber = () => {
        setPhoneNumbers((prevPhoneNumbers) => [...prevPhoneNumbers, '']);
        setValid((prevValid) => [...prevValid, true]);
    };

    const removePhoneNumber = (index) => {
        const updatedPhoneNumbers = [...phoneNumbers];
        updatedPhoneNumbers.splice(index, 1);
        setPhoneNumbers(updatedPhoneNumbers);
        setValid((prevValid) => {
            const updatedValid = [...prevValid];
            updatedValid.splice(index, 1);
            return updatedValid;
        });
    };

    const addEmail = () => {
        setEmails((prevEmails) => [...prevEmails, '']);
    };

    const removeEmail = (index) => {
        const updatedEmails = [...emails];
        updatedEmails.splice(index, 1);
        setEmails(updatedEmails);
    };

    const toggleRecentGraduate = () => {
        setIsRecentGraduate((prevIsRecentGraduate) => !prevIsRecentGraduate);
    };

    const handleCurrentlyWorkingChange = (e) => {
        setIsCurrentlyWorking(e.target.checked);
    };

    const handleWorkExperienceCheckboxChange = (e, index) => {
        const { checked } = e.target;
        setWorkExperiences((prevExperiences) => {
            const updatedExperiences = [...prevExperiences];
            updatedExperiences[index].isCurrentlyWorking = checked;
            return updatedExperiences;
        });
    };
    
    const handleWorkExperienceInputChange = (e, index, field) => {
        const { value } = e.target;
        setWorkExperiences((prevExperiences) => {
            const updatedExperiences = [...prevExperiences];
            updatedExperiences[index][field] = value;
            return updatedExperiences;
        });
        checkFormValidity();
    };
    
    const addWorkExperienceField = () => {
        setWorkExperiences((prevExperiences) => [
            ...prevExperiences,
            {
                id: uuidv4(),
                companyName: '',
                jobTitle: '',
                isCurrentlyWorking: false,
            },
        ]);
    };
    
    const removeWorkExperienceField = (id) => {
        setWorkExperiences((prevExperiences) =>
            prevExperiences.filter((experience) => experience.id !== id)
        );
    };
    
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
                        </div>
                    </div>
                </div>
            </header>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            
            <div className="heading1">
  <h3>Autofill your application</h3>
  <p>Upload your Resume or CV in seconds with the autofill option.</p>
</div>

            <div className="upload-container">

                <div className="upload-box">
                    <input type="file" id="file" accept=".doc,.docx,.pdf" onChange={handleFileUpload} />
                    <label htmlFor="file" className="upload-label">
                    {uploadedFile ? uploadedFile : 'Upload your resume or drag and drop it here'}
                    </label>
                </div>
            </div>
            <div>
           
            <ToastContainer />
          
        </div>
           
            <div className="form-container">
                <Form>
                    <Row>
                    <Col>
                    <label>First Name</label>
                    <Form.Control
    type="text"
    placeholder="Enter first name"
    value={firstName}
    onChange={(e) => setFirstName(e.target.value)}
    required
    id="firstName"

/>
</Col>
<Col>
<label>Last name</label>
<Form.Control
    type="text"
    placeholder="Enter last name"
    value={lastName}
    onChange={(e) => setLastName(e.target.value)}
    required
    id="lastName"

/>
</Col>
                    </Row>
                    <Row>
                        <Col>
                        <div className="phone-input-container">
    {phoneNumbers.map((phoneNumber, index) => (
        <div key={index} className="phone-input-wrapper">
            <label>
                Phone Number:
                <PhoneInput
                    country={'us'}
                    value={phoneNumber}
                    onChange={(value) => handleChange(value, index)}
                    inputProps={{
                        required: true,
                    }}
                />
                {!valid[index] && <p>Please enter a valid 10-digit phone number.</p>}
            </label>
            <div className="add-remove-buttons">
                {index === 0 ? <AddButton onClick={addPhoneNumber} /> : <><AddButton onClick={addPhoneNumber} /><RemoveButton onClick={() => removePhoneNumber(index)} /></>}
            </div>
        </div>
    ))}
</div>
                        </Col>
                        <Col>
                            <div className="email-input-container">
                                {/* Email input fields */}
                                {emails.map((email, index) => (
                                    <div key={index}  className="phone-input-wrapper">
                                        <label>
                                            Email:
                                            <div className="email-input-wrapper">
                                                <MDBInputGroup textBefore={<i className="fas fa-envelope"></i>} className='mb-5'>
                                                    <input className='form-control' type='text' placeholder="Recipient's username" required />
                                                </MDBInputGroup>
                                            </div>
                                            <div className="add-remove-buttons2">
                                                {index === 0 ? <AddButton onClick={addEmail} /> : <><AddButton onClick={addEmail} /><RemoveButton onClick={() => removeEmail(index)} /></>}
                                            </div>
                                        </label>
                                    </div>
                                   
                                ))}
                            </div>
                        </Col>
                    </Row>
                    <Row>
            <Col>
                <label>
                    Work Experience
                </label>
            </Col>
            <Col>
                {/* Toggle for recent graduate */}
                <div className="toggle-align">
                <div className="custom-control custom-switch">
                    <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customSwitch1"
                        checked={isRecentGraduate}
                        onChange={toggleRecentGraduate}
                    />
                    <label className="custom-control-label" htmlFor="customSwitch1">I am a recent graduate</label>
                </div>
                </div>
            </Col>
        </Row>
{!isRecentGraduate && (
<div className='shouldHide'>
{/* Add Work Experience Button */}
{workExperiences.map((experience, index) => (
    <Row key={experience.id}>
        <Form.Group as={Col} controlId={`jobTitle-${index}`}>
            <Form.Label>Job Title</Form.Label>
            <Form.Control
                type="text"
                placeholder="Enter job title"
                value={experience.jobTitle}
                onChange={(e) => handleWorkExperienceInputChange(e, index, 'jobTitle')}
            />
        </Form.Group>
        <Form.Group as={Col} controlId={`companyName-${index}`}>
            <Form.Label>Company Name</Form.Label>
            <Form.Control
    type="text"
    placeholder="Enter company name"
    value={experience.companyName} 
    onChange={(e) => handleWorkExperienceInputChange(e, index, 'companyName')} 
/>
        </Form.Group>
        <Col>
            <div className="calendar">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                        components={[
                            'DatePicker',
                            'MobileDatePicker',
                            'DesktopDatePicker',
                            'StaticDatePicker',
                        ]}
                    >
                        <div className="date-pickers-container">
                            <DemoItem label="Start Date">
                                <MobileDatePicker  />
                            </DemoItem>
                            {!experience.isCurrentlyWorking && (
                                <div className='enddate'>
                                    <DemoItem label="End Date">
                                        <MobileDatePicker />
                                    </DemoItem>
                                </div>
                            )}
                        </div>
                    </DemoContainer>
                </LocalizationProvider>
            </div>
        </Col>
        <Col>
            <Form.Check
                type="checkbox"
                label="I currently work here"
                checked={experience.isCurrentlyWorking}
                onChange={(e) => handleWorkExperienceCheckboxChange(e, index)}
            />
        </Col>
        {workExperiences.length > 1 && (
    <Button
        variant="outline-danger" // Red border
        style={{ backgroundColor: 'white', color: 'red', border: 'none', padding: '15px' }} 
        onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'red'; 
            e.target.style.color = 'white'; 
        }}
        onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'white'; 
            e.target.style.color = 'red'; 
        }}
        onClick={() => removeWorkExperienceField(experience.id)}
    >
        <i className="fas fa-trash" style={{ borderRadius: '20px' }}></i> 
    </Button>
)}
    </Row>
))}
<Row>
    <Col>
        <Button onClick={addWorkExperienceField}>Add Work Experience</Button>
    </Col>
</Row>
</div>
)}
<Row>
<Col>
<Row>
                <Col>
                    <label>Skills</label>
                    {/* Dropdown for selecting skills */}
                    <div className="col-md-6">
                        <select className="form-control" onChange={handleSkillSelect}>
                            <option value="">Select Skills</option>
                            <option value="Python">Python</option>
                            <option value="Java">Java</option>
                            <option value="React">React</option>
                            <option value="C">C</option>
                            <option value="C++">C++</option>
                            <option value="HTML">HTML</option>
                            <option value="CSS">CSS</option>
                            <option value="Javascript">Javascript</option>
                            <option value="MongoDB">MongoDB</option>
                            <option value="MySQL">MySQL</option>
                            <option value="R">R</option>
                        </select>
                    </div>
                    {/* Display selected skills */}
                    <div className="selected-skills-container custom-color">
    <div className="selected-skills">
        {selectedSkills.map((skill) => (
            <div key={skill} className="selected-skill">
                {skill}
                <span onClick={() => handleSkillRemove(skill)}>
                    <RemoveButton />
                </span>
            </div>
        ))}
    </div>
</div>
                </Col>
            </Row>
                </Col>
                <Form.Group as={Col} controlId="currentCTC">
    <Form.Label>Current CTC</Form.Label>
    <Form.Control
        type="number"
        placeholder="Enter current CTC"
        value={currentCTC}
        onChange={(e) => setCurrentCTC(e.target.value)}
        required
    /></Form.Group>

                    </Row>
                    <Row>
                    <Form.Group as={Col} controlId="expectedSalary">
    <Form.Label>Expected Salary</Form.Label>
    <Form.Control
        type="number"
        placeholder="Enter expected salary"
        value={expectedSalary}
        onChange={(e) => setExpectedSalary(e.target.value)}
        required
    />
</Form.Group>
<Form.Group as={Col} controlId="noticePeriod">
    <Form.Label>Notice Period (days)</Form.Label>
    <Form.Control
        type="number"
        placeholder="Enter notice period"
        value={noticePeriod}
        onChange={(e) => setNoticePeriod(e.target.value)}
        required
    />
</Form.Group>
                    </Row>
<Row>
    <div>
    <label>Resume</label>
    <div className="upload-container1">
   
                <div className="upload-box">
                    
                <input type="file" id="file" accept=".doc,.docx,.pdf" onChange={handleFileUpload} />
                    <label htmlFor="file" className="upload-label">
                    {uploadedFile ? uploadedFile : 'Browse'}
                    </label>
                </div>
            </div>
    </div>
</Row>
<hr className="horizontal-line" />


<Row>
        <Col>
            <Button className="button apply-button" onClick={handleSubmit}>Submit Application</Button>
        </Col>
    </Row>

                </Form>
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

export default Apply;
