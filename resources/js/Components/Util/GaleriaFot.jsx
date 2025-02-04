import { Link, Head } from "@inertiajs/react";
import { useState } from "react";
export default function Galeriafot({ imag1, imag2, imag3, imag4, imag5 }) {
    const image1 = imag1;
    //  "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg";
    const image2 = imag2;
    //    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg";
    const image3 = imag3;
    //    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg";
    const image4 = imag4;
    //    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg";
    const image5 = imag5;
    //    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg";
    const image6 = imag5;
    //   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg";

    const [img1, setimg1] = useState(image1);
    const [img2, setimg2] = useState(image2);
    const [img3, setimg3] = useState(image3);
    const [img4, setimg4] = useState(image4);
    const [img5, setimg5] = useState(image5);
    const [img6, setimg6] = useState(image1);

    function handleClick(e) {
        if (e === 1) {
            setimg1(img1);
        } else if (e === 2) {
            setimg1(img2);
            setimg2(img1);
        } else if (e === 3) {
            setimg1(img3);
            setimg3(img1);
        } else if (e === 4) {
            setimg1(img4);
            setimg4(img1);
        } else if (e === 5) {
            setimg1(img5);
            setimg5(img1);
        } else if (e === 6) {
            setimg1(img6);
            setimg6(img1);
        }
    }

    return (
        <div className=" w-full h-5/6 mt-5 ">
            <div
                className={`animate__animated animate__backInUp container  mb-1 rounded-xl shadow-xl ${
                    img1 ? `` : `invisible`
                }`}
            >
                <button
                    className="animate__animated animate__backInUp  w-full  h-[33rem] overflow-hidden rounded-lg  "
                    type="button"
                    id="btn1"
                    onClick={() => handleClick(1)}
                >
                    <img
                        className="rounded-lg object-cover w-full h-full "
                        src={img1}
                        alt=""
                    />
                </button>
            </div>
            <div
                className={`grip flex  grid-cols-4  w-full h-2/6 p-1 mt-2 justify-between  gap-2 ${
                    img2 ? `` : `invisible`
                }`}
            >
                <div className=" animate__animated animate__backInUp  flex bg-slate-200 w-36 h-36 mt-2 rounded-md">
                    <button
                        className="flex  w-full h-full "
                        type="button"
                        id="btn2"
                        onClick={() => handleClick(2)}
                    >
                        <img
                            className="object-cover  w-full h-full rounded-lg "
                            src={img2}
                            alt=""
                        />
                    </button>
                </div>
                <div
                    className={`animate__animated animate__backInUp  flex bg-slate-200 w-36 h-36 mt-2 rounded-md ${
                        img3 ? `` : `invisible`
                    }`}
                >
                    <button
                        className="flex  w-full h-full "
                        type="button"
                        id="btn3"
                        onClick={() => handleClick(3)}
                    >
                        <img
                            className="object-cover  w-full h-full rounded-lg "
                            src={img3}
                            alt=""
                        />
                    </button>
                </div>
                <div
                    className={`animate__animated animate__backInUp  flex bg-slate-200 w-36 h-36 mt-2 rounded-md ${
                        img4 ? `` : `invisible`
                    }`}
                >
                    <button
                        className="flex  w-full h-full "
                        type="button"
                        id="btn4"
                        onClick={() => handleClick(4)}
                    >
                        <img
                            className="object-cover  w-full h-full rounded-lg "
                            src={img4}
                            alt=""
                        />
                    </button>
                </div>
                <div
                    className={`animate__animated animate__backInUp  flex bg-slate-200 w-36 h-36 mt-2 rounded-md ${
                        img5 ? `` : `invisible`
                    }
                `}
                >
                    <button
                        className="flex  w-full h-full "
                        type="button"
                        id="btn5"
                        onClick={() => handleClick(5)}
                    >
                        <img
                            className="object-cover  w-full h-full rounded-lg "
                            src={img5}
                            alt=""
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}
