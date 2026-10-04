import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import ProductCard from '../components/ProductCard'
import { useCart } from '../context/CartContext'
import { allProducts, formatPrice } from '../data/products'
import asgaardMain from '../assets/images/Asgaardsofamain.png'
import asgaard1 from '../assets/images/Asgaardsofa1.png'
import asgaard2 from '../assets/images/Asgaardsofa2.png'
import asgaard3 from '../assets/images/Asgaardsofa3.png'
import asgaard4 from '../assets/images/Asgaardsofa4.png'

const sizes = ['L', 'XL', 'XS']
const colors = ['#816DFA', '#000000', '#B88E2F']
const tabs = ['Description', 'Additional Information', 'Reviews [5]']
const thumbs = [asgaard1, asgaard2, asgaard3, asgaard4]

export default function SingleProduct() {
  const { id } = useParams()
  const product = allProducts.find((p) => p.id === Number(id))

  const [qty, setQty] = useState(1)
  const [size, setSize] = useState('L')
  const [color, setColor] = useState(colors[0])
  const [tab, setTab] = useState('Description')
  const [activeImg, setActiveImg] = useState(null)
  const { addToCart } = useCart()

  if (!product) return <h2 className="container py-5">Product not found</h2>

  const related = allProducts.slice(0, 4)

  return (
    <>
      <div className="bg-cream py-3">
        <div className="container small fw-medium">
          <Link to="/" className="text-secondary text-decoration-none">Home</Link>
          {' > '}
          <Link to="/shop" className="text-secondary text-decoration-none">Shop</Link>
          {' > '}
          {product.name}
        </div>
      </div>

      <section className="container py-5">
        <div className="row g-5">
          <div className="col-12 col-lg-6 d-flex gap-3">
            <div className="d-flex flex-column gap-3">
              {thumbs.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  onClick={() => setActiveImg(i)}
                  className="bg-soft"
                  style={{ width: '76px', height: '80px', objectFit: 'cover', cursor: 'pointer' }}
                />
              ))}
            </div>
            <img
              src={activeImg === null ? asgaardMain : thumbs[activeImg]}
              alt={product.name}
              className="img-fluid bg-soft"
            />
          </div>

          <div className="col-12 col-lg-6">
            <h2>{product.name}</h2>
            <h5 className="text-secondary">{formatPrice(product.price)}</h5>
            <div className="text-warning mb-2">
              {[1, 2, 3, 4, 5].map((n) => <FaStar key={n} />)}
              <small className="text-secondary ms-2">5 Customer Review</small>
            </div>
            <p className="small">{product.desc}. Setting the bar as one of the loudest speakers in its class.</p>

            <p className="text-secondary small mb-1">Size</p>
            <div className="d-flex gap-2 mb-3">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`btn btn-sm ${size === s ? 'bg-gold text-white' : 'bg-soft'}`}
                >
                  {s}
                </button>
              ))}
            </div>

            <p className="text-secondary small mb-1">Color</p>
            <div className="d-flex gap-2 mb-4">
              {colors.map((c) => (
                <span
                  key={c}
                  onClick={() => setColor(c)}
                  className="rounded-circle d-inline-block"
                  style={{
                    width: '30px',
                    height: '30px',
                    backgroundColor: c,
                    cursor: 'pointer',
                    border: color === c ? '3px solid #B88E2F' : '3px solid transparent',
                  }}
                />
              ))}
            </div>

            <div className="d-flex flex-wrap gap-3 mb-4">
              <div className="d-flex align-items-center border rounded-3">
                <button className="btn" onClick={() => setQty((q) => Math.max(1, q - 1))}>-</button>
                <span className="px-3">{qty}</span>
                <button className="btn" onClick={() => setQty((q) => q + 1)}>+</button>
              </div>
              <button
                onClick={() => addToCart(product, qty)}
                className="btn border rounded-4 px-4 py-2"
              >
                Add To Cart
              </button>
              <Link to="/compare" className="btn border rounded-4 px-4 py-2">+ Compare</Link>
            </div>

            <hr />
            <p className="small text-secondary mb-1">SKU : SS001</p>
            <p className="small text-secondary mb-1">Category : Sofas</p>
            <p className="small text-secondary mb-1">Tags : Sofa, Chair, Home, Shop</p>
          </div>
        </div>
      </section>

      <section className="container py-4 border-top">
        <div className="d-flex flex-wrap justify-content-center gap-4 mb-4">
          {tabs.map((t) => (
            <span
              key={t}
              onClick={() => setTab(t)}
              className={tab === t ? 'fw-semibold fs-5' : 'text-secondary fs-5'}
              style={{ cursor: 'pointer' }}
            >
              {t}
            </span>
          ))}
        </div>
        <p className="text-secondary text-center mx-auto" style={{ maxWidth: '900px' }}>
          {tab === 'Description' &&
            'Embodying the raw, wayward spirit of rock n roll, this speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.'}
          {tab === 'Additional Information' && 'Weight: 10 kg. Dimensions: 230 x 100 x 85 cm.'}
          {tab === 'Reviews [5]' && '5 customers have reviewed this product.'}
        </p>
      </section>

      <section className="container py-5">
        <h3 className="fw-bold text-center mb-4">Related Products</h3>
        <div className="row g-4">
          {related.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-lg-3">
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}