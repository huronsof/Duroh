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

    console.log(imag1);

    const [img1, setimg1] = useState(image1);
    const [img2, setimg2] = useState(image2);
    const [img3, setimg3] = useState(image3);
    const [img4, setimg4] = useState(image4);
    const [img5, setimg5] = useState(image5);
    const [img6, setimg6] = useState(image6);

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
        <div class="grid gap-4 mt-3 h-min justify-items-center bg-black items-center  mb-10">
            <div className="box-border h-96 w-1/3  bg-amber-200">
                <button
                    className="object-fill h-full w-full"
                    type="button"
                    id="btn1"
                    onClick={() => handleClick(1)}
                >
                    <img className=" rounded-lg" src={img1} alt="" />
                </button>
            </div>

            <div className="flex bg-red-600 ">
                <div>
                    <div class="grid grid-cols-5 gap-4">
                        <button
                            type="button"
                            id="btn2"
                            onClick={() => handleClick(2)}
                        >
                            <img
                                class="h-1xl max-w-full rounded-lg"
                                src={img2}
                                alt=""
                            />
                        </button>
                        <button
                            type="button"
                            id="btn3"
                            onClick={() => handleClick(3)}
                        >
                            <img
                                class="object-scale-down h-1xl  max-w-full rounded-lg"
                                src={img3}
                                alt=""
                            />
                        </button>
                        <button
                            type="button"
                            id="btn4"
                            onClick={() => handleClick(4)}
                        >
                            <img
                                class="object-scale-down h-1xl max-w-full rounded-lg"
                                src={img4}
                                alt=""
                            />
                        </button>
                        <button
                            type="button"
                            id="btn5"
                            onClick={() => handleClick(5)}
                        >
                            <img
                                class="object-scale-down h-1xl max-w-full rounded-lg"
                                src={img5}
                                alt=""
                            />
                        </button>
                        <button
                            type="button"
                            id="btn6"
                            onClick={() => handleClick(6)}
                        >
                            <img
                                class="object-scale-down h-1xl  max-w-full rounded-lg"
                                src={img6}
                                alt=""
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
