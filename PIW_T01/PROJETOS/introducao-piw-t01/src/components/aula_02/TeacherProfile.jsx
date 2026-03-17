import "./TeacherProfile.css";

const TeacherProfile = ({ name, imgSrc, description, title }) => (
  <div className="teacher-card">
    <div className="teacher-title">
      <h2>
        {name}-{title}
      </h2>
    </div>
    <div className="teacher-picture">
      <img src={imgSrc} alt={"Esse é o professor " + name} width="150" />
    </div>
    <div className="teacher-description">{description}</div>
  </div>
);

export default TeacherProfile;