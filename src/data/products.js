import syltherine from '../assets/images/syltherine.png'
import leviosa from '../assets/images/leviosa.png'
import lolito from '../assets/images/lolito.png'
import respira from '../assets/images/respira.png'

export const products = [
  { id: 1, name: 'Syltherine', desc: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, tag: '-30%', image: syltherine },
  { id: 2, name: 'Leviosa', desc: 'Stylish cafe chair', price: 2500000, image: leviosa },
  { id: 3, name: 'Lolito', desc: 'Luxury big sofa', price: 7000000, oldPrice: 14000000, tag: '-50%', image: lolito },
  { id: 4, name: 'Respira', desc: 'Outdoor bar table and stool', price: 500000, tag: 'New', image: respira },
]

export const formatPrice = (n) => 'Rp ' + n.toLocaleString('id-ID')

export const allProducts = Array.from({ length: 32 }, (_, i) => ({
  ...products[i % products.length],
  id: i + 1,
}))