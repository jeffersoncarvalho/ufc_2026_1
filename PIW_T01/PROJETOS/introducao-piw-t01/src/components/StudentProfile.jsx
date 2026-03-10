import "./StudentProfile.css";


const StudentProfile = ({name, imgSrc, description}) => (
  <div className="student-card">
    <div className="student-title">
        <h2>{name}</h2>
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
