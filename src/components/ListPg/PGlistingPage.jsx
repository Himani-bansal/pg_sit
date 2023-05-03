import React, { useState } from "react";
import PGCard from "./PGCard";
import "./PGListingPage.css"

const PGListingPage = ({pgs}) => {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (filterName, filterValue) => {
    setFilters({ ...filters, [filterName]: filterValue });
  };

  const filteredPGs = pgs.filter((pg) => {
    if (filters.price && pg.price !== filters.price) return false;
    if (filters.sharing && pg.sharing !== filters.sharing) return false;
    if (filters.amenities && !pg.amenities.includes(filters.amenities))
      return false;
    return true;
  });

  return (
    <div className="pg-listing-page d-flex">
      <div className="filter-section">
        <h2>Filters</h2>
        <div className="filter-group">
          <label htmlFor="price">Price:</label>
          <select
            id="price"
            value={filters.price || ""}
            onChange={(e) => handleFilterChange("price", e.target.value)}
          >
            <option value="">Any</option>
            <option value="5000">Less than 5000</option>
            <option value="7000">Less than 7000</option>
            <option value="8000">Less than 8000</option>
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="sharing">Sharing:</label>
          <select
            id="sharing"
            value={filters.sharing || ""}
            onChange={(e) => handleFilterChange("sharing", e.target.value)}
          >
            <option value="">Any</option>
            <option value="single">Single</option>
            <option value="double">Double</option>
            <option value="triple">Triple</option>
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="amenities">Amenities:</label>
          <select
            id="amenities"
            value={filters.amenities || ""}
            onChange={(e) => handleFilterChange("amenities", e.target.value)}
          >
            <option value="">Any</option>
            <option value="wifi">Wifi</option>
            <option value="laundry">Laundry</option>
            <option value="meals">Meals</option>
          </select>
        </div>
      </div>
      <div className="listings-section">
        <div className="pg-list">
          {filteredPGs.map((pg) => (
            <PGCard key={pg.id} pg={pg} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PGListingPage;
