import StudentProfile from "./StudentProfile"

const StudentProfileList = () => {

    const studentDataBase = [
        {name:"Michel Sales", monitor:false, description:"Bla bla bla bla", imgSrc:"https://www.quixada.ufc.br/wp-content/uploads/2015/05/Michel-Sales-Bomfim2-225x300.png"},
        {name:"Marcos Devaner", monitor:false, description:"Bla bla bla", imgSrc:"https://www.quixada.ufc.br/wp-content/uploads/2025/04/A32C182B-10EA-43D8-B0D8-641CD7AA13B9-e1744216837461-213x300.jpg"},
        {name:"Márcio Espíndola", monitor:true, description:"Bla bla bla bla bleh", imgSrc:"https://www.quixada.ufc.br/wp-content/uploads/2015/05/Marcio-Espindola-Freire-Maia1-225x300.png"},
        {name:"Michel Sales", monitor:false, description:"Bla bla bla bla", imgSrc:"https://www.quixada.ufc.br/wp-content/uploads/2015/05/Michel-Sales-Bomfim2-225x300.png"},
        {name:"Marcos Devaner", monitor:false, description:"Bla bla bla", imgSrc:"https://www.quixada.ufc.br/wp-content/uploads/2025/04/A32C182B-10EA-43D8-B0D8-641CD7AA13B9-e1744216837461-213x300.jpg"},
        {name:"Márcio Espíndola", monitor:false, description:"Bla bla bla bla bleh", imgSrc:"https://www.quixada.ufc.br/wp-content/uploads/2015/05/Marcio-Espindola-Freire-Maia1-225x300.png"},
        {name:"Michel Sales", monitor:false, description:"Bla bla bla bla", imgSrc:"https://www.quixada.ufc.br/wp-content/uploads/2015/05/Michel-Sales-Bomfim2-225x300.png"},
        {name:"Marcos Devaner", monitor:false, description:"Bla bla bla", imgSrc:"https://www.quixada.ufc.br/wp-content/uploads/2025/04/A32C182B-10EA-43D8-B0D8-641CD7AA13B9-e1744216837461-213x300.jpg"},
        {name:"Márcio Espíndola", monitor:false, description:"Bla bla bla bla bleh", imgSrc:"https://www.quixada.ufc.br/wp-content/uploads/2015/05/Marcio-Espindola-Freire-Maia1-225x300.png"},
        {name:"Michel Sales", monitor:false, description:"Bla bla bla bla", imgSrc:"https://www.quixada.ufc.br/wp-content/uploads/2015/05/Michel-Sales-Bomfim2-225x300.png"},
        {name:"Marcos Devaner", monitor:false, description:"Bla bla bla", imgSrc:"https://www.quixada.ufc.br/wp-content/uploads/2025/04/A32C182B-10EA-43D8-B0D8-641CD7AA13B9-e1744216837461-213x300.jpg"},
        {name:"Márcio Espíndola", description:"Bla bla bla bla bleh", imgSrc:"https://www.quixada.ufc.br/wp-content/uploads/2015/05/Marcio-Espindola-Freire-Maia1-225x300.png"}
    ]

    return (
        <div style={{display:"flex", gap:"15px", flexWrap:"wrap"}}>
            {
                  studentDataBase.map(
                    ({name, imgSrc, description, monitor}) => <StudentProfile 
                                    name={name}
                                    imgSrc={imgSrc}
                                    description={description}
                                    monitor={monitor}
                                 />
                  )
            }
        </div>
    )
}

export default StudentProfileList