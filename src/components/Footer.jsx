import { useState } from 'react'
import { Link } from 'react-router-dom'

const links = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]
const help = ['Payment Options', 'Returns', 'Privacy Policies']

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = () => {
    if (email) {
      alert('Subscribed: ' + email)
      setEmail('')
    }
  }

  return (
    <footer className="container py-5">
      <div className="row g-4">
        <div className="col-12 col-lg-4">
          <h4 className="fw-bold">Furniro.</h4>
          <p className="text-secondary small">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>

        <div className="col-6 col-lg-2">
          <p className="text-secondary">Links</p>
          {links.map((l) => (
            <div key={l.name} className="mb-3">
              <Link to={l.path} className="text-dark text-decoration-none fw-medium">
                {l.name}
              </Link>
            </div>
          ))}
        </div>

        <div className="col-6 col-lg-3">
          <p className="text-secondary">Help</p>
          {help.map((h) => (
            <div key={h} className="mb-3 fw-medium">{h}</div>
          ))}
        </div>

        <div className="col-12 col-lg-3">
          <p className="text-secondary">Newsletter</p>
          <div className="d-flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email Address"
              className="form-control border-0 border-bottom rounded-0"
            />
            <button onClick={handleSubscribe} className="btn border-0 border-bottom rounded-0 fw-semibold">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      <hr className="my-4" />
      <small>2023 furino. All rights reserved</small>
    </footer>
  )
}