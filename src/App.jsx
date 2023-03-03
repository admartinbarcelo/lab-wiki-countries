import countriesJSON from './countries.json';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './App.css';

function App() {
  const [countries, setCountries] = useState(countriesJSON);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then(response => {
        setCountries(response.data)
      })
      .catch(err => {
        console.error(err)
      });
  });

  return (
    <div className="App">
      <NavBar />
      <CountriesList countries={countries} />
      <Routes>
        <Route path="/:id" element={<CountryDetails countries={countries} />} />
      </Routes>
    </div>
  );
}

export default App;

