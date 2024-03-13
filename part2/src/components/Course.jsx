const Course = (props) => {
  const courses = props.course
  const parts = []
  courses.forEach(course => {
    parts.push(course.parts)
  })

  return (
    <div>
    {courses.map((core, index) => {
      const partsNew = parts[index].map((obj) => {
            return <p key={obj.id}>{obj.name} {obj.exercises}</p>
          })
        
      const total = parts[index].reduce((accum, cv) => accum + cv.exercises, 0)
      return (
        <div>
          <h1>{core.name}</h1>
          {partsNew}
          <p>Total num of exercises: {total}</p>
        </div>
      )
    })}
    </div>
  )
}

export default Course