import { Link } from 'react-router-dom'
import { FiTrash2 } from 'react-icons/fi'
import PageBanner from '../components/PageBanner'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../data/products'

export default function Cart() {
  const { cart, removeFromCart, updateQty, subtotal } = useCart()

  return (
    <>
      <PageBanner title="Cart" />

      <section className="container py-5">
        {cart.length === 0 ? (
          <div className="text-center py-5">
            <h4>Your cart is empty</h4>
            <Link to="/shop" className="btn bg-gold text-white mt-3 px-4">
              Go to Shop
            </Link>
          </div>
        ) : (
          <div className="row g-4">
            <div className="col-12 col-lg-8">
              <div className="bg-cream d-none d-md-flex fw-medium p-3 mb-3">
                <span style={{ width: '40%' }}>Product</span>
                <span style={{ width: '20%' }}>Price</span>
                <span style={{ width: '20%' }}>Quantity</span>
                <span style={{ width: '20%' }}>Subtotal</span>
              </div>

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="d-flex flex-wrap align-items-center p-3 border-bottom gap-2"
                >
                  <div className="d-flex align-items-center gap-3" style={{ flex: '1 1 200px' }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="bg-soft rounded-3"
                      style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                    />
                    <span className="text-secondary">{item.name}</span>
                  </div>

                  <span className="text-secondary">{formatPrice(item.price)}</span>

                  <div className="d-flex align-items-center border rounded-3">
                    <button className="btn btn-sm" onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
                    <span className="px-2">{item.qty}</span>
                    <button className="btn btn-sm" onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                  </div>

                  <span className="fw-medium">{formatPrice(item.price * item.qty)}</span>

                  <FiTrash2
                    className="text-gold fs-5"
                    style={{ cursor: 'pointer' }}
                    onClick={() => removeFromCart(item.id)}
                  />
                </div>
              ))}
            </div>

            <div className="col-12 col-lg-4">
              <div className="bg-cream p-4 text-center">
                <h3 className="fw-bold mb-4">Cart Totals</h3>
                <div className="d-flex justify-content-between mb-3">
                  <span className="fw-medium">Subtotal</span>
                  <span className="text-secondary">{formatPrice(subtotal)}</span>
                </div>
                <div className="d-flex justify-content-between mb-4">
                  <span className="fw-medium">Total</span>
                  <span className="text-gold fw-semibold fs-5">{formatPrice(subtotal)}</span>
                </div>
                <Link to="/checkout" className="btn border border-dark rounded-4 px-5 py-2">
                  Check Out
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  )
}