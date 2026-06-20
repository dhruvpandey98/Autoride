import { useEffect, useState } from 'react'
import './Loader.css'

const DURATION = 1800

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [hidden, setHidden] = useState(false)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const start = performance.now()
    let frame

    const tick = (now) => {
      const elapsed = now - start
      const pct = Math.min(elapsed / DURATION, 1)
      setProgress(Math.round(pct * 100))

      if (pct < 1) {
        frame = requestAnimationFrame(tick)
      } else {
        setExiting(true)
        setTimeout(() => {
          setHidden(true)
          if (onComplete) onComplete()
        }, 500)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [onComplete])

  if (hidden) return null

  const radius = 90
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference

  return (
    <div className={`loader-screen ${exiting ? 'loader-exit' : ''}`}>
      <div className="loader-gauge">
        <svg viewBox="0 0 220 220" className="loader-ring">
          <circle
            cx="110"
            cy="110"
            r={radius}
            className="loader-ring-track"
          />
          <circle
            cx="110"
            cy="110"
            r={radius}
            className="loader-ring-fill"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>

        <div className="loader-center">
          <svg className="loader-chevron" viewBox="0 0 64 64">
            <path d="M20 44 L34 20 L42 20 L30 40 L40 40 L24 48 Z" />
          </svg>
          <span className="loader-speed">{progress}</span>
          <span className="loader-unit">km/h</span>
        </div>
      </div>

      <div className="loader-wordmark">
        AUTO<span>RIDE</span>
      </div>
    </div>
  )
}

export default Loader
