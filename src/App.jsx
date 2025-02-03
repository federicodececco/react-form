import { useState } from 'react'
import animals from './animals'

function App() {
  const [animalName, setAnimal] = useState('')
  const [animalsList, setAnimalList] = useState(animals)

  //add element
  const handleSubmit = e => {
    e.preventDefault()

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
      <div className='mx-auto my-4 w-md'>
        <ul>
          {animalsList.map(elem => {
            return (
              <li key={elem.id} className='columns-4 py-1'>
                <div> {elem.name}</div>
                <div>
                  <button
                    className='color-red on border px-3 font-black text-red-600 hover:bg-slate-200'
                    onClick={() => removeAnimal(elem.id)}
                  >
                    X
                  </button>
                </div>
              </li>
            )
          })}
        </ul>

        <form onSubmit={handleSubmit}>
          <input
            className='border'
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
