const CourseComp = (props) => {
  const name = props.course.name
  const parts = props.course.parts
  const total = props.course.parts.reduce((acc, curr) => acc + curr.exercises, 0)
  return (
    <>
    <h1>{name}</h1>
    {parts.map(part => {
      return <p key={part.id}>{part.name} {part.exercises}</p>
    })}
    <p><b>Total of {total} exercises</b></p>
    </>
  )
}

export default CourseComp