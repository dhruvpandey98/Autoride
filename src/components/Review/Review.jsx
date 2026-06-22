import './Review.css'
import Testimonials from './Testimonials/Testimonials'

const Review = () => {
  const testimonialData = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Business Traveler",
      image: "/images/user1.jpg",
      review:
        "AutoRide made my business trip stress-free. The booking process was quick, and the car was in excellent condition. Highly recommended!",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Verma",
      role: "Tourist",
      image: "/images/user2.jpg",
      review:
        "I rented a car for my family vacation and had an amazing experience. Clean vehicles, affordable prices, and great customer support.",
      rating: 5,
    },
    {
      id: 3,
      name: "Amit Singh",
      role: "Frequent Customer",
      image: "/images/user3.jpg",
      review:
        "I've used AutoRide multiple times, and they never disappoint. The service is reliable, and the staff is always helpful.",
      rating: 4,
    },
  ]

  return (
    <div className="review-section">
      <div className="review-title">
        <span>Testimonials</span>
        <h2>Reviews from our customers</h2>
      </div>

      <div className="review-grid">
        {testimonialData.map((item) => (
          <Testimonials key={item.id} testimonial={item} />
        ))}
      </div>
    </div>
  )
}

export default Review
