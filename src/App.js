import { useState } from 'react'
  
const StatisticLine = ({text, value}) => {
  return (
    <tr>
        <td>
          {text}
        </td>
        <td>
          {value}
        </td>
    </tr>)
}

const Button = ({ onClick, teksti }) => (
  <button onClick={onClick}>{teksti}</button>
)

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad

  if(all === 0){ return(<div>no feedback given</div>) }

  const average = (good-bad)  /  (good + neutral + bad)
  const positive = good/(good+neutral+bad)*100

  return(<>
    <StatisticLine text="good" value={good}/>
    <StatisticLine text="neutral" value={neutral}/>
    <StatisticLine text="bad" value={bad}/>
    <StatisticLine text="all" value={all}/>
    <StatisticLine text="average" value={average}/>
    <StatisticLine text="positive" value={positive}/>
  </>)
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
        <Button onClick={() => setGood(good + 1)} teksti="good"/>
        <Button onClick={() => setNeutral(neutral + 1)} teksti="neutral"/>
        <Button onClick={() => setBad(bad + 1)} teksti="bad"/>

        <h1>statistics</h1>
        <table>
          <Statistics good={good} bad={bad} neutral={neutral}/>
        </table>
        
    </div>
  )
}

export default App