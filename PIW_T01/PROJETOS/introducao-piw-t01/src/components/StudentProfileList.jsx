import StudentProfile from "./StudentProfile"

const StudentProfileList = () => {

    
    const studentDataBase = [
        {name:"Paulo Henrique", monitor:false, description:"Bla bla bla bla bla", imgSrc:"https://www.quixada.ufc.br/wp-content/uploads/2015/05/Paulo-Henrique-225x300.png"},
        {name:"Pedro Botelho", monitor:true, description:"Bla bla ble ble bla", imgSrc:"https://www.quixada.ufc.br/wp-content/uploads/2025/06/Foto-de-Pedro-Botelho-1-2-e1750770352617-128x150.jpg"},
        {name:"Paulo Armando", monitor:false, description:"Bla bla bla vla vla vla", imgSrc:"https://www.quixada.ufc.br/wp-content/uploads/2016/12/foto-254x300-1-127x150.jpg"}
    ]


    return (
        <>
            {
                studentDataBase.map(
                    (student) => <StudentProfile 
                        name={student.name}
                        imgSrc={student.imgSrc}
                        description={student.description}
                        monitor={student.monitor}
                    />
                )

            }
        </>
    )
}

export default StudentProfileList