const Total = (props) => {
    console.log("this")
    return (
    <>
        <p>Total {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </>
    )
}

export default Total