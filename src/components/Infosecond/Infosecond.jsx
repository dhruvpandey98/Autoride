import './Infosecond.css'

const Infosecond = () => {
  const features = [
  {
    id: 1,
    title: "Easy Online Booking",
    description:
      "Book your preferred vehicle in minutes with a simple and secure reservation process available 24/7."
  },
  {
    id: 2,
    title: "Wide Range of Vehicles",
    description:
      "Choose from economy cars, premium sedans, spacious SUVs, and luxury vehicles to match every travel need."
  },
  {
    id: 3,
    title: "Flexible Rental Plans",
    description:
      "Whether you need a car for a day, a weekend, or a month, we offer rental plans that fit your schedule."
  },
  {
    id: 4,
    title: "Safe & Reliable Experience",
    description:
      "All vehicles are regularly inspected, professionally maintained, and backed by dedicated customer support."
  }
];

  return (
    <div className="infosecond-section">
      <div className="left-img">
        <img></img>
      </div>
      <div className="right-content">
        {features.map((feature) => (
          <div className="feature-item" key={feature.id}>
            <div className="feature-number">
              {feature.id}
            </div>

            <div className="feature-text">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Infosecond
