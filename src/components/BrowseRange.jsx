import dining from '../assets/images/dining.png'
import living from '../assets/images/living.png'
import bedroom from '../assets/images/bedroom.png'

const rooms = [
  { id: 1, name: 'Dining', image: dining },
  { id: 2, name: 'Living', image: living },
  { id: 3, name: 'Bedroom', image: bedroom },
]

export default function BrowseRange() {
  return (
    <section className="container py-5 text-center">
      <h2 className="fw-bold">Browse The Range</h2>
      <p className="text-secondary mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="row g-4">
        {rooms.map((room) => (
          <div key={room.id} className="col-12 col-md-4">
            <img src={room.image} alt={room.name} className="img-fluid rounded-3" />
            <h5 className="fw-semibold mt-3">{room.name}</h5>
          </div>
        ))}
      </div>
    </section>
  )
}