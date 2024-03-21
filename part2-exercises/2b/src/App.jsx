// import { isValidObjectId } from 'mongoose'
import { useState } from 'react'


const Filter = ({value, onChange}) => {
  return (
  <div>
    Filter people <input value={value} onChange={onChange} />
  </div>
  )
}

const PersonForm = ({ onSubmit, nameValue, nameOnChange, numValue, numOnChange}) => {

  return (
    <form onSubmit={onSubmit}>
    <div>
      name: <input value={nameValue} onChange={nameOnChange}/>
    </div>
    <div>
      number: <input value={numValue} onChange={numOnChange} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  )

}

const Persons = ({ filtered }) => {
  return (
  <div>
    {filtered().map((person) => <p key={person.id}>{person.name} {person.number}</p> )}
  </div>
  )
}



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const isNameValid = () => {
    return persons.find(person => {
      return person.name === newName
    })
  }

  const newId = () => {
    let maxId = 0
    persons.forEach(person => {
      if (person.id > maxId) {
        maxId = person.id
      }
    })
    return maxId === 0 ? 0 : maxId + 1
  }

  const addPerson = (event) => {
    event.preventDefault()

    if (!isNameValid()) {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: newId()
      }
      setPersons(persons.concat(newPerson))
    } else {
      alert(`${newName} is already in the phonebook`)
    }
    setNewName('')
    setNewNumber('')
    console.log(persons)
  }

  const filteredPeople = () => {
    let filtered = ''
    if (newSearch) {
      filtered = persons.filter((person) => {
        return person.name.toLowerCase().includes(newSearch)
      })
    } else {
      filtered = persons
    }

    return filtered
  }

  const handleNameChange = (event) => {
    event.preventDefault()
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    event.preventDefault()
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    event.preventDefault()
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newSearch} onChange={handleSearchChange}/>

      <h2>Add New</h2>
      <PersonForm 
        onSubmit={addPerson} 
        nameValue={newName}
        nameOnChange={handleNameChange}
        numValue={newNumber}
        numOnChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons filtered={filteredPeople}/>
      
      <div>debug: {newName} {newNumber}</div>
    </div>
  )
}

export default App