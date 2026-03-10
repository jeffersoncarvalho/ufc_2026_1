import "./StudentProfile.css";


const StudentProfile = ({name, imgSrc, description, monitor}) => (
  <div className="student-card" style={monitor?{borderColor:"red"}:{borderColor:"#1B3A5C"}}>
    <div className="student-title">
        <h2>{name} {monitor}</h2>
    </div>
    <div className="student-picture">
      <img src={imgSrc} 
           alt= {"Esse é o estudante " + name}
           width="150"
           />
    </div>
    <div className="student-description">
      {description}
    </div>
  </div>
);

export default StudentProfile;
