import React, { useState } from "react";

// Scroll To Top Component
import ScrollToTop from "../components/ScrollToTop";
import { Link } from "react-router-dom/dist";

const imgData = [
  {
    id: "1",
    src: "http://localhost:3000/static/media/1.109453ab89c797c1ca63.png",
  },
  {
    id: "2",
    src: "http://localhost:3000/static/media/2.209ee0a12092b55ed2ad.png",
  },
  {
    id: "3",
    src: "http://localhost:3000/static/media/3.9d7f1767699602029e64.png",
  },
  {
    id: "4",
    src: "http://localhost:3000/static/media/4.06d2e8e9f7dde9c51714.png",
  },
  {
    id: "5",
    src: "http://localhost:3000/static/media/5.84f19999614e1d067a51.png",
  },
  {
    id: "6",
    src: "http://localhost:3000/static/media/6.ffb3344e2cb0b1cddba3.png",
  },
  {
    id: "7",
    src: "http://localhost:3000/static/media/7.f44a0e9c97069fdd69b8.png",
  },
  {
    id: "8",
    src: "http://localhost:3000/static/media/8.cd05417232ed0e97ff88.png",
  },
];

const OurRooms = () => {
  const [imageSrc, setImageSrc] = useState(
    "http://localhost:3000/static/media/1.109453ab89c797c1ca63.png"
  );
  const [isActiveIndex, setActiveIndex] = useState(0);

  const handleSelectedImage = (src, activeIndex) => {
    setImageSrc(src);
    setActiveIndex(activeIndex);
  };

  return (
    <section>
      {/* ScrollToTop */}
      <ScrollToTop />
      {/* Banner */}{" "}
      <div className="bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/70"></div>
        {/* Title */}
      </div>
      <div className="container mx-auto">
        <hr />
        <h2 className="font-primary text-[36px] lg:text-[45px] mb-10 p-2">
          Our Rooms
        </h2>
        <div className="grid grid-col-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-2 lg:max-w-none lg:mx-0">
          <div className="bg-white shadow-2xl min-h-[500px] group">
            <div className="overflow-hidden">
              <img
                className="transition-all duration-300 w-full  "
                src={imageSrc}
                alt="rooms"
              />
            </div>
            {/* Details */}
            <div className="bg-white shadow-lg lg:max-w-lg mx-auto h-auto p-2 -translate-y-[15%] flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base">
              <div className="flex justify-between w-[100%]">
                <div className="grid grid-cols-5 gap-[5px]">
                  {imgData.map((data, index) => (
                    <img
                      key={index}
                      className={`w-auto h-auto cursor-pointer ${
                        index === isActiveIndex
                          ? "border-4 border-[#2dadc9]"
                          : ""
                      }`}
                      src={data.src}
                      alt="rooms"
                      onClick={() => handleSelectedImage(data.src, index)}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Name & Description */}
            <div className="text-center mt-4">
              <Link to={`/room/`}>
                <h3 className="h3">Deluxe Room</h3>
                <p className="max-w-[300px] mx-auto mb-3 lg:mb-6">asd</p>
              </Link>
            </div>
            {/* Button */}
            <Link
              className="btn btn-secondary btn-sm max-w-[240px] mx-auto"
              to={`/room/`}
            >
              Book now from 300.00 AED
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurRooms;
