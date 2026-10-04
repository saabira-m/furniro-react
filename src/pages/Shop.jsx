import { useState } from 'react'
import { FiSliders } from 'react-icons/fi'
import PageBanner from '../components/PageBanner'
import ProductCard from '../components/ProductCard'
import { allProducts } from '../data/products'

const perPage = 16
const totalPages = Math.ceil(allProducts.length / perPage)

export default function Shop() {
  const [page, setPage] = useState(1)
  const start = (page - 1) * perPage
  const visible = allProducts.slice(start, start + perPage)

  return (
    <>
      <PageBanner title="Shop" />

      <div className="bg-cream py-3">
        <div className="container d-flex flex-wrap justify-content-between align-items-center gap-2">
          <span className="fw-medium"><FiSliders className="me-2" />Filter</span>
          <small>
            Showing {start + 1}–{start + visible.length} of {allProducts.length} results
          </small>
        </div>
      </div>

      <section className="container py-5">
        <div className="row g-4">
          {visible.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-lg-3">
              <ProductCard product={item} />
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center gap-3 mt-5">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => setPage(n)}
              className={`btn ${page === n ? 'bg-gold text-white' : 'bg-soft'}`}
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            className="btn bg-soft"
          >
            Next
          </button>
        </div>
      </section>
    </>
  )
}