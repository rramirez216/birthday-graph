import React from 'react'

function App() {
  const [list, setList] = React.useState([])
  const [birthday, setBirthday] = React.useState('0000-00-00')
  const [name, setName] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setList((prev) => [...prev, { birthday: birthday, name: name }])
    setBirthday('')
    setName('')
  }

  function handleName(event) {
    setName(event.target.value)
  }

  function handleBirthday(event) {
    console.log(event.target.value)
    setBirthday(event.target.value)
  }

  return (
    <div>
      <form action="" onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" value={name} onChange={(event) => handleName(event)} required />
        <label htmlFor="birthday">Birthday</label>
        <input type="date" name="birthday" id="birthday" value={birthday} onChange={(event) => handleBirthday(event)} />
        <button type="submit">add</button>
      </form>
      <h2>birthdays</h2>
      {list.map((item) => {
        const { birthday, name } = item
        return <p>{`${name} ${birthday}`}</p>
      })}
    </div>
  )
}

export default App
