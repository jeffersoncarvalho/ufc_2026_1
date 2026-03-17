import TeacherProfile from "./TeacherProfile";

const TeacherProfileList = () => {
  const teacherDataBase = [
    {
      name: "Charmeleon",
      monitor: false,
      description: "Bla bla bla bla bla",
      imgSrc:
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/005.png",
    },
    {
      name: "Pedro Botelho",
      monitor: true,
      description: "Bla bla ble ble bla",
      imgSrc:
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/009.png",
    },
    {
      name: "Paulo Armando",
      monitor: false,
      description: "Bla bla bla vla vla vla",
      imgSrc:
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/011.png",
    },
  ];

  return (
    <>
      {teacherDataBase.map((teacher) => (
        <TeacherProfile
          name={teacher.name}
          imgSrc={teacher.imgSrc}
          description={teacher.description}
          title={teacher.title}
        />
      ))}
    </>
  );
};

export { TeacherProfileList };
