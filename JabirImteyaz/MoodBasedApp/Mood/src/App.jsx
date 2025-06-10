import { useEffect, useRef, useState } from 'react'
import './App.css'
import MoodSelector from './components/MoodSelector'
import MoodHistory from './components/MoodHistory'

function App() {
  const [mood, setMood] = useState(null)
  const [moodHistory, setMoodHistory] = useState([])
  const audioRef = useRef(null)

  
  const [floatingObjects, setFloatingObjects] = useState([])

  useEffect(() => {
    if (mood) {
      const objects = Array.from({ length: 15 }).map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDuration: `${8 + Math.random() * 5}s`,
        animationDelay: `${Math.random() * 5}s`,
        fontSize: `${1.5 + Math.random() * 2}rem`,
      }))
      setFloatingObjects(objects)
    } else {
      setFloatingObjects([])
    }
  }, [mood])

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('moodHistory')) || []
    setMoodHistory(savedHistory)
  }, [])

  useEffect(() => {
    localStorage.setItem('moodHistory', JSON.stringify(moodHistory))
  }, [moodHistory])

  useEffect(() => {
    if (mood && audioRef.current) {
      audioRef.current.pause()
      audioRef.current.load()
      audioRef.current.play()

      const moodWithTimestamp = { ...mood, timestamp: Date.now() }
      setMoodHistory([moodWithTimestamp, ...moodHistory])
    }
  }, [mood])

  const handleDeleteMood = (timestamp) => {
    setMoodHistory(moodHistory.filter((entry) => entry.timestamp !== timestamp))
  }

  const moodEffects = {
    Happy: ['😄', '☀️', '🎉', '🌈'],
    Angry: ['😡', '🔥', '💢', '⚡'],
    Relax: ['😌', '🌿', '🧘‍♂️', '🍃'],
    Sad: ['😢', '🌧', '💧', '☔'],
  }

  return (
    <div className="app" style={{ backgroundColor: mood ? mood.color : '#f1f3f5' }}>
      {mood && (
        <div className="animated-background">
          {floatingObjects.map((obj, i) => (
            <div
              key={i}
              className="floating-object"
              style={{
                top: obj.top,
                left: obj.left,
                animationDuration: obj.animationDuration,
                animationDelay: obj.animationDelay,
                fontSize: obj.fontSize,
              }}
            >
              {moodEffects[mood.name][Math.floor(Math.random() * moodEffects[mood.name].length)]}
            </div>
          ))}
        </div>
      )}

      <h1>Mood Based App</h1>

      <MoodSelector onMoodChange={setMood} />

      {mood && (
        <>
          <p className="emoji" style={{ fontSize: '3rem', margin: '10px' }}>
            {mood.emoji}
          </p>
          <p className="message">{mood.message}</p>
          <audio ref={audioRef} controls style={{ marginTop: '20px' }}>
            <source src={mood.audio} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </>
      )}

      <MoodHistory moodHistory={moodHistory} onDelete={handleDeleteMood} />
    </div>
  )
}

export default App
