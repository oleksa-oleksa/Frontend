import Navbar from '../components/Navbar'
import Travel from '../components/Travel'
import data from './data'

function App() {

  const travelData = data.map(travel => {
    return (
      <Travel 
      key={travel.id}
      {...travel}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <section className="travel-list">
        {travelData}
      </section>
    </div>
  )
}

export default App
