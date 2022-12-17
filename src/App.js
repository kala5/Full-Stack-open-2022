const Header = (course) => {
  return(
  <h1>{course.name}</h1>
  )
}

const Content = (lista) => {
  return(
  <>
    <p>
    {lista.lista[0].name} {lista.lista[0].exercises}
  </p>
  <p>
    {lista.lista[1].name} {lista.lista[1].exercises}
  </p>
  <p>
    {lista.lista[2].name} {lista.lista[2].exercises}
  </p>
  </>

  )
}

const Total = (lista) => {
  return (<p>Number of exercises {lista.lista[0].exercises+lista.lista[1].exercises+lista.lista[2].exercises}</p>)
}

const App = () => {
  const course = 'Half Stack application development'
  const lista = [
    { name: "Fundamentals of React", exercises: 10, },
    { name: "Using props to pass data", exercises: 7,},
    { name: "State of a component", exercises: 14, },]

  return (
    <div>
      <Header name={course}/>
      <Content lista={lista}/>
      <Total lista={lista}/>
    </div>
  )
}

export default App