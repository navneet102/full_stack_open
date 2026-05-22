const Button = (props) => {
    return (
        <>
            <button onClick={() => props.setValue(props.value+1)}>{props.text}</button>
        </>
    )
}

export default Button