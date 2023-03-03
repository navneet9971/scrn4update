import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './Firstpage.css';


const Firstpage = () => {
  const [category, setCategory] = useState(''); // state for category input
  const [product, setProduct] = useState(''); // state for product input
  const [region, setRegion] = useState(''); // state for selected region
  const history = useHistory();

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleProductChange = (event) => {
    setProduct(event.target.value);
  };

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  const handleGoClick = () => {
    if (!category || !product || !region) {
      alert('Please fill in all fields!');
      return;
    }
    history.push('/secondpage');
  };


  return (
    <div className="first-container">
      <div className="form-group">
        <label htmlFor="category-input">Enter Category:</label>
        <input type="text" id="category-input" value={category} onChange={handleCategoryChange} />
      </div>

      <div className="form-group">
        <label htmlFor="product-input">Enter Name of Product:</label>
        <input type="text" id="product-input" value={product} onChange={handleProductChange} />
      </div>

      <div className="region-group">
        <label htmlFor="region-select">Region:</label>
        <select id="region-select" value={region} onChange={handleRegionChange}>
          <option value="">-- Select a region --</option>
          <option value="north">Europe</option>
        <option value="south">Africa</option>
        <option value="east">Asia</option>
        <option value="west">Americas</option>
        </select>
      </div>

      <button onClick={handleGoClick}>GO</button>
    </div>
  );
};

export default Firstpage;
