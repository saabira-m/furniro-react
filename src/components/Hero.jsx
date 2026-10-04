import heroImg from '../assets/images/heropage.png'

export default function Hero() {
  return (
    <section
      className="d-flex align-items-center justify-content-center justify-content-lg-end px-3 px-lg-5 py-5"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '500px',
      }}
    >
      <div className="bg-cream p-4 p-lg-5 rounded-3" style={{ maxWidth: '600px' }}>
        <p className="fw-semibold mb-1">New Arrival</p>
        <h1 className="text-gold fw-bold">Discover Our New Collection</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="btn bg-gold text-white px-5 py-3 rounded-0 fw-semibold">
          BUY NOW
        </button>
      </div>
    </section>
  )
}