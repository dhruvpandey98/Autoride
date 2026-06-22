import './Testimonials.css'

const Star = ({ filled }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.4">
    <path d="M12 3l2.6 5.9 6.4.6-4.8 4.3 1.4 6.3L12 16.9 6.4 20.1l1.4-6.3-4.8-4.3 6.4-.6z" />
  </svg>
)



const Testimonials = ({ testimonial }) => {
  if (!testimonial) return null

  return (
    <div className="container">
      <span className="quote-mark">&ldquo;</span>

      <div className="message">
        <p>{testimonial.review}</p>
      </div>

      <div className="rating">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} filled={i < (testimonial.rating || 0)} />
        ))}
      </div>

      <div className="profile">
        
        <div className="name">
          <h3>{testimonial.name}</h3>
          <span>{testimonial.role}</span>
        </div>
      </div>
    </div>
  )
}

export default Testimonials