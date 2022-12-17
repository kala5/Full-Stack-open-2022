const Header = (course) => {
  return(
  <h1>{course.name}</h1>
  )
}

const Part = (tiedot) => {
  return(
    <p>
      {tiedot.tiedot.name} {tiedot.tiedot.exercises}
    </p>
  )
}

const Content = (lista) => {
    return (
      <div>
        <Part tiedot={lista.lista[0]}/>
        <Part tiedot={lista.lista[1]}/>
        <Part tiedot={lista.lista[2]}/>
      </div>
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