import { useState, useRef, useEffect } from 'react';
import './Contact.css';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

/**
 * AutoRide — Contact Us page
 *
 * Wire-up notes:
 * - Replace the fake delay in handleSubmit with a real call (Formspree, EmailJS,
 *   your own API route, etc).
 * - Swap PHONE / EMAIL / LOCATIONS with your real details.
 */

const SECTIONS = [
  { id: 'start', label: 'Start' },
  { id: 'message', label: 'Send message' },
  { id: 'find-us', label: 'Find us' },
  { id: 'answers', label: 'Quick answers' },
];

const SUBJECTS = [
  'General inquiry',
  'Book a test drive',
  'Booking support',
  'Roadside support',
  'Partnerships',
  'Feedback',
];

const LOCATIONS = [
  {
    city: 'Downtown Hub',
    address: '214 Harbor Avenue, Suite 3',
    hours: 'Mon – Sat · 8:00–20:00',
    href: '#',
  },
  {
    city: 'Westside Garage',
    address: '88 Industrial Loop',
    hours: 'Mon – Sun · 7:00–22:00',
    href: '#',
  },
  {
    city: 'Airport Pickup Point',
    address: 'Terminal 2, Arrivals Level',
    hours: 'Open 24 / 7',
    href: '#',
  },
];

const FAQS = [
  {
    q: 'How fast will I hear back?',
    a: 'Most messages get a reply within two hours during the day, and by the next morning if you write in overnight.',
  },
  {
    q: 'Can I reschedule or cancel a booking through this form?',
    a: 'Yes — choose "Booking support" as the subject and include your booking reference. Reservations can usually be changed without a fee up to 24 hours before pickup.',
  },
  {
    q: 'Do you deliver the car to me?',
    a: 'In most covered cities, yes. Mention your pickup address in the message and we will confirm availability and any distance fee.',
  },
  {
    q: 'What do I need to bring at pickup?',
    a: 'A valid driving licence, a payment card in the driver’s name, and proof of address if it’s your first rental with us.',
  },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};
  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = 'Enter your full name.';
  }
  if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }
  if (!values.subject) {
    errors.subject = 'Choose a subject.';
  }
  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = 'Say a little more — at least 10 characters.';
  }
  return errors;
}

function Icon({ name, className, ...rest }) {
  const paths = {
    phone: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
    ),
    mail: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 6-10 7L2 6" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    key: (
      <>
        <circle cx="7.5" cy="15.5" r="5.5" />
        <path d="m21 2-9.6 9.6M15.5 7.5 19 11M18 5l3 3" />
      </>
    ),
    check: <path d="M20 6 9 17l-5-5" />,
    alert: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4M12 16h.01" />
      </>
    ),
    chevron: <path d="m6 9 6 6 6-6" />,
  };
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}

