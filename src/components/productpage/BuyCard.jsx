import React, { useState } from "react";


function BuyCards() {
    const [Change, setChange] = useState(0);
    const [Change2, setChange2] = useState(0);
    const [Change3, setChange3] = useState(0);
    const [Change4, setChange4] = useState(0);
    return (
        <>
            <section>
                <div className="container py-3 py-lg-5">
                    <h3 className="ff_poppins fw_500 fs_lg">
                        You can buy the Nike Air Max 97 Men's Shoe - White here:
                    </h3>
                    <div className="row py-3">
                        <div className="col-sm-6 mt-3 mt-lg-0 col-lg-3">
                            <div className="card_border">
                                <div className="text-center border_buy_img p-4">
                                    <img className="w-100" src={""} alt="foot_locker" />
                                </div>
                                <div className="p-3">
                                    <div className="d-xxl-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center gap-4">
                                            <p className="m-0 ff_poppins fw-normal fs_xsm">Price:</p>
                                            <p className="m-0 ff_poppins fw-semibold fs_md">
                                                €179,99
                                            </p>
                                        </div>
                                        <div className="d-flex justify-content-center mt-2 mt-xxl-0">
                                            <p className="m-0 px-2 ff_poppins Best_price text-white fs_10 py-1 text-center pointer">
                                                Best Pricef
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-4 align-items-center">
                                        <p className="m-0 ff_poppins fw-normal fs_xsm mt-3">
                                            Size:
                                        </p>
                                        <p
                                            className={
                                                Change == 1
                                                    ? "m-0 mt-3 ff_poppins fw-semibold fs_md m-0"
                                                    : "d-none"
                                            }
                                        >
                                            41
                                        </p>
                                        <p
                                            className={
                                                Change == 2
                                                    ? "m-0 mt-3 ff_poppins fw-semibold fs_md"
                                                    : "d-none"
                                            }
                                        >
                                            42
                                        </p>
                                        <p
                                            className={
                                                Change == 3
                                                    ? "m-0 mt-3 ff_poppins fw-semibold fs_md"
                                                    : "d-none"
                                            }
                                        >
                                            43
                                        </p>
                                        <p
                                            className={
                                                Change == 4
                                                    ? "m-0 mt-3 ff_poppins fw-semibold fs_md"
                                                    : "d-none"
                                            }
                                        >
                                            44
                                        </p>
                                        <p
                                            className={
                                                Change == 5
                                                    ? "m-0 mt-3 ff_poppins fw-semibold fs_md"
                                                    : "d-none"
                                            }
                                        >
                                            45
                                        </p>
                                        <p
                                            className={
                                                Change == 6
                                                    ? "m-0 mt-3 ff_poppins fw-semibold fs_md"
                                                    : "d-none"
                                            }
                                        >
                                            46
                                        </p>
                                    </div>
                                    <div className="row">
                                        <div className="col-4 mt-3">
                                            <div className="size_border">
                                                <p
                                                    onClick={() => setChange(1)}
                                                    className=" m-0 ff_poppins fw_500 fs_xsm text-center py-2"
                                                >
                                                    41
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-4 mt-3">
                                            <div className="size_border">
                                                <p
                                                    onClick={() => setChange(2)}
                                                    className=" m-0 ff_poppins fw_500 fs_xsm text-center py-2"
                                                >
                                                    42
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-4 mt-3">
                                            <div className="size_border">
                                                <p
                                                    onClick={() => setChange(3)}
                                                    className=" m-0 ff_poppins fw_500 fs_xsm text-center py-2"
                                                >
                                                    43
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-4 mt-3">
                                            <div className="size_border">
                                                <p
                                                    onClick={() => setChange(4)}
                                                    className=" m-0 ff_poppins fw_500 fs_xsm text-center py-2"
                                                >
                                                    44
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-4 mt-3">
                                            <div className="size_border">
                                                <p
                                                    onClick={() => setChange(5)}
                                                    className=" m-0 ff_poppins fw_500 fs_xsm text-center py-2"
                                                >
                                                    45
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-4 mt-3">
                                            <div className="size_border">
                                                <p
                                                    onClick={() => setChange(6)}
                                                    className=" m-0 ff_poppins fw_500 fs_xsm text-center py-2"
                                                >
                                                    46
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="m-0 mt-3 ff_poppins fw-normal fs_sxm text_mahindia pointer">
                                        View this product as:
                                    </p>
                                    <p className="m-0 mt-2 ff_poppins fw-semibold fs_sxm text_blue pointer">
                                        Foot Locker NL
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mt-3 mt-lg-0 col-lg-3">
                            <div className="card_border">
                                <div className="text-center border_buy_img p-4">
                                    <img className="w-100" src={""} alt="sidestep" />
                                </div>
                                <div className="p-3">
                                    <div className="d-xxl-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center gap-4">
                                            <p className="m-0 ff_poppins fw-normal fs_xsm">Price:</p>
                                            <p className="m-0 ff_poppins fw-semibold fs_md">
                                                €179,99
                                            </p>
                                        </div>
                                        <div className="d-flex justify-content-center mt-2 mt-xxl-0">
                                            <p className=" m-0 px-2 ff_poppins Best_price text-white fs_10 py-1 text-center pointer">
                                                Best Pricef
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-4 align-items-center">
                                        <p className="m-0 ff_poppins fw-normal fs_xsm mt-3">
                                            Size:
                                        </p>
                                        <p
                                            className={
                                                Change2 == 1
                                                    ? "m-0 mt-3 ff_poppins fw-semibold fs_md m-0"
                                                    : "d-none"
                                            }
                                        >
                                            41
                                        </p>
                                        <p
                                            className={
                                                Change2 == 2
                                                    ? "m-0 mt-3 ff_poppins fw-semibold fs_md"
                                                    : "d-none"
                                            }
                                        >
                                            42
                                        </p>
                                        <p
                                            className={
                                                Change2 == 3
                                                    ? "m-0 mt-3 ff_poppins fw-semibold fs_md"
                                                    : "d-none"
                                            }
                                        >
                                            43
                                        </p>
                                        <p
                                            className={
                                                Change2 == 4
                                                    ? "m-0 mt-3 ff_poppins fw-semibold fs_md"
                                                    : "d-none"
                                            }
                                        >
                                            44
                                        </p>
                                        <p
                                            className={
                                                Change2 == 5
                                                    ? "m-0 mt-3 ff_poppins fw-semibold fs_md"
                                                    : "d-none"
                                            }
                                        >
                                            45
                                        </p>
                                        <p
                                            className={
                                                Change2 == 6
                                                    ? "m-0 mt-3 ff_poppins fw-semibold fs_md"
                                                    : "d-none"
                                            }
                                        >
                                            46
                                        </p>
                                    </div>
                                    <div className="row">
                                        <div className="col-4 mt-3">
                                            <div className="size_border">
                                                <p
                                                    onClick={() => setChange2(1)}
                                                    className=" m-0 ff_poppins fw_500 fs_xsm text-center py-2"
                                                >
                                                    41
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-4 mt-3">
                                            <div className="size_border">
                                                <p
                                                    onClick={() => setChange2(2)}
                                                    className=" m-0 ff_poppins fw_500 fs_xsm text-center py-2"
                                                >
                                                    42
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-4 mt-3">
                                            <div className="size_border">
                                                <p
                                                    onClick={() => setChange2(3)}
                                                    className=" m-0 ff_poppins fw_500 fs_xsm text-center py-2"
                                                >
                                                    43
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-4 mt-3">
                                            <div className="size_border">
                                                <p
                                                    onClick={() => setChange2(4)}
                                                    className=" m-0 ff_poppins fw_500 fs_xsm text-center py-2"
                                                >
                                                    44
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-4 mt-3">
                                            <div className="size_border">
                                                <p
                                                    onClick={() => setChange2(5)}
                                                    className=" m-0 ff_poppins fw_500 fs_xsm text-center py-2"
                                                >
                                                    45
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-4 mt-3">
                                            <div className="size_border">
                                                <p
                                                    onClick={() => setChange2(6)}
                                                    className=" m-0 ff_poppins fw_500 fs_xsm text-center py-2"
                                                >
                                                    46
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="m-0 mt-3 ff_poppins fw-normal fs_sxm text_mahindia pointer">
                                        View this product as:
                                    </p>
                                    <p className="m-0 mt-2 ff_poppins fw-semibold fs_sxm text_blue pointer">
                                        Foot Locker NL
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mt-3 mt-lg-0 col-lg-3">
                            <div className="card_border">
                                <div className="text-center border_buy_img p-4">
                                    <img className="w-100" src={""} alt="foot_locker" />
                                </div>
                                <div className="p-3">
                                    <div className="d-xxl-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center gap-4">
                                            <p className="m-0 ff_poppins fw-normal fs_xsm">Price:</p>
                                            <p className="m-0 ff_poppins fw-semibold fs_md">
                                                €179,99
                                            </p>
                                        </div>
                                        <div className="d-flex justify-content-center  mt-2 mt-xxl-0">
                                            <p className=" m-0 px-2 ff_poppins Best_price text-white fs_10 py-1 text-center pointer">
                                                Best Pricef
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-4 align-items-center">
                                        <p className="m-0 ff_poppins fw-normal fs_xsm mt-3">
                                            Size:
                                        </p>
                                        <p
                                            className={
                                                Change3 == 1
                                                    ? "m-0 mt-3 ff_poppins fw-semibold fs_md m-0"
                                                    : "d-none"
                                            }
                                        >
                                            41
                                        </p>
                                        <p
                                            className={
                                                Change3 == 2
                                                    ? "m-0 mt-3 ff_poppins fw-semibold fs_md"
                                                    : "d-none"
                                            }
                                        >
                                            42
                                        </p>
                                        <p
                                            className={
                                                Change3 == 3
                                                    ? "m-0 mt-3 ff_poppins fw-semibold fs_md"
                                                    : "d-none"
                                            }
                                        >
                                            43
                                        </p>
                                        <p
                                            className={
                                                Change3 == 4
                                                    ? "m-0 mt-3 ff_poppins fw-semibold fs_md"
                                                    : "d-none"
                                            }
                                        >
                                            44
                                        </p>
                                        <p
                                            className={
                                                Change3 == 5
                                                    ? "m-0 mt-3 ff_poppins fw-semibold fs_md"
                                                    : "d-none"
                                            }
                                        >
                                            45
                                        </p>
                                        <p
                                            className={
                                                Change3 == 6
                                                    ? "m-0 mt-3 ff_poppins fw-semibold fs_md"
                                                    : "d-none"
                                            }
                                        >
                                            46
                                        </p>
                                    </div>
                                    <div className="row">
                                        <div className="col-4 mt-3">
                                            <div className="size_border">
                                                <p
                                                    onClick={() => setChange3(1)}
                                                    className=" m-0 ff_poppins fw_500 fs_xsm text-center py-2"
                                                >
                                                    41
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-4 mt-3">
                                            <div className="size_border">
                                                <p
                                                    onClick={() => setChange3(2)}
                                                    className=" m-0 ff_poppins fw_500 fs_xsm text-center py-2"
                                                >
                                                    42
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-4 mt-3">
                                            <div className="size_border">
                                                <p
                                                    onClick={() => setChange3(3)}
                                                    className=" m-0 ff_poppins fw_500 fs_xsm text-center py-2"
                                                >
                                                    43
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-4 mt-3">
                                            <div className="size_border">
                                                <p
                                                    onClick={() => setChange3(4)}
                                                    className=" m-0 ff_poppins fw_500 fs_xsm text-center py-2"
                                                >
                                                    44
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-4 mt-3">
                                            <div className="size_border">
                                                <p
                                                    onClick={() => setChange3(5)}
                                                    className=" m-0 ff_poppins fw_500 fs_xsm text-center py-2"
                                                >
                                                    45
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-4 mt-3">
                                            <div className="size_border">
                                                <p
                                                    onClick={() => setChange3(6)}
                                                    className=" m-0 ff_poppins fw_500 fs_xsm text-center py-2"
                                                >
                                                    46
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="m-0 mt-3 ff_poppins fw-normal fs_sxm text_mahindia pointer">
                                        View this product as:
                                    </p>
                                    <p className="m-0 mt-2 ff_poppins fw-semibold fs_sxm text_blue pointer">
                                        Foot Locker NL
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mt-3 mt-lg-0 col-lg-3">
                            <div className="card_border">
                                <div className="text-center border_buy_img p-4">
                                    <img className="w-100" src={""} alt="sidestep" />
                                </div>
                                <div className="p-3">
                                    <div className="d-xxl-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center gap-4">
                                            <p className="m-0 ff_poppins fw-normal fs_xsm">Price:</p>
                                            <p className="m-0 ff_poppins fw-semibold fs_md">
                                                €179,99
                                            </p>
                                        </div>
                                        <div className="d-flex justify-content-center mt-2 mt-xxl-0">
                                            <p className=" m-0 px-2 ff_poppins Best_price text-white fs_10 py-1 text-center pointer">
                                                Best Pricef
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-4 align-items-center">
                                        <p className="m-0 ff_poppins fw-normal fs_xsm mt-3">
                                            Size:
                                        </p>
                                        <p
                                            className={
                                                Change4 == 1
                                                    ? "m-0 mt-3 ff_poppins fw-semibold fs_md m-0"
                                                    : "d-none"
                                            }
                                        >
                                            41
                                        </p>
                                        <p
                                            className={
                                                Change4 == 2
                                                    ? "m-0 mt-3 ff_poppins fw-semibold fs_md"
                                                    : "d-none"
                                            }
                                        >
                                            42
                                        </p>
                                        <p
                                            className={
                                                Change4 == 3
                                                    ? "m-0 mt-3 ff_poppins fw-semibold fs_md"
                                                    : "d-none"
                                            }
                                        >
                                            43
                                        </p>
                                        <p
                                            className={
                                                Change4 == 4
                                                    ? "m-0 mt-3 ff_poppins fw-semibold fs_md"
                                                    : "d-none"
                                            }
                                        >
                                            44
                                        </p>
                                        <p
                                            className={
                                                Change4 == 5
                                                    ? "m-0 mt-3 ff_poppins fw-semibold fs_md"
                                                    : "d-none"
                                            }
                                        >
                                            45
                                        </p>
                                        <p
                                            className={
                                                Change4 == 6
                                                    ? "m-0 mt-3 ff_poppins fw-semibold fs_md"
                                                    : "d-none"
                                            }
                                        >
                                            46
                                        </p>
                                    </div>
                                    <div className="row">
                                        <div className="col-4 mt-3">
                                            <div className="size_border">
                                                <p
                                                    onClick={() => setChange4(1)}
                                                    className=" m-0 ff_poppins fw_500 fs_xsm text-center py-2"
                                                >
                                                    41
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-4 mt-3">
                                            <div className="size_border">
                                                <p
                                                    onClick={() => setChange4(2)}
                                                    className=" m-0 ff_poppins fw_500 fs_xsm text-center py-2"
                                                >
                                                    42
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-4 mt-3">
                                            <div className="size_border">
                                                <p
                                                    onClick={() => setChange4(3)}
                                                    className=" m-0 ff_poppins fw_500 fs_xsm text-center py-2"
                                                >
                                                    43
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-4 mt-3">
                                            <div className="size_border">
                                                <p
                                                    onClick={() => setChange4(4)}
                                                    className=" m-0 ff_poppins fw_500 fs_xsm text-center py-2"
                                                >
                                                    44
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-4 mt-3">
                                            <div className="size_border">
                                                <p
                                                    onClick={() => setChange4(5)}
                                                    className=" m-0 ff_poppins fw_500 fs_xsm text-center py-2"
                                                >
                                                    45
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-4 mt-3">
                                            <div className="size_border">
                                                <p
                                                    onClick={() => setChange4(6)}
                                                    className=" m-0 ff_poppins fw_500 fs_xsm text-center py-2"
                                                >
                                                    46
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="m-0 mt-3 ff_poppins fw-normal fs_sxm text_mahindia pointer">
                                        View this product as:
                                    </p>
                                    <p className="m-0 mt-2 ff_poppins fw-semibold fs_sxm text_blue pointer">
                                        Foot Locker NL
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BuyCards;
