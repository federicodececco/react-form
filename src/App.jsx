import { useState } from 'react'
import animals from './animals'
import { use } from 'react'

function App() {
  const [animalName, setAnimal] = useState('')
  const [animalsList, setAnimalList] = useState(animals)

  const handleSubmit = e => {
    e.preventDefault()
    setAnimalList(currentState => [
      ...currentState,
      { id: currentState[currentState.length - 1].id + 1, name: animalName },
    ])

    setAnimal('')
  }
  return (
    <>
      <div>
        <ul>
          {animalsList.map(elem => {
            return <li key={elem.id}>{elem.name}</li>
          })}
        </ul>

        <form onSubmit={handleSubmit}>
          <input
            name='name'
            type='text'
            value={animalName}
            onChange={e => {
              setAnimal(e.target.value)
            }}
          />
          <button type='submit'> Aggiungi </button>
        </form>
      </div>
    </>
  )
}

export default App
