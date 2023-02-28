import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Hero from '../components/Hero'
import Card from '../components/Card'
import data from './data'

function App() {

  const cardData = data.map(card => {
    return (
      <Card 
      key={card.id}
      {...card}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cardData}
      </section>
    </div>
  )
}

export default App
