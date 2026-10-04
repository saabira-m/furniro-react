import { Link } from 'react-router-dom'
import { FiX, FiTrash2 } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../data/products'

export default function CartSidebar() {
  const { cart, isOpen, closeCart, removeFromCart, subtotal } = useCart()

  return (
    <>
      {isOpen && (
        <div
          onClick={closeCart}
          className="position-fixed top-0 start-0 w-100 h-100"
          style={{ background: 'rgba(0,0,0,0.5)', zIndex: 1040 }}
        />
      )}

      <aside
        className="position-fixed top-0 end-0 h-100 bg-white p-4 d-flex flex-column"
        style={{
          width: 'min(417px, 100%)',
          zIndex: 1050,
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s',
        }}
      >
        <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
          <h4 className="fw-semibold mb-0">Shopping Cart</h4>
          <FiX className="fs-4" style={{ cursor: 'pointer' }} onClick={closeCart} />
        </div>

        <div className="flex-grow-1 overflow-auto">
          {cart.length === 0 && <p className="text-secondary">Your cart is empty.</p>}

          {cart.map((item) => (
            <div key={item.id} className="d-flex align-items-center gap-3 mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="bg-soft rounded-3"
                style={{ width: '90px', height: '90px', objectFit: 'cover' }}
              />
              <div className="flex-grow-1">
                <p className="mb-1">{item.name}</p>
                <small>
                  {item.qty} x <span className="text-gold fw-medium">{formatPrice(item.price)}</span>
                </small>
              </div>
              <FiTrash2
                className="text-secondary fs-5"
                style={{ cursor: 'pointer' }}
                onClick={() => removeFromCart(item.id)}
              />
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-between border-top pt-3 mb-3">
          <span>Subtotal</span>
          <span className="text-gold fw-semibold">{formatPrice(subtotal)}</span>
        </div>

        <div className="d-flex gap-2">
          <Link to="/cart" onClick={closeCart} className="btn border border-dark rounded-pill flex-fill small">
            Cart
          </Link>
          <Link to="/checkout" onClick={closeCart} className="btn border border-dark rounded-pill flex-fill small">
            Checkout
          </Link>
          <Link to="/compare" onClick={closeCart} className="btn border border-dark rounded-pill flex-fill small">
            Comparison
          </Link>
        </div>
      </aside>
    </>
  )
}