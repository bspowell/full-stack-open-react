const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
const Content = (props) => {
  let arr = props.parts

  return (
    <ul>
      {arr.map((ele, index) => {
      return <li key={index}>{ele.name}: {ele.exercises}</li>
      })}
    </ul>
  )
}
const Total = (props) => {
  let total = props.parts.reduce((acc, cv) => acc + cv.exercises, 0)

  return (
    <span>Total Exercises: {total}</span>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App