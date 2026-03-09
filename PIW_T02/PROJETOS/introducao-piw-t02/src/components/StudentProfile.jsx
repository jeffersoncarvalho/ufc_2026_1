import "./StudentProfile.css";

const StudentProfile = ({name, imgSrc, imgAlt, description}) => (
  <div className="student-card">
    <div className="student-title">
        
      <h2>{name}</h2>
    </div>
    <div className="student-photo">
      <img
        src={imgSrc}
        alt={imgAlt}
      />
    </div>
    <div className="student-description">
      <p>
        {description}
      </p>
    </div>
  </div>
);

export default StudentProfile;
