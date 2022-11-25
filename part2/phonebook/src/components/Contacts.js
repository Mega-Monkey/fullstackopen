const Contacts = ({ persons, filter }) => {
    
    
    return (
        persons.filter(p => {
        // console.log(p.name.includes('a'))
        return p.name.toLowerCase().includes(filter)
    }).map(person => {
        return <p key={person.id}>{person.name} {person.number}</p>
    })
    )
    // const newArry = persons.filter(person => person.name.inculdes(filter))
    // console.log(newArry)
    // return <>{persons.map(person => {
    //     return <p key={person.id}>{person.name} {person.number}</p>
    // })}</>
}

export default Contacts