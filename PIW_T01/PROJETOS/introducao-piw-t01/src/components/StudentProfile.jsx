import "./StudentProfile.css";


const StudentProfile = () => (
  <div className="student-card">
    <div className="student-title">
        <h2>Jefferson de Carvalho</h2>
    </div>
    <div className="student-picture">
      <img src="https://www.quixada.ufc.br/wp-content/uploads/2015/05/Jefferson-de-Carvalho-Silva1-225x300.png" 
           alt="Foto do Estudante Jefferson" 
           width="150"
           />
    </div>
    <div className="student-description">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
      voluptates quo vel! Placeat ipsam deserunt quo ex similique, qui quos,
      odio maiores beatae reiciendis officiis sapiente. Et similique possimus
      soluta.
    </div>
  </div>
);

export default StudentProfile;
