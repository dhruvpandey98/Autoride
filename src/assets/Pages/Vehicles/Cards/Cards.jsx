import './Cards.css'

const Cards = ({ car }) => {
  const { name, pricePerDay, seats, fuel, transmission, image } = car

  return (
    <div className="card-wrapper">
      <div className="container">
        <div className="top">
          <span className="badge">Available</span>
          <div className="rating">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
              <path d="M12 3l2.6 5.9 6.4.6-4.8 4.3 1.4 6.3L12 16.9 6.4 20.1l1.4-6.3-4.8-4.3 6.4-.6z" />
            </svg>
            4.9
          </div>
          <div className="image">
            <img src={image} alt={name} />
          </div>
        </div>

        <div className="middle">
          <div className="name">
            <h4>{name}</h4>
            <p className="type">{transmission} &middot; {fuel}</p>
          </div>
          <div className="price">
            <span className="from">From</span>
            <h4>&#8377;{pricePerDay}<span className="second">/day</span></h4>
          </div>
        </div>

        <div className="specs">
          <div className="spec-item">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="12" r="8" />
              <path d="M12 8v4l3 2" />
            </svg>
            {transmission}
          </div>
          <div className="spec-item">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="9" cy="9" r="2.3" />
              <path d="M3.5 18c0-2.5 2.2-4.2 5.5-4.2s5.5 1.7 5.5 4.2" />
              <circle cx="17" cy="9.5" r="1.8" />
              <path d="M15.8 13.9c1.8.3 3.1 1.6 3.1 3.6" />
            </svg>
            {seats} Seats
          </div>
          <div className="spec-item">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M5 20V9.5L12 4l7 5.5V20" />
              <path d="M9 20v-6h6v6" />
            </svg>
            {fuel}
          </div>
        </div>

        <div className="button">
          <button>Book Now</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
