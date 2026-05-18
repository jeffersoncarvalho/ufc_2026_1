import ChildComponent from "./ChildComponent"

const ParentComponent = () => {
    return (
        <ChildComponent titulo="Aula de Props"/>

    )
}

function MyA() {
    return (
        <div>

        </div>
    )
}

function MyB() {
    return <>

    </>
}
export {ParentComponent, MyA, MyB}