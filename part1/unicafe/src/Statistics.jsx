const StatisticLine = (props) => {
    if(props.text === "positive") return (
            <tbody>
            <tr>
                <td>{props.text}</td>
                <td>{props.value} %</td>
            </tr>
            </tbody>
    )

    return (
            <tbody>
            <tr>
                <td>{props.text}</td>
                <td>{props.value}</td>
            </tr>
            </tbody>
    )
}

const Statistics = (props) => {
    if(props.all === 0) return (
        <>
        <div>No feedback given</div> 
        </>
    )
    return (
    <table>
      <StatisticLine text = "good" value = {props.good}/>
      <StatisticLine text = "neutral" value = {props.neutral}/>
      <StatisticLine text = "bad" value = {props.bad}/>
      <StatisticLine text = "all" value = {props.all}/>
      <StatisticLine text = "average" value = {(props.good - props.bad) / (props.all)}/>
      <StatisticLine text = "positive" value = {props.good * 100 / props.all}/>
    </table>
    )
}

export default Statistics