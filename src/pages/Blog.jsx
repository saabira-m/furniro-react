import { useState } from 'react'
import { FiSearch, FiUser, FiCalendar, FiTag } from 'react-icons/fi'
import PageBanner from '../components/PageBanner'
import blog1 from '../assets/images/blog1.png'
import blog2 from '../assets/images/blog2.png'
import blog3 from '../assets/images/blog3.png'

const posts = [
  { id: 1, title: 'Going all-in with millennial design', date: '14 Oct 2022', tag: 'Wood', image: blog1 },
  { id: 2, title: 'Exploring new ways of decorating', date: '14 Oct 2022', tag: 'Handmade', image: blog2 },
  { id: 3, title: 'Handmade pieces that took time to make', date: '14 Oct 2022', tag: 'Wood', image: blog3 },
  { id: 4, title: 'Modern home in Milan', date: '14 Oct 2022', tag: 'Design', image: blog1 },
  { id: 5, title: 'Colorful office redesign', date: '14 Oct 2022', tag: 'Interior', image: blog2 },
  { id: 6, title: 'Crafting a calm bedroom', date: '14 Oct 2022', tag: 'Crafts', image: blog3 },
]

const categories = [
  { name: 'Crafts', count: 2 },
  { name: 'Design', count: 8 },
  { name: 'Handmade', count: 7 },
  { name: 'Interior', count: 1 },
  { name: 'Wood', count: 6 },
]

const perPage = 3
const loremText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis.'

export default function Blog() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [page, setPage] = useState(1)

  const filtered = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === '' || p.tag === category)
  )
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage))
  const start = (page - 1) * perPage
  const visible = filtered.slice(start, start + perPage)

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setPage(1)
  }

  const handleCategory = (name) => {
    setCategory(category === name ? '' : name)
    setPage(1)
  }

  return (
    <>
      <PageBanner title="Blog" />

      <section className="container py-5">
        <div className="row g-5">
          <div className="col-12 col-lg-8">
            {visible.length === 0 && (
              <p className="text-secondary">No posts found.</p>
            )}

            {visible.map((post) => (
              <article key={post.id} className="mb-5">
                <img src={post.image} alt={post.title} className="img-fluid rounded-3 mb-3 w-100" />
                <div className="d-flex flex-wrap gap-4 text-secondary small mb-2">
                  <span><FiUser className="me-1" />Admin</span>
                  <span><FiCalendar className="me-1" />{post.date}</span>
                  <span><FiTag className="me-1" />{post.tag}</span>
                </div>
                <h3 className="fw-semibold">{post.title}</h3>
                <p className="text-secondary">{loremText}</p>
                <span className="border-bottom border-dark pb-1" style={{ cursor: 'pointer' }}>
                  Read more
                </span>
              </article>
            ))}

            <div className="d-flex justify-content-center gap-3">
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
          </div>

          <div className="col-12 col-lg-4">
            <div className="input-group mb-5">
              <input
                value={search}
                onChange={handleSearch}
                placeholder="Search"
                className="form-control py-3"
              />
              <span className="input-group-text bg-white"><FiSearch /></span>
            </div>

            <h4 className="fw-semibold mb-4">Categories</h4>
            {categories.map((c) => (
              <div
                key={c.name}
                onClick={() => handleCategory(c.name)}
                className={`d-flex justify-content-between mb-3 ${
                  category === c.name ? 'text-gold fw-semibold' : 'text-secondary'
                }`}
                style={{ cursor: 'pointer' }}
              >
                <span>{c.name}</span>
                <span>{c.count}</span>
              </div>
            ))}

            <h4 className="fw-semibold mt-5 mb-4">Recent Posts</h4>
            {posts.slice(0, 4).map((p) => (
              <div key={p.id} className="d-flex gap-3 mb-3">
                <img
                  src={p.image}
                  alt=""
                  className="rounded-2"
                  style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                />
                <div>
                  <p className="mb-1 small">{p.title}</p>
                  <small className="text-secondary">{p.date}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}