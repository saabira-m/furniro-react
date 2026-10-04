import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Features from './Features'
import Footer from './Footer'
import CartSidebar from './CartSidebar'

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Features />
      <Footer />
      <CartSidebar />
    </>
  )
}