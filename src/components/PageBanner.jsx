import { Link } from 'react-router-dom'
import bannerImg from '../assets/images/Shopbannerpic.png'

export default function PageBanner({ title }) {
  return (
    <section
      className="text-center d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '316px',
      }}
    >
      <h1 className="fw-bold">{title}</h1>
      <p className="mb-0 small fw-semibold">
        <Link to="/" className="text-dark text-decoration-none">Home</Link> &gt; {title}
      </p>
    </section>
  )
}