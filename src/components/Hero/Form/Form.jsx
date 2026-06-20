import './Form.css';
const Form = () => {
  return (
    <div>
      <div className="booking-card">
  <h2>Book Your Car</h2>

  <form>
    <div className="input-group">
      <select>
        <option>Select Car Type</option>
        <option>Economy</option>
        <option>Sedan</option>
        <option>SUV</option>
        <option>Luxury</option>
        <option>Sports</option>
        <option>Electric</option>
      </select>
    </div>

    <div className="input-group">
      <select>
        <option>Pickup Location</option>
        <option>Delhi</option>
        <option>Gurgaon</option>
        <option>Noida</option>
        <option>Jaipur</option>
      </select>
    </div>

    <div className="input-group">
      <select>
        <option>Drop-off Location</option>
        <option>Delhi</option>
        <option>Gurgaon</option>
        <option>Noida</option>
        <option>Jaipur</option>
      </select>
    </div>

    <div className="input-group">
      <label>Rental Date</label>
      <input type="date" />
    </div>

    <div className="input-group">
      <label>Return Date</label>
      <input type="date" />
    </div>

    <button type="submit">
      Book Now
    </button>
  </form>
</div>
    </div>
  )
}

export default Form
