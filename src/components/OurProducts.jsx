import ProductCard from './ProductCard'
import { products } from '../data/products'

export default function OurProducts() {
  return (
    <section className="container py-5">
      <h2 className="fw-bold text-center mb-5">Our Products</h2>
      <div className="row g-4">
        {products.map((item) => (
          <div key={item.id} className="col-12 col-sm-6 col-lg-3">
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </section>
  )
}