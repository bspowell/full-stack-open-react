const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
const Content = (props) => {
  let arr = props.parts
  let exr = props.exercises

  return (
    <ul>
      {arr.map((ele, index) => {
      return <li key={index}>{ele} {exr[index]}</li>
      })}
    </ul>
  )
}
const Total = (props) => {
  let total = props.arr.reduce((acc, cv) => acc + cv, 0)

  return (
    <span>{total}</span>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content parts={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]}/> 
      <p>Number of exercises <Total arr={[exercises1, exercises2, exercises3]} /></p>
    </div>
  )
}

export default App