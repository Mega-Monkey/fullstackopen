const AddContact = ({newEntry, handleChange, handleSubmit}) => {
    return (

    <form onSubmit={handleSubmit}>
         <h2>add a new</h2>
        <label>
        name:
          <input
          name='name'
          value={newEntry.name}
          onChange={handleChange}
          />
        </label>
        <label>
        number:
          <input 
          name='number'
          value={newEntry.number}
          onChange={handleChange}
          />
        </label>
        <div>
          <button type="submit">add</button>
        </div>
    </form>
    )
}

export default AddContact