import PageBanner from '../components/PageBanner'

const values = [
  { id: 1, title: 'Quality Materials', text: 'Every piece is crafted from carefully selected wood, fabric and metal.' },
  { id: 2, title: 'Modern Design', text: 'Clean, comfortable furniture that fits any home or office.' },
  { id: 3, title: 'Customer First', text: 'Free shipping, easy returns and a support team that is always there.' },
]

export default function About() {
  return (
    <>
      <PageBanner title="About" />

      <section className="container py-5 text-center">
        <h2 className="fw-bold mb-3">About Furniro</h2>
        <p className="text-secondary mx-auto mb-5" style={{ maxWidth: '700px' }}>
          Furniro brings stylish, comfortable furniture to your home. We design
          every piece to last, and we deliver it to your door.
        </p>

        <div className="row g-4">
          {values.map((v) => (
            <div key={v.id} className="col-12 col-md-4">
              <div className="bg-cream p-4 h-100 rounded-3">
                <h5 className="fw-semibold text-gold">{v.title}</h5>
                <p className="mb-0">{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}