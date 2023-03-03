import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function CountryDetails({ countries }) {
  const { id } = useParams();
  console.log (id)
  const country = countries.find((c) => c.alpha3Code === id);

  const borderCountries = countries.filter((c) => country.borders.includes(c.alpha3Code));
  const [countrie, setCountrie] = useState();

  useEffect(() => {
    axios
    .get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
    .then((result) => {
      setCountrie(result.data)

    })
    .catch(err => {
      console.error(err)
    });
  }, [id])

  return (
    <div className="row">
      <div className="col">
        <h2>{country.name.common}</h2>
        <dl className="row">
          <dt className="col-sm-3">Capital</dt>
          <dd className="col-sm-9">{country.capital}</dd>

          <dt className="col-sm-3">Area</dt>
          <dd className="col-sm-9">{country.area} km²</dd>

          <dt className="col-sm-3">Borders</dt>
          <dd className="col-sm-9">
            <ul>
              {borderCountries.map((border) => (
                <li key={border.alpha3Code}>
                  <Link to={`/${border.alpha3Code}`}>{border.name.common}</Link>
                </li>
              ))}
            </ul>
          </dd>
        </dl>
      </div>
      <div className="col">
        <img
          src={`https://flagcdn.com/${country.alpha2Code.toLowerCase()}.svg`}
          alt={`${country.name.common} flag`}
          className="img-fluid"
        />
      </div>
    </div>
  );
}