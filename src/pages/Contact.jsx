import { useState } from 'react'
import { FiMapPin, FiPhone, FiClock } from 'react-icons/fi'
import PageBanner from '../components/PageBanner'

const info = [
  {
    id: 1,
    icon: <FiMapPin />,
    title: 'Address',
    lines: ['236 5th SE Avenue, New York NY10000, United States'],
  },
  {
    id: 2,
    icon: <FiPhone />,
    title: 'Phone',
    lines: ['Mobile: +(84) 546-6789', 'Hotline: +(84) 456-6789'],
  },
  {
    id: 3,
    icon: <FiClock />,
    title: 'Working Time',
    lines: ['Monday-Friday: 9:00 - 22:00', 'Saturday-Sunday: 9:00 - 21:00'],
  },
]

const emptyForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [sent, setSent] = useState(false)

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      alert('Please fill in your name, email and message.')
      return
    }
    setSent(true)
    setForm(emptyForm)
  }

  return (
    <>
      <PageBanner title="Contact" />

      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-semibold">Get In Touch With Us</h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: '600px' }}>
            For more information about our products & services, please feel free
            to drop us an email. Our staff is always there to help you out.
          </p>
        </div>

        <div className="row g-5">
          <div className="col-12 col-lg-5">
            {info.map((item) => (
              <div key={item.id} className="d-flex gap-3 mb-4">
                <span className="fs-4">{item.icon}</span>
                <div>
                  <h5 className="fw-semibold">{item.title}</h5>
                  {item.lines.map((line) => (
                    <p key={line} className="mb-1">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="col-12 col-lg-7">
            {sent && (
              <div className="alert alert-success">
                Thank you! Your message has been sent.
              </div>
            )}

            <label className="fw-medium mb-2">Your name</label>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Abc" className="form-control py-3 mb-4" />

            <label className="fw-medium mb-2">Email address</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Abc@def.com" className="form-control py-3 mb-4" />

            <label className="fw-medium mb-2">Subject</label>
            <input name="subject" value={form.subject} onChange={handleChange} placeholder="This is optional" className="form-control py-3 mb-4" />

            <label className="fw-medium mb-2">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} rows="4" placeholder="Hi! I'd like to ask about" className="form-control py-3 mb-4" />

            <button onClick={handleSubmit} className="btn bg-gold text-white px-5 py-2 rounded-2">
              Submit
            </button>
          </div>
        </div>
      </section>
    </>
  )
}