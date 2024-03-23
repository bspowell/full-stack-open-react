import { useState, useEffect } from '../../../part1-exercises/part1/node_modules/@types/react/ts5.0'
import axios from 'axios'
import personService from './services/persons'

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
  const deletePerson = (id, person) => {
    if(window.confirm(`Are you sure you want to delete ${person}?`)) {
      personService.remove(id)
    }
  }

  return (
  <div>
    {filtered().map((person) => {
     return (
        <div key={person.id}>
        {person.name} {person.number} <></>
        <button onClick={() => deletePerson(person.id, person.name)}>delete</button>
        </div>
     )
    })}
  </div>
  )
}


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const getPersons = () => {
    personService.getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data) 
      })
  }
  useEffect(getPersons, [])


  const isNameValid = () => {
    return persons.find(person => {
      return person.name === newName
    })
  }

  const newId = () => {
    let maxId = 0
    persons.forEach(person => {
      if (Number(person.id) > maxId) {
        maxId = Number(person.id)
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
      personService.create(newPerson)
      .then(response => console.log(response) )
    } else {
      alert(`${newName} is already in the phonebook`)
    }
    setNewName('')
    setNewNumber('')
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