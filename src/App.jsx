import { useState } from 'react'
import animals from './animals'

function App() {
  const [animalName, setAnimal] = useState('')
  const [animalsList, setAnimalList] = useState(animals)

  const handleSubmit = e => {
    e.preventDefault()
    //add element
    console.log(animalsList.length !== 0)
    if (animalsList.length !== 0) {
      setAnimalList(currentState => [
        ...currentState,
        { id: currentState[currentState.length - 1].id + 1, name: animalName },
      ])
    } else setAnimalList([{ id: 1, name: animalName }])

    setAnimal('')
  }
  //remove element
  const removeAnimal = id => {
    setAnimalList(
      animalsList.filter(elem => {
        return elem.id !== id
      }),
    )
  }

  return (
    <>
      <div>
        <ul>
          {animalsList.map(elem => {
            return (
              <li key={elem.id}>
                {elem.name}
                <button onClick={() => removeAnimal(elem.id)}>-</button>
              </li>
            )
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