export default function ContactUs() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success
  const [active, setActive] = useState('start');
  const fieldRefs = useRef({});

  const handleChange = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    setErrors((errs) => ({ ...errs, [field]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      fieldRefs.current[firstInvalid]?.focus();
      return;
    }
    setStatus('submitting');
    try {
      // TODO: replace with a real request, e.g.
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(values) });
      await new Promise((resolve) => setTimeout(resolve, 1100));
      setStatus('success');
    } catch {
      setStatus('idle');
      setErrors((errs) => ({ ...errs, form: 'Something stalled on our end. Please try again.' }));
    }
  };

  const resetForm = () => {
    setValues({ name: '', email: '', phone: '', subject: '', message: '' });
    setErrors({});
    setStatus('idle');
  };

  useEffect(() => {
    const sections = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (!sections.length || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      {/* .contact-page is a flex row (rail + main) — Navbar/Footer stay
          outside it so they render full-width above/below, not squeezed
          in as a third flex column. */}
      <div className="contact-page">
        <nav className="route-rail" aria-label="Jump to section">
          <ol>
            {SECTIONS.map((s) => (
              <li key={s.id} className={active === s.id ? 'is-active' : ''}>
                <a href={`#${s.id}`}>
                  <span className="route-rail__pin" aria-hidden="true" />
                  <span className="route-rail__label">{s.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <main>
          <section id="start" className="hero" aria-labelledby="hero-heading">
            <p className="eyebrow">Contact AutoRide</p>
            <h1 id="hero-heading">
              Tell us where
              <br />
              you need to go.
            </h1>
            <p className="hero__sub">
              Questions about a booking, a car, or a city we should be in next — our team
              answers every message, every day of the week.
            </p>
            <ul className="stat-strip" aria-label="Support stats">
              <li>
                <span className="stat-strip__value">&lt;2h</span>
                <span className="stat-strip__label">avg. reply</span>
              </li>
              <li>
                <span className="stat-strip__value">30+</span>
                <span className="stat-strip__label">cities covered</span>
              </li>
              <li>
                <span className="stat-strip__value">4.8</span>
                <span className="stat-strip__label">support rating</span>
              </li>
            </ul>
          </section>

          <section id="message" className="contact-grid" aria-labelledby="message-heading">
            <div className="contact-card">
              <h2 id="message-heading">Send a message</h2>
              <p className="contact-card__hint">Fill this in and we’ll route it to the right team.</p>

              {status === 'success' ? (
                <div className="success-panel" role="status">
                  <span className="success-panel__icon">
                    <Icon name="check" width="22" height="22" />
                  </span>
                  <h3>You’re in the driver’s seat.</h3>
                  <p>
                    Your message is on its way. Expect a reply within two hours during the
                    day, or first thing tomorrow if it’s late where you are.
                  </p>
                  <button type="button" className="link-button" onClick={resetForm}>
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="field-row">
                    <div className="field">
                      <label htmlFor="name">Full name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={values.name}
                        onChange={handleChange('name')}
                        ref={(el) => (fieldRefs.current.name = el)}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p className="field-error" id="name-error">
                          <Icon name="alert" width="14" height="14" /> {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="field">
                      <label htmlFor="phone">
                        Phone <span className="optional">(optional)</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={values.phone}
                        onChange={handleChange('phone')}
                        ref={(el) => (fieldRefs.current.phone = el)}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={handleChange('email')}
                      ref={(el) => (fieldRefs.current.email = el)}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p className="field-error" id="email-error">
                        <Icon name="alert" width="14" height="14" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="field">
                    <label htmlFor="subject">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={values.subject}
                      onChange={handleChange('subject')}
                      ref={(el) => (fieldRefs.current.subject = el)}
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                    >
                      <option value="" disabled>
                        Choose one…
                      </option>
                      {SUBJECTS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.subject && (
                      <p className="field-error" id="subject-error">
                        <Icon name="alert" width="14" height="14" /> {errors.subject}
                      </p>
                    )}
                  </div>

                  <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={values.message}
                      onChange={handleChange('message')}
                      ref={(el) => (fieldRefs.current.message = el)}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p className="field-error" id="message-error">
                        <Icon name="alert" width="14" height="14" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {errors.form && (
                    <p className="field-error field-error--form">
                      <Icon name="alert" width="14" height="14" /> {errors.form}
                    </p>
                  )}

                  <button type="submit" className="ignition-button" disabled={status === 'submitting'}>
                    <Icon name="key" />
                    {status === 'submitting' ? 'Starting…' : 'Start engine — send message'}
                  </button>
                </form>
              )}
            </div>

            <aside className="info-stack" aria-label="Other ways to reach us">
              <div className="info-tile">
                <Icon name="phone" />
                <div>
                  <p className="info-tile__label">Call us</p>
                  <a href="tel:+15550102030">+1 (555) 010-2030</a>
                </div>
              </div>
              <div className="info-tile">
                <Icon name="mail" />
                <div>
                  <p className="info-tile__label">Email</p>
                  <a href="mailto:hello@autoride.example">hello@autoride.example</a>
                </div>
              </div>
              <div className="info-tile">
                <Icon name="clock" />
                <div>
                  <p className="info-tile__label">Support hours</p>
                  <p>Every day, 7:00 – 23:00</p>
                </div>
              </div>
              <div className="info-tile">
                <Icon name="pin" />
                <div>
                  <p className="info-tile__label">Headquarters</p>
                  <p>214 Harbor Avenue, Suite 3</p>
                </div>
              </div>
            </aside>
          </section>

          <section id="find-us" className="locations" aria-labelledby="locations-heading">
            <h2 id="locations-heading">Find us on the road</h2>
            <div className="locations__grid">
              {LOCATIONS.map((loc) => (
                <article className="location-card" key={loc.city}>
                  <Icon name="pin" />
                  <h3>{loc.city}</h3>
                  <p>{loc.address}</p>
                  <p className="location-card__hours">{loc.hours}</p>
                  <a href={loc.href}>Get directions →</a>
                </article>
              ))}
            </div>
          </section>

          <section id="answers" className="faq" aria-labelledby="faq-heading">
            <h2 id="faq-heading">Quick answers</h2>
            <div className="faq__list">
              {FAQS.map((item) => (
                <details key={item.q}>
                  <summary>
                    <span>{item.q}</span>
                    <Icon name="chevron" className="faq__chevron" />
                  </summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="cta-bar" aria-label="Call us directly">
            <p>Prefer to talk it through?</p>
            <a className="cta-bar__button" href="tel:+15550102030">
              <Icon name="phone" width="16" height="16" /> Call +1 (555) 010-2030
            </a>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}