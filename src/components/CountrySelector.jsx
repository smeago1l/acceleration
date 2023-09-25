import './CountrySelector.css';

function CountrySelector({setCountry, data, error}) {

  const handleChange = (e) => {
    setCountry(e.target.value)
  }

  return (
    <select className='country-selector' onChange={handleChange}>
      <option selected hidden key='def'>{ error ? 'Something Went Wrong' : 'Choose Your Country...'}</option>
      {data && data.map(country => {
        return <option value={country.cioc} key={country.cioc} >{country.name?.official}</option>
      })}
    </select>
  )
}

export default CountrySelector;
