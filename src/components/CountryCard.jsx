import "./CountryCard.css";

function CountryCard({ data, country }) {
  const selectedCountry = data
    ? data.filter((item) => item.cioc === country)[0]
    : null;

  return (
    <div className="card">
      <div className="card-label-container">
        <span className="card-label">{selectedCountry?.name?.official}</span>
        <img
          className="card-flag"
          src={selectedCountry?.flags?.png}
          alt={selectedCountry?.flags?.alt}
        />
      </div>
      <div className="card-content">
        <div className="card-item">
          <span className="card-label">Capital:</span>
          <span className="card-value">{selectedCountry?.capital[0]}</span>
        </div>
        <div className="card-item">
          <span className="card-label">Continent:</span>
          <span className="card-value">{selectedCountry?.continents[0]}</span>
        </div>
        <div className="card-item">
          <span className="card-label">Currency:</span>
          <span className="card-value">
            {selectedCountry?.currencies &&
              Object.keys(selectedCountry.currencies).reduce(
                (curr, acc) => curr + acc + " ",
                ""
              )}
          </span>
        </div>
        <div className="card-item">
          <span className="card-label">Population:</span>
          <span className="card-value">{selectedCountry?.population}</span>
        </div>
        <div className="card-item">
          <span className="card-label">Region:</span>
          <span className="card-value">{selectedCountry?.region}</span>
        </div>
        <div className="card-item">
          <span className="card-label">Borders:</span>
          <span className="card-value">
            {selectedCountry?.borders?.reduce(
              (curr, acc) => curr + acc + " ",
              ""
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
