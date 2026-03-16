import { useState } from "react"

import "./FormComponent.css"

const FormComponent = () => {

    const [form, setForm] = useState({name:"",age:0})

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Nome: ${form.name}, Idade: ${form.age}.`)
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="field">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={
                        (e) => {
                            console.log(e.target.value)
                            setForm({...form, name: e.target.value})

                        }
                    }
                />
            </div>
            <div className="field">
                <label htmlFor="age">Idade</label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    value={form.age}
                    onChange={
                        (e) => {
                            console.log(e.target.value)
                            setForm({...form, age: e.target.value})
                        }
                    }
                />
            </div>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default FormComponent