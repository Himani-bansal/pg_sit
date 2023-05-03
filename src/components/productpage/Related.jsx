import React from "react";
import { Row, Col } from "react-bootstrap";
import { shoeary } from "./CardRelated";
import Slider from "react-slick";
function Related() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 8000,
        settings: "unslick",
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          autoplay: true,
          speed: 700,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          autoplay: true,
          speed: 500,
        },
      },
    ],
  };
  return (
    <>
      <section>
        <div className="prooduct-container container py-4 py-lg-5">
          <h4 className=" ff_poppins fw-semibold fs_xl m-0">RELATED PRODUCT</h4>
          <Slider {...settings} className="py-3 row">
            {shoeary
              .map((param) => {
                return (
                  <Col lg={3} md={6} className="mt-4 up ">
                    <div className="border_card me-sm-1">
                      <div className=" position-relative">
                        <img className="w-100 " src={param.img1} alt="img1" />
                        <div>
                          <img
                            className="position-absolute top-0 start-0"
                            src={param.img2}
                            alt="img2"
                          />
                          <img
                            className="position-absolute top-0 end-0"
                            src={param.img3}
                            alt="img3"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between pe-3">
                        <div className="p-3 pb-0">
                          <p className=" ff_poppins fw_500 fs_sm text_55555 m-0">
                            {param.para1}
                          </p>
                          <div className=" d-flex gap-2 mt-1">
                            <p className="text_9999 ff_poppins fw_500 fs_sm m-0">
                              {param.para2}
                            </p>
                            <p className=" ff_poppins fw_500 fs_sm text_red m-0">
                              {param.para3}
                            </p>
                          </div>
                        </div>
                        <img className=" pointer" src={param.img4} alt="img3" />
                      </div>
                      <img
                        className="p-3"
                        src={param.imgGrayStart}
                        alt="img3"
                      />
                    </div>
                  </Col>
                );
              })
              .slice(0, 8)}
          </Slider>
          <div className="d-md-flex d-none justify-content-end gap-2 align-items-center mt-5">
            <button className="btn px-4 py-3 buton_num m-0 border-0 ff_poppins fw-semibold fs_lg">
              1
            </button>
            <button className="btn px-4 py-3 buton_num m-0 border-0 ff_poppins fw-semibold fs_lg">
              2
            </button>
            <button className="btn px-4 py-3 buton_num m-0 border-0 ff_poppins fw-semibold fs_lg">
              3
            </button>
            <button className="btn px-3 py-2 buton_next m-0 ff_poppins fw-semibold fs_lg text_55555">
              Next &gt;&gt;
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Related;
