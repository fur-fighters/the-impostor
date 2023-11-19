const { useRef, useEffect, useState, useCallback } = React
const { createRoot } = ReactDOM

function App() {
  const mounted = useRef(false)
  const [ intervalId, setIntervalId ] = useState(null)
  const [ now, setNow ] = useState(null)
  const [ date, setDate ] = useState(null)
  const [ time, setTime ] = useState(null)

  const step = useCallback(() => {
    setNow((new Date()).toISOString())
  }, [])

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      setIntervalId(setInterval(step, 1000))
    }

    return () => {
      clearIntervall(intervalId)
    }
  }, [ mounted ])

  useEffect(() => {
    if (now) {
      const [ _date, _time ] = now.split('T')

      setDate(_date)
      setTime(_time.slice(0, 8))
    }
  }, [ now ])

  return (date && time) ? (<h1>{date} / {time}</h1>) : null
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)