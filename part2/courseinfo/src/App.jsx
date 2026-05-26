const Header = (props) => <h2>{props.course}</h2>

const Content = (props) => {
  return (
  <div>
    {props.parts.map((part) => (
      <Part part={part} key={part.id}/>
    ))}
  </div>
)
}

const Part = (props) => {
  console.log(props)
  return (<p>
    {props.part.name} {props.part.exercises}
  </p>)
}

const Total = (props) => <p>Number of exercises {props.total}</p>

const Course = (props) => {
  const course = props.course

  return (
    <>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      {/* <Total total={course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises}/> */}
      <Total total={course.parts.reduce((a, c) => (a+c.exercises), 0)}/>
    </>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
  <>
    <h1>Web development curriculum</h1>
    <Course course={courses[0]} />
    <Course course={courses[1]} />
  </>
  )
}

export default App