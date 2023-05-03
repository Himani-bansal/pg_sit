import React, { useState } from "react";
import"./Quality.css"
const Qualities = () => {
    const [inc, setInc] = useState(1);
    const [Change, setChange] = useState(2);
    let setOne = () => {
        if (inc == 1) {
            setInc(1);
        } else {
            setInc(inc - 1);
        }
    };
    return <div>
        <div className="col-lg-6 mt-4 mt-lg-0 container">
            <div className="ms-lg-4">
                <h1 className=" ff_poppins fw-semibold fs_xl text-black m-0">
                    Amenities
                </h1>

                <div className="amenities m-1 p-5">
                    <div className="amenity d-flex gap-5 p-3">
                        <div>
                            <p>Wifi</p>
                         </div>
                        <div>
                          <p>Power Backup</p></div>
                        <div><p>Room Cleaning</p></div>
                        <div><p>Parking</p></div>
                    </div>
                    <div className="amenity  d-flex gap-5 p-3">
                        <div>
                            <p>TV</p></div>
                        <div>
                            <p>4-Wheeler Parking</p></div>
                        <div><p>Fridge</p></div>
                        <div><p>Water Cooler RO</p></div>
                    </div>
                    <div className="amenity d-flex gap-5 p-3">
                        <div>
                            <p>Warden</p></div>
                        <div>
                            <p>Microwave</p></div>
                        <div><p>Veg</p></div>
                        <div><p>Meals</p></div>
                    </div>
                </div>
                {/* <div className="d-flex mt-3 align-items-center">

                    <p className="m-0 ms-2 ff_poppins fw-normal fs_md text_gray">
                        PG for Boys
                    </p>
                </div>
                
                <div className="d-flex mt-3 align-items-center">

                    <p className="m-0 ms-2 ff_poppins fw-normal fs_md text_gray">
                        ( 5 Customer Review )
                    </p>
                </div>
                <p className="m-0 mt-4 ff_poppins fw-normal fs_md opacity-75">
                    Address-Near shri krishan pranami mandir tosham (bhiwani) 127040

                </p>
                <p className="m-0 mt-4 ff_poppins fw-normal fs_md opacity-75">
                    dgdsfhesbjmhfbhzfnefhdbncsdsjm fhewkuj

                </p>
                <div className="mt-lg-5 pt-4 d-flex gap-3 align-items-center">
                    <p className="m-0 ff_poppins fw_500">Sharing: </p>
                    

                    <button className="btn ff_poppins fw_500 fs_md Add_to_Cart px-4 text-white">
                        Book Now
                    </button>
                    <button className="btn ff_poppins fw_500 fs_md Add_to_Cart px-4 text-white">
                        Contact Owner
                    </button>
                </div>
                <div className="mt-lg-4 d-flex gap-3 align-items-center">
                    <button className="btn ff_poppins fw_500 fs_md Add_to_Cart px-4 text-white">
                        Daily
                    </button>
                    <button className="btn ff_poppins fw_500 fs_md Add_to_Cart px-4 text-white">
                        Monthly
                    </button> */}
                {/* {/* </div> */}
            </div> 
        </div>
    </div>
}

export default Qualities
