import { Link } from 'react-router-dom';

export default function CountriesList({ countries }) {
  return (
    <div className="container">
      <div className="row">
        {countries.map((country) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            key={country.alpha3Code}
          >
            <div className="card h-100">
              <Link to={`/${country.alpha3Code}`}>
                <img
                  src={`https://flagcdn.com/${country.alpha2Code.toLowerCase()}.svg`}
                  alt={`${country.name.common} flag`}
                  className="card-img-top p-3"
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{country.name.common}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
