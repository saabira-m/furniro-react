import { Link } from 'react-router-dom'
import { formatPrice } from '../data/products'

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="d-block h-100 text-dark text-decoration-none bg-soft position-relative"
    >
      {product.tag && (
        <span
          className={`position-absolute top-0 end-0 m-3 rounded-circle text-white small d-flex align-items-center justify-content-center ${
            product.tag === 'New' ? 'bg-success' : 'bg-danger'
          }`}
          style={{ width: '48px', height: '48px' }}
        >
          {product.tag}
        </span>
      )}
      <img src={product.image} alt={product.name} className="img-fluid w-100" />
      <div className="p-3">
        <h5 className="fw-semibold">{product.name}</h5>
        <p className="text-secondary small mb-2">{product.desc}</p>
        <span className="fw-semibold me-2">{formatPrice(product.price)}</span>
        {product.oldPrice && (
          <span className="text-secondary small text-decoration-line-through">
            {formatPrice(product.oldPrice)}
          </span>
        )}
      </div>
    </Link>
  )
}