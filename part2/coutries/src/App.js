import { useEffect, useState } from 'react';
import axios from 'axios';


const App = () => {

  const [data, setData] = useState('')
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  
  const getCountries = async () => {
    const getReq = await axios
      .get(`https://restcountries.com/v3.1/all`)
      .then(response => {
        console.log('promise fulfilled')
        setData(response.data)
      })
      console.log(getReq)
      console.log(data, 'data')
  }

  useEffect(async () => {
    const result = await axios(
      `https://restcountries.com/v3.1/all`,
    );
      // console.log(result.data.forEach(elem => console.log(elem.name.common)))
    setData(result.data);
  }, []
  )

  
  // console.log(data[0].name.common)

  return (
    <div className="App">
      <header className="App-header">
        <input 
          value={search}
          onChange={handleSearch}
        />
        {data.filter(elem => elem)} 
      </header>
    </div>
  );
}

export default App;
