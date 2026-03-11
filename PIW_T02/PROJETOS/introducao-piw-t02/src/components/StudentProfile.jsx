import "./StudentProfile.css";

function selectMonitor(monitor) {
  if (monitor) return {borderColor:"red"}
  return {}
}

const StudentProfile = ({name, imgSrc, description, monitor}) => (


  <div className="student-card" style={selectMonitor(monitor)}>
    <div className="student-title">
        
      <h2>{name}</h2>
    </div>
    <div className="student-photo">
      <img
        src={imgSrc}
        alt={`Este é o estudante ${name}`}
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
