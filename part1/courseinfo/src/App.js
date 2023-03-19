const Header = (course) => {
  return (
    <div>
      <h1>{course.course}</h1>
    </div>
  )
}

const Part = (details) => {
  return (
    <div>
      <p>
        {details.part} {details.exercise}
      </p>
    </div>
  )
}

const Content = (infos) => {
  return (
    <div>
      <Part part={infos.parts[0].name} exercise={infos.parts[0].exercises} />
      <Part part={infos.parts[1].name} exercise={infos.parts[1].exercises} />
      <Part part={infos.parts[2].name} exercise={infos.parts[2].exercises} />
    </div>
  )
}

const Total = (exercises) => {
  return (
    <div>
      Number of exercises {exercises.count[0].exercises + exercises.count[1].exercises + exercises.count[2].exercises}
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total count={course.parts} />
    </div>
  )
}

export default App;
