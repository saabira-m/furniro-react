import { FiAward, FiCheckCircle, FiTruck, FiHeadphones } from 'react-icons/fi'

const features = [
  { id: 1, icon: <FiAward />, title: 'High Quality', text: 'crafted from top materials' },
  { id: 2, icon: <FiCheckCircle />, title: 'Warranty Protection', text: 'Over 2 years' },
  { id: 3, icon: <FiTruck />, title: 'Free Shipping', text: 'Order over 150 $' },
  { id: 4, icon: <FiHeadphones />, title: '24 / 7 Support', text: 'Dedicated support' },
]

export default function Features() {
  return (
    <section className="bg-cream py-5">
      <div className="container">
        <div className="row g-4">
          {features.map((f) => (
            <div key={f.id} className="col-12 col-sm-6 col-lg-3 d-flex align-items-center gap-3">
              <span className="fs-1">{f.icon}</span>
              <div>
                <h6 className="fw-semibold mb-0">{f.title}</h6>
                <small className="text-secondary">{f.text}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}