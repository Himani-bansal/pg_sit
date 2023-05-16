import React from "react";
import "./PGCard.css"
const PGCard = ({pg}) => {
  return (
    // <div className="pg-card">
    //   <img src={pg.image} alt={pg.name} />
    //   <div className="details">
    //     <h3>{pg.name}</h3>
    //     <p>{pg.location}</p>
    //     <ul>
    //       <li>
    //         <span>Price:</span> {pg.price}
    //       </li>
    //       <li>
    //         <span>Sharing:</span> {pg.sharing}
    //       </li>
    //       <li>
    //         <span>Amenities:</span>{" "}
    //         {pg.amenities.map((amenity) => amenity + ", ")}
    //       </li>
    //     </ul>
    //   </div>
    // </div>
    <section class style={{ backgroundColor: '#eee' }}>
      <div className="container py-3">
        <div className="col-md-12 col-xl-10">
          <div className="card shadow-0 border rounded-3">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                  <div className="bg-image hover-zoom ripple ripple-surface">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
                      className="w-100"
                      alt="product"
                    />
                    <a href="#!">
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{ backgroundColor: 'rgba(253, 253, 253, 0.15)' }}
                        ></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <h5>{pg.name}</h5>
                  <div className="d-flex flex-row">
                    <div className="text-danger mb-1 me-2">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <span>310</span>
                  </div>
                  <div className="mt-1 mb-0 text-muted small">
                    <span>100% cotton</span>
                    <span className="text-primary"> • </span>
                    <span>Light weight</span>
                    <span className="text-primary"> • </span>
                    <span>Best finish</span>
                    <br />
                  </div>
                  <div className="mb-2 text-muted small">
                    <span>Unique design</span>
                    <span className="text-primary"> • </span>
                    <span>For men</span>
                    <span className="text-primary"> • </span>
                    <span>Casual</span>
                    <br />
                  </div>
                  <p className="text-truncate mb-4 mb-md-0">
                  {pg.location}
                  </p>
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">Rs.{pg.price}</h4>
                    <span className="text-danger">
                      <s>$20.99</s>
                    </span>
                  </div>
                  <h6 className="text-success">Free shipping</h6>
                  <div className="d-flex flex-column mt-4">
                    <button className="btn btn-primary btn-sm" type="button">
                      Details
                    </button>
                    <button className="btn btn-outline-primary btn-sm mt-2" type="button">
                      Add to wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PGCard;
