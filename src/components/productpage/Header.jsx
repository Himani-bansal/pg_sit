import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import pic1 from "./PG/pg3/pic5.png";
import pic2 from "./PG/pg3/pic7.png";
import pic3 from "./PG/pg3/pic8.png";
import pic4 from "./PG/pg3/pic6.png";
import stars_5 from "./images/stars_5.png";
import Compare from "./images/Compare.png";
import Wishlist from "./images/Wishlist.png";
import share from "./images/share.png";
import fb from "./images/fb.png";
import twit from "./images/twit.png";
import pinterest from "./images/pinterest.png";
import G from "./images/G.png";

function Header() {
    const [inc, setInc] = useState(1);
    const [Change, setChange] = useState(2);
    let setOne = () => {
        if (inc == 1) {
            setInc(1);
        } else {
            setInc(inc - 1);
        }
    };
    const [pgDetails, setPGDetails] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        // Simulate fetching PG details from the backend using the id
        // Replace this with your actual API call
        const fetchPGDetails = async () => {
            try {
                // Simulating the API call delay
                await new Promise((resolve) => setTimeout(resolve, 1000));

                // Dummy PG details data
                const dummyPGDetails = {
                    id,
                    name: 'PG Name',
                    location: 'PG Location',
                    facilities: ['Facility 1', 'Facility 2', 'Facility 3'],
                    price: '1000',
                };
                setPGDetails(dummyPGDetails);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPGDetails();
    }, [id]);

    if (!pgDetails) {
        return <div>Loading...</div>; // Show a loading indicator while fetching data
    }
    return (
        <>
            <section className="py-lg-5 container">
                <div className="product-product- py-4 py-lg-5">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6">
                            <div className="h-100">
                                <img
                                    className={Change == 1 ? "d-flex w-100" : "d-none"}
                                    src={pic1}
                                    alt="first_pg_hero"
                                />
                                <img
                                    className={Change == 2 ? "d-flex w-100" : "d-none"}
                                    src={pic2}
                                    alt="pg"
                                />
                                <img
                                    className={Change == 3 ? "d-flex w-100" : "d-none"}
                                    src={pic3}
                                    alt="second_pg_hero"
                                />
                                <img
                                    className={Change == 4 ? "d-flex w-100" : "d-none"}
                                    src={pic4}
                                    alt="third_first_pg_hero"
                                />
                                <div className="row mt-4">
                                    <div className="col-3">
                                        <div>
                                            <img
                                                onClick={() => setChange(1)}
                                                className="w-100 pointer"
                                                src={pic3}
                                                alt="first_pg_hero"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div>
                                            <img
                                                onClick={() => setChange(2)}
                                                className="w-100 pointer"
                                                src={pic3}
                                                alt="pg"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div>
                                            <img
                                                onClick={() => setChange(3)}
                                                className="w-100 pointer"
                                                src={pic2}
                                                alt="second_pg_hero"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div>
                                            <img
                                                onClick={() => setChange(4)}
                                                className="w-100 pointer"
                                                src={pic1}
                                                alt="third_first_pg_hero"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <div>
                                <h2>{pgDetails.name}</h2>
                                <div>
                                    <img src={pgDetails.image} alt="PG" />
                                </div>
                                <div>
                                    <h3>Specifications</h3>
                                    <div>
                                        <p>Location: {pgDetails.location}</p>
                                        <p>Facilities: {pgDetails.facilities.join(', ')}</p>
                                        <p>Price: {pgDetails.price}</p>
                                        {/* Add more specifications as needed */}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-lg-4 d-flex gap-3 align-items-center">
                                <p className="m-0 ff_poppins fw_500">Sharing: </p>
                                <div className="border_qty d-flex gap-3 align-items-center">
                                    <button
                                        onClick={setOne}
                                        className="btn m-0 ff_josefin fw-normal fs_md border-0"
                                    >
                                        -
                                    </button>
                                    <p className="m-0 ff_josefin fw-normal fs_md">{inc}</p>
                                    <button
                                        onClick={() => setInc(inc + 1)}
                                        className="btn m-0 ff_josefin fw-normal fs_md border-0"
                                    >
                                        +
                                    </button>
                                </div>


                            </div>
                            {/* <div className="mt-lg-4 d-flex gap-3 align-items-center">
                                <button className="btn ff_poppins butn1 fw_500 fs_md Add_to_Cart px-4 text-white">
                                    Daily
                                </button>
                                <button className="btn ff_poppins butn1 fw_500 fs_md Add_to_Cart px-4 text-white">
                                    Monthly
                                </button>
                            </div>
                            <div className="mt-lg-4 d-flex gap-3 align-items-center">
                                <button className="btn ff_poppins butn1 fw_500 fs_md Add_to_Cart px-4 text-white">
                                    Book now
                                </button>
                                <button className="btn ff_poppins butn1 fw_500 fs_md Add_to_Cart px-4 text-white">
                                    Contact Owner
                                </button>
                            </div> */}

                            {/* <div className="mt-4 d-flex gap-3 align-items-center">
                                    <p className="m-0 ff_poppins fw_500">   Time: </p>
                                    <select
                                        name="Size"
                                        className="border_qty arrow px-4 ff_josefin fs_md fw-normal"
                                    >
                                        <option value="S">S</option>
                                        <option value="Sm">Sm</option>
                                        <option value="Md">Md</option>
                                        <option value="lg">lg</option>
                                    </select>
                                </div> */}
                            {/* <div className="mt-4 d-flex gap-2 align-items-center">
                                    <p className="m-0 ff_poppins fw_500">Color: </p>
                                    <div className="clr_border pointer">
                                        <div className="bg_red"></div>
                                    </div>
                                    <div className="clr_border pointer">
                                        <div className="bg_green"></div>
                                    </div>
                                    <div className="clr_border pointer">
                                        <div className="bg_blackk"></div>
                                    </div>
                                    <div className="clr_border pointer">
                                        <div className="bg_gryy"></div>
                                    </div>
                                </div> */}
                            <div className="mt-4 d-flex align-items-center gap-5">
                                <div className="d-flex align-items-center gap-2 pointer">
                                    <img src={Compare} alt="Compare" />
                                    <p className="m-0 ff_poppins fs_xsm fw-light">Compare</p>
                                </div>
                                <div className="d-flex align-items-center gap-2 pointer">
                                    <img src={Wishlist} alt="Wishlist" />
                                    <p className="m-0 ff_poppins fs_xsm fw-light">Wishlist</p>
                                </div>
                            </div>
                            <hr className=" w-75 mt-4" />
                            <div className="d-flex align-items-center gap-4">
                                <a href="/">
                                    <img src={share} alt="share" />
                                </a>
                                <a href="/">
                                    <img src={fb} alt="fb" />
                                </a>
                                <a href="/">
                                    <img src={twit} alt="twit" />
                                </a>
                                <a href="/">
                                    <img src={pinterest} alt="pinterest" />
                                </a>
                                <a href="/">
                                    <img src={G} alt="G" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}

export default Header;
