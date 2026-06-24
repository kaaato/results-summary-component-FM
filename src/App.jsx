import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Card from './components/Card'
import ScoreCard from './components/ScoreCard'
import Icon from './components/Icon'

const App = () => {
  const [results, setResults] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      const response = await axios.get('http://localhost:3003/results')
      setResults(response.data)
    }
    fetchData()
  }, [])

  return (
    <>
      <h1 className='sr-only'>Frontend Mentor course project with React</h1>
      <main>
        <Card results={results}>
          {results.map(result =>
            <li key={result.id} className={`score-card flex-row ${result.category.toLowerCase()}`}>
              <ScoreCard category={result.category} score={result.score}>
                <Icon icon={result.icon} />
              </ScoreCard>
            </li>
          )}
        </Card>
      </main>
    </>
  )
}

export default App
