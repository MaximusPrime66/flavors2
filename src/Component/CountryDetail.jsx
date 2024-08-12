// src/Component/CountryDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const countryDetails = {
  italy: 'Detailed information about Italy...',
  france: 'Detailed information about France...',
  korea: 'Detailed information about Korea...',
  japan: 'Detailed information about Japan...',
  china: 'Detailed information about China...',
  india: 'Detailed information about India...',
};

const CountryDetail = () => {
  const { id } = useParams();
  const detail = countryDetails[id];

  if (!detail) {
    return <div>Country not found</div>;
  }

  return (
    <div className="country-detail">
      <h1>Details for {id.charAt(0).toUpperCase() + id.slice(1)}</h1>
      <p>{detail}</p>
    </div>
  );
};

export default CountryDetail;
