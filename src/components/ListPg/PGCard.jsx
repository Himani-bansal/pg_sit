import React from "react";
import "./PGCard.css"
const PGCard = ({pg}) => {
  return (
    <div className="pg-card">
      <img src={pg.image} alt={pg.name} />
      <div className="details">
        <h3>{pg.name}</h3>
        <p>{pg.location}</p>
        <ul>
          <li>
            <span>Price:</span> {pg.price}
          </li>
          <li>
            <span>Sharing:</span> {pg.sharing}
          </li>
          <li>
            <span>Amenities:</span>{" "}
            {pg.amenities.map((amenity) => amenity + ", ")}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PGCard;
