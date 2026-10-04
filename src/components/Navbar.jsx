import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FiUser, FiSearch, FiHeart, FiShoppingCart, FiMenu, FiX,
} from 'react-icons/fi'
import { useCart } from '../context/CartContext'

const links = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const { cartCount, openCart } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white position-relative">
      <nav className="d-flex justify-content-between align-items-center px-3 px-lg-5 py-3">
        <Link to="/" className="text-dark text-decoration-none fw-bold fs-3">
          Furniro
        </Link>

        <div className="d-none d-md-flex gap-5">
          {links.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-dark text-decoration-none fw-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="d-flex gap-3 gap-md-4 fs-5 align-items-center">
          <FiUser className="d-none d-sm-block" />
          <FiSearch className="d-none d-sm-block" />
          <FiHeart className="d-none d-sm-block" />
          <span
            onClick={openCart}
            className="position-relative"
            style={{ cursor: 'pointer' }}
          >
            <FiShoppingCart />
            {cartCount > 0 && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-gold"
                style={{ fontSize: '11px' }}
              >
                {cartCount}
              </span>
            )}
          </span>

          <span
            className="d-md-none"
            style={{ cursor: 'pointer' }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </span>
        </div>
      </nav>

      {menuOpen && (
        <div className="d-md-none bg-white border-top px-3 pb-3">
          {links.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="d-block py-2 text-dark text-decoration-none fw-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}