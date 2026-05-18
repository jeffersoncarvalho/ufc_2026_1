function consumirAPI() {
    fetch("http://localhost:3000/api/piwt02/professor")
    .then(
        (res) => {
            console.log(res)
        }
    )
}