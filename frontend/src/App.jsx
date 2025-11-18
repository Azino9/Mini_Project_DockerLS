import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/api')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch from backend')
        return res.text()
      })
      .then((data) => {
        setMessage(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error fetching from backend:', err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <div className="app">
      <h1>React + Express + Postgres App</h1>
      <div className="card">
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {message && <p className="message">{message}</p>}
      </div>
      <p className="info">
        Full-stack application with Vite, Express, and PostgreSQL
      </p>
    </div>
  )
}

export default App
