import usePersistentData from "../usePersistentData";
import { useState } from "react";
import CountrySelector from '../components/CountrySelector';
import CountryCard  from '../components/CountryCard';

function MainPage(){
    const { data, error } = usePersistentData('https://restcountries.com/v3.1/all');
    const [selectedCountry, setSelectedCountry] = useState(null);
  
    return (
      <div className='main-container'>
        <CountrySelector setCountry={setSelectedCountry} data={data} error={error} />
        <CountryCard data={data} country={selectedCountry} />
      </div>
    )
  }

export default MainPage;