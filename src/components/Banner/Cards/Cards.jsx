import './Cards.css'

// All icons share a 24x24 grid, 1.6 stroke, round caps/joins — one consistent
// hand throughout the set, drawn from the fleet/road vocabulary of the brief.
const icons = {
  car: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12.5 5.4 8a2 2 0 0 1 1.9-1.4h9.4A2 2 0 0 1 18.6 8L20 12.5" />
      <path d="M3 12.5h18a1 1 0 0 1 1 1V16a1 1 0 0 1-1 1h-1.2a1 1 0 0 1-1-.86 1.8 1.8 0 0 0-3.56 0 1 1 0 0 1-1 .86H8.76a1 1 0 0 1-1-.86 1.8 1.8 0 0 0-3.56 0 1 1 0 0 1-1 .86H2a1 1 0 0 1-1-1v-2.5a1 1 0 0 1 1-1z" />
      <circle cx="7" cy="16.5" r="1.7" />
      <circle cx="17" cy="16.5" r="1.7" />
      <path d="M9 9.5h6" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8.5" cy="7.5" r="3" />
      <path d="M2.8 19c.4-3.2 2.8-5.2 5.7-5.2s5.3 2 5.7 5.2" />
      <path d="M15.8 8.2a2.6 2.6 0 1 1 0 5.1" />
      <path d="M16 13.9c2.4.3 4.2 2.1 4.6 4.6" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.2" y="5.2" width="17.6" height="15.6" rx="2.4" />
      <path d="M7.6 3v4.2M16.4 3v4.2M3.2 9.8h17.6" />
      <path d="M7.4 13.4h2M11.6 13.4h2M15.8 13.4h2M7.4 16.8h2M11.6 16.8h2" />
    </svg>
  ),
  route: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5.5" cy="6" r="2.1" />
      <circle cx="18.5" cy="18" r="2.1" />
      <path d="M5.5 8.1v3a3 3 0 0 0 3 3h6.6a3 3 0 0 1 3 3v.7" strokeDasharray="2.2 2.4" />
    </svg>
  ),
}

const Cards = () => {
  const stats = [
    { value: "540+", label: "Cars", icon: "car" },
    { value: "20K+", label: "Customers", icon: "users" },
    { value: "25+", label: "Years", icon: "calendar" },
    { value: "20M+", label: "Miles", icon: "route" },
  ]

  return (
    <div className="stats">
      {stats.map((stat, index) => (
        <div className="stat-card" key={index}>
          <span className="stat-index">{String(index + 1).padStart(2, "0")}</span>
          <div className="stat-icon" aria-hidden="true">
            <svg className="hex-frame" viewBox="0 0 64 64">
              <polygon points="32,2 58,17 58,47 32,62 6,47 6,17" />
            </svg>
            {icons[stat.icon]}
          </div>
          <div className="stat-content">
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards