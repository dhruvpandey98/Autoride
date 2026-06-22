import { useState } from 'react'
import './Accordian.css'

const faqData = [
  {
    id: 1,
    question: "What documents are required to rent a car?",
    answer:
      "To rent a car, you'll need a valid driving license, a government-issued ID, and a valid payment method.",
  },
  {
    id: 2,
    question: "What is the minimum age requirement for renting a car?",
    answer:
      "Drivers must be at least 21 years old. Some premium vehicles may require the driver to be 25 years or older.",
  },
  {
    id: 3,
    question: "Can I cancel or modify my booking?",
    answer:
      "Yes, you can modify or cancel your reservation through your account dashboard, subject to our cancellation policy.",
  },
  {
    id: 4,
    question: "Is insurance included in the rental price?",
    answer:
      "Basic insurance coverage is included with every rental. Additional protection plans are available during checkout.",
  },
  {
    id: 5,
    question: "Do you provide 24/7 roadside assistance?",
    answer:
      "Yes, all rentals include 24/7 roadside assistance to ensure a safe and worry-free travel experience.",
  },
]

const Accordian = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq-section">
      <h2>Top Car Rental Questions</h2>
      {faqData.map((faq, index) => {
        const isOpen = openIndex === index
        const buttonId = `faq-button-${faq.id}`
        const panelId = `faq-panel-${faq.id}`

        return (
          <div className={`accordian${isOpen ? ' open' : ''}`} key={faq.id}>
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => handleToggle(index)}
            >
              {faq.question}
            </button>

            {/* Panel stays mounted at all times — only its class toggles.
                That's what lets the max-height transition in the CSS
                actually animate instead of snapping open/closed. */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`accordian-panel${isOpen ? ' open' : ''}`}
            >
              <div>{faq.answer}</div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Accordian