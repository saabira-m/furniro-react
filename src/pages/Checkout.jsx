import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../data/products'

const emptyForm = {
  firstName: '',
  lastName: '',
  company: '',
  country: 'Sri Lanka',
  street: '',
  city: '',
  province: 'Western Province',
  zip: '',
  phone: '',
  email: '',
  info: '',
}

const textFields = [
  { name: 'street', label: 'Street address' },
  { name: 'city', label: 'Town / City' },
  { name: 'zip', label: 'ZIP code' },
  { name: 'phone', label: 'Phone' },
  { name: 'email', label: 'Email address', type: 'email' },
]

export default function Checkout() {
  const { cart, subtotal } = useCart()
  const [form, setForm] = useState(emptyForm)
  const [payment, setPayment] = useState('bank')
  const [placed, setPlaced] = useState(false)

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handlePlaceOrder = () => {
    if (!form.firstName || !form.street || !form.phone) {
      alert('Please fill in first name, street address and phone.')
      return
    }
    setPlaced(true)
  }

  if (placed) {
    return (
      <>
        <PageBanner title="Checkout" />
        <div className="container text-center py-5">
          <h3 className="text-gold fw-bold">Thank you! Your order is placed.</h3>
          <Link to="/shop" className="btn bg-gold text-white mt-3 px-4">
            Continue Shopping
          </Link>
        </div>
      </>
    )
  }

  return (
    <>
      <PageBanner title="Checkout" />

      <section className="container py-5">
        <div className="row g-5">
          <div className="col-12 col-lg-6">
            <h2 className="fw-semibold mb-4">Billing details</h2>

            <div className="row g-3">
              <div className="col-6">
                <label className="fw-medium mb-2">First Name</label>
                <input name="firstName" value={form.firstName} onChange={handleChange} className="form-control py-3" />
              </div>
              <div className="col-6">
                <label className="fw-medium mb-2">Last Name</label>
                <input name="lastName" value={form.lastName} onChange={handleChange} className="form-control py-3" />
              </div>

              <div className="col-12">
                <label className="fw-medium mb-2">Company Name (Optional)</label>
                <input name="company" value={form.company} onChange={handleChange} className="form-control py-3" />
              </div>

              <div className="col-12">
                <label className="fw-medium mb-2">Country / Region</label>
                <select name="country" value={form.country} onChange={handleChange} className="form-select py-3">
                  <option>Sri Lanka</option>
                  <option>India</option>
                  <option>Indonesia</option>
                </select>
              </div>

              {textFields.slice(0, 2).map((f) => (
                <div key={f.name} className="col-12">
                  <label className="fw-medium mb-2">{f.label}</label>
                  <input name={f.name} type={f.type || 'text'} value={form[f.name]} onChange={handleChange} className="form-control py-3" />
                </div>
              ))}

              <div className="col-12">
                <label className="fw-medium mb-2">Province</label>
                <select name="province" value={form.province} onChange={handleChange} className="form-select py-3">
                  <option>Western Province</option>
                  <option>Central Province</option>
                  <option>Southern Province</option>
                </select>
              </div>

              {textFields.slice(2).map((f) => (
                <div key={f.name} className="col-12">
                  <label className="fw-medium mb-2">{f.label}</label>
                  <input name={f.name} type={f.type || 'text'} value={form[f.name]} onChange={handleChange} className="form-control py-3" />
                </div>
              ))}

              <div className="col-12">
                <input name="info" value={form.info} onChange={handleChange} placeholder="Additional information" className="form-control py-3" />
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="d-flex justify-content-between fw-semibold fs-5 mb-3">
              <span>Product</span>
              <span>Subtotal</span>
            </div>

            {cart.length === 0 && <p className="text-secondary">Your cart is empty.</p>}

            {cart.map((item) => (
              <div key={item.id} className="d-flex justify-content-between mb-2">
                <span className="text-secondary">
                  {item.name} <span className="text-dark small">x {item.qty}</span>
                </span>
                <span>{formatPrice(item.price * item.qty)}</span>
              </div>
            ))}

            <div className="d-flex justify-content-between mt-3 mb-2">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <span>Total</span>
              <span className="text-gold fw-bold fs-4">{formatPrice(subtotal)}</span>
            </div>

            <hr />

            <div className="form-check mb-2">
              <input className="form-check-input" type="radio" id="bank" checked={payment === 'bank'} onChange={() => setPayment('bank')} />
              <label className="form-check-label" htmlFor="bank">Direct Bank Transfer</label>
            </div>
            {payment === 'bank' && (
              <p className="text-secondary small">
                Make your payment directly into our bank account. Please use your Order ID as the payment reference.
              </p>
            )}
            <div className="form-check mb-4">
              <input className="form-check-input" type="radio" id="cod" checked={payment === 'cod'} onChange={() => setPayment('cod')} />
              <label className="form-check-label" htmlFor="cod">Cash On Delivery</label>
            </div>

            <p className="small">
              Your personal data will be used to support your experience throughout this website.
            </p>

            <div className="text-center">
              <button
                onClick={handlePlaceOrder}
                disabled={cart.length === 0}
                className="btn border border-dark rounded-4 px-5 py-2"
              >
                Place order
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}