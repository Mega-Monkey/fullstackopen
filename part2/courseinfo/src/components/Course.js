const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

const Course = () => {
    const frontEnd = courses[0].parts
    const backEnd = courses[1].parts

    return (
        <>  
            <h1>{courses[0].name}</h1>
            {frontEnd.map(elem => <p key={elem.id}>{elem.name} {elem.exercises}</p>)}
            <p><strong>total of {frontEnd.reduce((accumulator, frontEnd) => accumulator + frontEnd.exercises, 0)} exercises</strong></p>

            <h1>{courses[1].name}</h1>
            {backEnd.map(elem => <p key={elem.id}>{elem.name} {elem.exercises}</p>)}
            <p><strong>total of {backEnd.reduce((accumulator, backEnd) => accumulator + backEnd.exercises, 0)} exercises</strong></p>

        </>
    )

}

export default Course

