import { useEffect, useState } from 'react'
import './PromoBanner.css'

const getTimeLeft = (deadline) => {
  const total = deadline - new Date()
  if (total <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true }

  return {
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
    expired: false,
  }
}

const PromoBanner = () => {
  const deadline = new Date()
  deadline.setDate(deadline.getDate() + 7)

  const [timeLeft, setTimeLeft] = useState(getTimeLeft(deadline))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(deadline))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.minutes },
    { label: 'Secs', value: timeLeft.seconds },
  ]

  return (
    <div className="promo-banner">
      <div className="promo-content">
        <span className="promo-tag">Limited Time Offer</span>
        <h2>Get 20% off your next ride this week</h2>
        <p>Use code <span className="promo-code">RIDE20</span> at checkout. Offer ends soon.</p>
      </div>

      <div className="promo-countdown">
        {timeLeft.expired ? (
          <span className="promo-expired">Offer has ended</span>
        ) : (
          units.map((unit) => (
            <div className="promo-unit" key={unit.label}>
              <span className="promo-number">{String(unit.value).padStart(2, '0')}</span>
              <span className="promo-label">{unit.label}</span>
            </div>
          ))
        )}
      </div>

      <button className="promo-btn">Claim Offer</button>
    </div>
  )
}

export default PromoBanner
