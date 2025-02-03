import { useState } from 'react'
import animals from './animals'

class Animal {
  constructor(name, id) {
    this.name = name
    this.id = id
  }
}

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
  //move element
  const handleMove = (id, move) => {
    if (move && id - 1) {
      let primo = new Animal(animalsList[id - 1].name, animalsList[id - 1].id)
      let secondo = {
        name: animalsList[id].name,
        id: animalsList[id].id,
      }
      animalsList.splice(id - 1, 2, secondo, primo)
      console.log(animalsList)
      setAnimalList(animalsList)
      console.log('test')
    }
  }
  return (
    <>
      <div className='mx-auto my-4 w-md'>
        <ul className='my-2 border text-slate-200'>
          {animalsList.map(elem => {
            let isEven = elem.id % 2
            return (
              <>
                {' '}
                {isEven ? (
                  <li key={elem.id} className='columns-3 px-2 py-1'>
                    <div className='text-black'> {elem.name}</div>
                    <div>
                      <button
                        className='color-red on border px-3 font-black text-red-600 hover:bg-slate-200'
                        onClick={() => removeAnimal(elem.id)}
                      >
                        X
                      </button>
                      <button
                        className='text-black'
                        onClick={() => handleMove(elem.id, true)}
                      >
                        U
                      </button>
                    </div>
                  </li>
                ) : (
                  <li
                    key={elem.id}
                    className='columns-3 bg-slate-200 px-2 py-1'
                  >
                    <div className='text-black'> {elem.name}</div>
                    <div>
                      <button
                        className='color-red on border px-3 font-black text-red-600 hover:bg-white'
                        onClick={() => removeAnimal(elem.id)}
                      >
                        X
                      </button>
                    </div>
                  </li>
                )}
              </>
            )
          })}
        </ul>

        <form onSubmit={handleSubmit}>
          <input
            className='my-4 border px-1 text-emerald-800'
            name='name'
            type='text'
            value={animalName}
            onChange={e => {
              setAnimal(e.target.value)
            }}
          />
          <button
            type='submit'
            className='mx-1 border-1 px-4 text-slate-900 hover:border-2'
          >
            Aggiungi
          </button>
        </form>
      </div>
    </>
  )
}

export default App
