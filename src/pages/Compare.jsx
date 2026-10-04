import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import PageBanner from '../components/PageBanner'
import { useCart } from '../context/CartContext'
import { allProducts, formatPrice } from '../data/products'

const groups = [
  {
    title: 'General',
    rows: [
      { label: 'Sales Package', values: ['1 sectional sofa', '1 Three Seater, 2 Single Seater'] },
      { label: 'Model Number', values: ['TFCBLIGRBL6SRHS', 'DTUBLIGRBL568'] },
      { label: 'Secondary Material', values: ['Solid Wood', 'Solid Wood'] },
      { label: 'Configuration', values: ['L-shaped', 'L-shaped'] },
      { label: 'Upholstery Material', values: ['Fabric + Cotton', 'Fabric + Cotton'] },
      { label: 'Upholstery Color', values: ['Bright Grey & Lion', 'Bright Grey & Lion'] },
    ],
  },
  {
    title: 'Product',
    rows: [
      { label: 'Filling Material', values: ['Foam', 'Matte'] },
      { label: 'Finish Type', values: ['Bright Grey & Lion', 'Bright Grey & Lion'] },
      { label: 'Adjustable Headrest', values: ['No', 'Yes'] },
      { label: 'Maximum Load Capacity', values: ['280 KG', '300 KG'] },
      { label: 'Origin of Manufacture', values: ['India', 'India'] },
    ],
  },
  {
    title: 'Dimensions',
    rows: [
      { label: 'Width', values: ['265.32 cm', '265.32 cm'] },
      { label: 'Height', values: ['76 cm', '76 cm'] },
      { label: 'Depth', values: ['167.76 cm', '167.76 cm'] },
      { label: 'Weight', values: ['45 KG', '65 KG'] },
      { label: 'Seat Height', values: ['41.52 cm', '41.52 cm'] },
      { label: 'Leg Height', values: ['5.46 cm', '5.46 cm'] },
    ],
  },
  {
    title: 'Warranty',
    rows: [
      { label: 'Warranty Summary', values: ['1 Year Manufacturing Warranty', '1.2 Year Manufacturing Warranty'] },
      { label: 'Covered in Warranty', values: ['Warranty Against Manufacturing Defect', 'Warranty of the product is limited to manufacturing defects only.'] },
      { label: 'Domestic Warranty', values: ['1 Year', '3 Months'] },
    ],
  },
]

const choices = allProducts.slice(0, 9)

export default function Compare() {
  const [first] = useState(choices[8])
  const [secondId, setSecondId] = useState(choices[2].id)
  const { addToCart } = useCart()

  const second = choices.find((p) => p.id === Number(secondId))
  const columns = [first, second]

  return (
    <>
      <PageBanner title="Product Comparison" />

      <section className="container py-5">
        <div className="row g-4 align-items-start mb-5">
          <div className="col-12 col-lg-3">
            <h4 className="fw-semibold">Go to Product page for more Products</h4>
            <Link to="/shop" className="text-secondary">View More</Link>
          </div>

          {columns.map((p) => (
            <div key={p.id} className="col-12 col-md-4 col-lg-3">
              <img src={p.image} alt={p.name} className="img-fluid bg-soft rounded-3 mb-2" />
              <h5 className="fw-semibold">{p.name}</h5>
              <p className="mb-1">{formatPrice(p.price)}</p>
              <div className="text-warning small">
                {[1, 2, 3, 4, 5].map((n) => <FaStar key={n} />)}
              </div>
            </div>
          ))}

          <div className="col-12 col-md-4 col-lg-3">
            <h5 className="fw-semibold">Add A Product</h5>
            <select
              value={secondId}
              onChange={(e) => setSecondId(e.target.value)}
              className="form-select"
            >
              {choices.map((p) => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
          </div>
        </div>

        {groups.map((group) => (
          <div key={group.title} className="mb-4">
            <h4 className="fw-semibold mb-3">{group.title}</h4>
            {group.rows.map((row) => (
              <div key={row.label} className="row py-2 border-bottom">
                <div className="col-12 col-lg-3 text-secondary small">{row.label}</div>
                {columns.map((p) => (
                  <div key={p.id} className="col-6 col-md-4 col-lg-3 small">
                    {row.values[p.id % 2]}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}

        <div className="row">
          <div className="d-none d-lg-block col-lg-3" />
          {columns.map((p) => (
            <div key={p.id} className="col-6 col-md-4 col-lg-3">
              <button
                onClick={() => addToCart(p, 1)}
                className="btn bg-gold text-white px-4 py-2 rounded-0"
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}